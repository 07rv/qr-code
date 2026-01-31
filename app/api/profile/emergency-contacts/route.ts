import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import { requireAuth } from "../../../lib/auth";
import QRCode from "../../../models/QRCode";
import EmergencyProfile from "../../../models/EmergencyProfile";
import PhoneToken from "../../../models/PhoneToken";
import { encrypt } from "../../../lib/crypto";
import crypto from "crypto";

type ContactInput = {
  label: string;
  phone: string;
};

type Body = {
  contacts: ContactInput[];
};

export async function POST(req: NextRequest) {
  try {
    const user = requireAuth(req);
    const body = (await req.json()) as Body;

    if (!Array.isArray(body.contacts)) {
      return NextResponse.json(
        { error: "Contacts must be an array" },
        { status: 400 },
      );
    }

    if (body.contacts.length > 3) {
      return NextResponse.json(
        { error: "Maximum 3 emergency contacts allowed" },
        { status: 400 },
      );
    }

    await connectDB();

    // 1️⃣ Find active QR
    const qr = await QRCode.findOne({
      ownerId: user.userId,
      status: "ACTIVE",
    }).lean();

    if (!qr) {
      return NextResponse.json(
        { error: "No active QR found for user" },
        { status: 404 },
      );
    }

    // 2️⃣ Encrypt phones & create tokens
    const emergencyContacts = [];

    for (const contact of body.contacts) {
      if (!contact.label || !contact.phone) {
        return NextResponse.json(
          { error: "Each contact must have label and phone" },
          { status: 400 },
        );
      }

      const token = `tok_${crypto.randomUUID()}`;
      const encryptedPhone = encrypt(contact.phone);

      await PhoneToken.create({
        token,
        encryptedPhone,
        ownerId: user.userId,
      });

      emergencyContacts.push({
        label: contact.label,
        phoneToken: token,
      });
    }

    // 3️⃣ Update EmergencyProfile (replace contacts)
    await EmergencyProfile.updateOne(
      { qrCode: qr.code },
      { $set: { emergencyContacts } },
    );

    return NextResponse.json({
      message: "Emergency contacts updated successfully",
      count: emergencyContacts.length,
    });
  } catch (err: any) {
    if (err.message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.error("Emergency Contact Error:", err);
    return NextResponse.json(
      { error: "Failed to update emergency contacts" },
      { status: 500 },
    );
  }
}
