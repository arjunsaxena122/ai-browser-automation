import { connectDB } from "@/db/db";
import User from "@/models/auth.model";
import { verifyJsonWebToken } from "@/utils/auth.utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB();
  try {
    const decodedId = verifyJsonWebToken(req);

    const user = await User.findById(decodedId).select("-password");

    if (!user) {
      return NextResponse.json(
        {
          message: "user doesn't exist",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        data: user,
        message: `${user?.email} data fetched`,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
        message: "Internal server failed",
      },
      { status: 500 }
    );
  }
}
