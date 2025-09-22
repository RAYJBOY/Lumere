import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter
  .verify()
  .then(() => {
    console.log("📧 SMTP server is ready to send emails");
  })
  .catch((err) => {
    console.error("SMTP config error:", err);
  });
