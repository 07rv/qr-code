// src/models/PhoneToken.ts
import mongoose, { Schema } from "mongoose";

const PhoneTokenSchema = new Schema(
  {
    token: {
      type: String,
      unique: true,
      index: true,
    },
    encryptedPhone: String,
    ownerId: Schema.Types.ObjectId,
  },
  { timestamps: true },
);

export default mongoose.models.PhoneToken ||
  mongoose.model("PhoneToken", PhoneTokenSchema);
