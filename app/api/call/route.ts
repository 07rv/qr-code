import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../lib/db";
import QRCode from "../../models/QRCode";
import EmergencyProfile from "../../models/EmergencyProfile";
import PhoneToken from "../../models/PhoneToken";
import CallLog from "../../models/CallLog";
import { decrypt } from "../../lib/crypto";
import { initiateCall } from "../../lib/callProvider";

type Body = {
  qrCode: string;
  target: "POLICE" | "AMBULANCE" | "FIRE" | "CONTACT";
  token?: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Body;
    const { qrCode, target, token } = body;

    if (!qrCode || !target) {
      return NextResponse.json(
        { error: "qrCode and target are required" },
        { status: 400 },
      );
    }

    await connectDB();

    // 1️⃣ Validate QR
    const qr = await QRCode.findOne({
      code: qrCode,
      status: "ACTIVE",
    }).lean();

    if (!qr) {
      return NextResponse.json(
        { error: "Invalid or inactive QR" },
        { status: 404 },
      );
    }

    const profile = await EmergencyProfile.findOne({
      qrCode,
    }).lean();

    if (!profile) {
      return NextResponse.json(
        { error: "Emergency profile not found" },
        { status: 404 },
      );
    }

    let phoneToCall: string | null = null;

    // 3️⃣ Resolve target
    if (target === "CONTACT") {
      if (!token) {
        return NextResponse.json(
          { error: "Token required for contact call" },
          { status: 400 },
        );
      }

      const phoneToken = await PhoneToken.findOne({
        token,
      }).lean();

      if (!phoneToken) {
        return NextResponse.json(
          { error: "Invalid contact token" },
          { status: 404 },
        );
      }

      phoneToCall = decrypt(phoneToken.encryptedPhone);
    } else {
      phoneToCall = profile.publicServices[target.toLowerCase()];
    }

    if (!phoneToCall) {
      return NextResponse.json(
        { error: "Call target not available" },
        { status: 400 },
      );
    }

    // 4️⃣ Initiate call
    const result = await initiateCall({
      to: phoneToCall,
      fromLabel: target,
    });

    // 5️⃣ Log call
    await CallLog.create({
      qrCode,
      target,
      token: token ?? null,
      success: result.success,
      timestamp: new Date(),
    });

    return NextResponse.json({
      message: "Call initiated",
      callId: result.callId,
    });
  } catch (err) {
    console.error("Call API Error:", err);
    return NextResponse.json(
      { error: "Failed to initiate call" },
      { status: 500 },
    );
  }
}
