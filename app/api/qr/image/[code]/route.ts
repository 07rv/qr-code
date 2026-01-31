import { NextRequest } from "next/server";
import QRCode from "qrcode";
import { connectDB } from "../../../../lib/db";
import { requireAuth } from "../../../../lib/auth";
import QRCodeModel from "../../../../models/QRCode";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ code: string }> },
) {
  try {
    const user = requireAuth(request);
    const { code } = await context.params;

    await connectDB();

    const qr = await QRCodeModel.findOne({
      code,
      ownerId: user.userId,
      status: "ACTIVE",
    }).lean();

    if (!qr) {
      return Response.json(
        { error: "QR not found or access denied" },
        { status: 404 },
      );
    }

    const qrUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/q/${code}`;

    const buffer = await QRCode.toBuffer(qrUrl, {
      type: "png",
      width: 512,
      margin: 2,
      errorCorrectionLevel: "H",
    });
    const body = new Uint8Array(buffer);
    return new Response(body, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "private, max-age=0",
      },
    });
  } catch (err: any) {
    if (err.message === "Unauthorized") {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.error("QR Image Error:", err);
    return Response.json(
      { error: "Failed to generate QR image" },
      { status: 500 },
    );
  }
}
