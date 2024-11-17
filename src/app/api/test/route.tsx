import { NextRequest, NextResponse } from "next/server";
import { cloneRepository } from "@/app/api/_utils/github";

export async function GET(req: NextRequest) {
  try {
    // await cloneRepository();
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "User could not be verified" },
      { status: 500 }
    );
  }
}
