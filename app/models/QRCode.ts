import mongoose, { Schema } from "mongoose";

const QRCodeSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      immutable: true,
      index: true, // critical for scan traffic
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      required: true,
      index: true,
    },
    status: {
      type: String,
      enum: ["ACTIVE", "SUSPENDED", "EXPIRED"],
      default: "ACTIVE",
    },
  },
  { timestamps: true },
);

// Compound index for future queries
QRCodeSchema.index(
  { ownerId: 1, createdAt: -1 },
  {
    unique: true,
    partialFilterExpression: { status: "ACTIVE" },
  },
);

export default mongoose.models.QRCode || mongoose.model("QRCode", QRCodeSchema);
