import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../../lib/db";
import { requireAuth } from "../../../../lib/auth";
import QRCode from "../../../../models/QRCode";
import EmergencyProfile from "../../../../models/EmergencyProfile";
import { generateQRId } from "../../../../lib/uuid";

export async function POST(req: NextRequest) {
  const user = requireAuth(req);
  try {
    await connectDB();

    const existingQR = await QRCode.findOne({
      ownerId: user.userId,
      status: "ACTIVE",
    }).lean();

    if (existingQR) {
      return NextResponse.json(
        {
          qrCode: existingQR.code,
          qrUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/q/${existingQR.code}`,
          message: "QR already exists",
        },
        { status: 200 },
      );
    }

    // 2️⃣ Create new QR
    const qrCode = generateQRId();

    await QRCode.create({
      code: qrCode,
      ownerId: user.userId,
      status: "ACTIVE",
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
        message: "QR created successfully",
      },
      { status: 201 },
    );
  } catch (err: any) {
    if (err.code === 11000) {
      // Mongo unique index violation (race condition safety)
      const existingQR = await QRCode.findOne({
        ownerId: user.userId,
        status: "ACTIVE",
      }).lean();

      if (existingQR) {
        return NextResponse.json(
          {
            qrCode: existingQR.code,
            qrUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/q/${existingQR.code}`,
            message: "QR already exists",
          },
          { status: 200 },
        );
      }
    }

    if (err.message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.error(err);
    return NextResponse.json({ error: "Failed to create QR" }, { status: 500 });
  }
}
