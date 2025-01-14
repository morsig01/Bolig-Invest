// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // TODO: Add your email-sending logic here (e.g., using Nodemailer)
    console.log("Message received:", { name, email, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
