import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "../../../lib/db";
import QRCode from "../../../models/QRCode";
import EmergencyProfile from "../../../models/EmergencyProfile";
import { EmergencyContact, EmergencyProfileLean } from "../../../types/api";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ code: string }> },
) {
  try {
    await connectDB();

    const { code } = await context.params;

    const qr = await QRCode.findOne({
      code,
      status: "ACTIVE",
    }).lean();

    if (!qr) {
      return NextResponse.json(
        { error: "Invalid or inactive QR" },
        { status: 404 },
      );
    }

    const profile = await EmergencyProfile.findOne({
      qrCode: code,
    }).lean<EmergencyProfileLean>();

    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    return NextResponse.json({
      qrCode: code,
      publicServices: profile.publicServices,
      emergencyContacts: (profile.emergencyContacts ?? []).map(
        (c: EmergencyContact) => ({
          label: c.label,
          token: c.phoneToken,
        }),
      ),
    });
  } catch (error) {
    console.error("QR Resolve Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
