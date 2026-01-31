import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectDB } from "../../../lib/db";
import User from "../../../models/User";
import { signToken } from "../../../lib/jwt";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  await connectDB();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = signToken({
    userId: user._id.toString(),
    email: user.email,
  });

  return NextResponse.json({ token });
}
