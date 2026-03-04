import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  // TODO: Store in database (Supabase, Vercel Postgres, etc.)
  console.log(
    `[Workshop Registration] ${email} at ${new Date().toISOString()}`
  );

  return NextResponse.json({ success: true, message: "Registration recorded" });
}
