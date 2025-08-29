import { connectDB } from "@/db/db";
import User from "@/models/auth.model";
import { signJsonwebtoken, verifyTheUserPassword } from "@/utils/auth.utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectDB();
  try {
    const body = await req.json();
    const { email, password }: { email: string; password: string } = body;

    if (!email || !password) {
      return NextResponse.json(
        {
          message: "Please fill all the required fields",
        },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        {
          message: "Invalid creadentional, Please registered!",
        },
        { status: 401 }
      );
    }

    const isPasswordCorrect = await verifyTheUserPassword(
      password,
      user?.password
    );

    if (!isPasswordCorrect) {
      return NextResponse.json(
        {
          message: "Invalid creadentional",
        },
        { status: 401 }
      );
    }

    const loggInUser = await User.findById(user?.id).select("-password");

    const accessToken = signJsonwebtoken(user?.id);
    if (!accessToken) {
      return NextResponse.json(
        {
          message: "Token isn't generated yet",
        },
        { status: 400 }
      );
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    const response = NextResponse.json(
      {
        data: loggInUser,
        message: "user registered successfully",
      },
      { status: 200 }
    );

    response.cookies.set("accessToken", accessToken, options);

    return response;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "";

    return NextResponse.json(
      {
        error: message,
        message: "Internal server failed",
      },
      { status: 500 }
    );
  }
}
