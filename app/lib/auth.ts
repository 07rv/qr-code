import { NextRequest } from "next/server";
import { verifyToken } from "./jwt";

export function requireAuth(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("Unauthorized");
  }

  const token = authHeader.split(" ")[1];
  return verifyToken(token);
}
