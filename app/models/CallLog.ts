import mongoose, { Schema } from "mongoose";

const CallLogSchema = new Schema(
  {
    qrCode: String,
    target: String,
    token: String,
    success: Boolean,
    timestamp: Date,
  },
  { timestamps: true },
);

export default mongoose.models.CallLog ||
  mongoose.model("CallLog", CallLogSchema);
