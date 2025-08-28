import { env } from "@/config/config";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export const hashedPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

export const verifyTheUserPassword = async (
  password: string,
  hashedPassword: string
) => {
  return await bcrypt.compare(password, hashedPassword);
};

export const signJsonwebtoken = (id: string) => {
  if (!id || typeof id === "string") {
    throw NextResponse.json(
      {
        message: "userId not found",
      },
      { status: 404 }
    );
  }

  return jwt.sign({ id }, env.ACCESS_TOKEN_KEY, {
    expiresIn: env.ACCESS_TOKEN_KEY_EXPIRY as jwt.SignOptions["expiresIn"],
  });
};

export const verifyJsonWebToken = (req: NextRequest) => {
  const token = req.cookies.get("accessToken")?.value || "";

  if (!token) {
    throw NextResponse.json(
      {
        message: "Unauthorised user, Token not found",
      },
      { status: 401 }
    );
  }

  const decodeToken = jwt.verify(token, env.ACCESS_TOKEN_KEY) as jwt.JwtPayload;

  if (!decodeToken) {
    throw NextResponse.json(
      {
        message: "Unauthorised user, Token isn't exist",
      },
      { status: 401 }
    );
  }

  return decodeToken?.id;
};
