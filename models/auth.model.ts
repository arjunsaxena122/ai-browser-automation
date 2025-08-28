import { AvailableEnumUserRoles, EnumUserRoles } from "@/utils/constant";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      required: [true, "Full Name is required"],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "Password is required"],
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: AvailableEnumUserRoles,
      default: EnumUserRoles.USER,
    },
    emailVerificationToken: {
      type: String,
      trim: true,
    },
    emailVerificationTokenExpiry: {
      type: Date,
    },
    forgetPasswordToken: {
      type: String,
      trim: true,
    },
    forgetPasswordTokenExpiry: {
      type: Date,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
