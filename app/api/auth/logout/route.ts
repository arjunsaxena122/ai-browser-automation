import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("accessToken")?.value || "";

    if (!token) {
      return NextResponse.json(
        {
          message: "Unauthorised user, Token isn't exist",
        },
        { status: 401 }
      );
    }

    const response = NextResponse.json(
      {
        message: "Logout successfully",
      },
      { status: 200 }
    );

    response.cookies.delete("accessToken");
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
