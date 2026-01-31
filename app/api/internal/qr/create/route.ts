import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../../lib/db";
import { requireAuth } from "../../../../lib/auth";
import QRCode from "../../../../models/QRCode";
import EmergencyProfile from "../../../../models/EmergencyProfile";
import { generateQRId } from "../../../../lib/uuid";

export async function POST(req: NextRequest) {
  try {
    const user = requireAuth(req);

    await connectDB();

    const qrCode = generateQRId();

    await QRCode.create({
      code: qrCode,
      ownerId: user.userId,
    });

    await EmergencyProfile.create({
      qrCode,
      publicServices: {
        police: "112",
        ambulance: "108",
        fire: "101",
      },
      emergencyContacts: [],
      region: "IN",
    });

    return NextResponse.json(
      {
        qrCode,
        qrUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/q/${qrCode}`,
      },
      { status: 201 },
    );
  } catch (err: any) {
    if (err.message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.error(err);
    return NextResponse.json({ error: "Failed to create QR" }, { status: 500 });
  }
}
