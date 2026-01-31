import { uuidv7 } from "uuidv7";

export function generateQRId(): string {
  return uuidv7();
}
