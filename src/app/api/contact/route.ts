import { transporter } from "@/lib/mailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  console.log("Received contact form data:", { name, email, message });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "waybig99@gmail.com", // your receiving email
      subject: `Lumere website - ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
