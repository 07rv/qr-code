import mongoose, { Schema } from "mongoose";

type EmergencyContactDoc = {
  label: string;
  phoneToken: string;
};

const EmergencyContactSchema = new Schema<EmergencyContactDoc>(
  {
    label: { type: String, required: true },
    phoneToken: { type: String, required: true },
  },
  { _id: false },
);

const EmergencyProfileSchema = new Schema(
  {
    qrCode: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    publicServices: {
      police: String,
      ambulance: String,
      fire: String,
    },

    emergencyContacts: {
      type: [EmergencyContactSchema],
      validate: [
        {
          validator: (arr: EmergencyContactDoc[]) => arr.length <= 3,
          message: "Max 3 contacts allowed",
        },
      ],
      default: [],
    },

    region: {
      type: String,
      default: "IN",
    },
  },
  { timestamps: true },
);

export default mongoose.models.EmergencyProfile ||
  mongoose.model("EmergencyProfile", EmergencyProfileSchema);
