import mongoose from "mongoose";

const PersonalSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
    passport: {
      type: String,
      required: true,
    },
    work: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Personal", PersonalSchema);
