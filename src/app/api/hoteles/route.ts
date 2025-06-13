import { NextResponse } from "next/server";
import { mockHoteles } from "@/data/mockHoteles";

export async function GET() {
  return NextResponse.json(mockHoteles);
}
