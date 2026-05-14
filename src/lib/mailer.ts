import nodemailer from "nodemailer";

/**
 * Shared mail transport.
 *
 * Configure via env vars (.env.local):
 *   SMTP_HOST=smtp.gmail.com
 *   SMTP_PORT=465
 *   SMTP_SECURE=true
 *   SMTP_USER=info@devsnio.com
 *   SMTP_PASS=<google-app-password>
 *   MAIL_FROM="devsnio <info@devsnio.com>"
 *   MAIL_TO=info@devsnio.com
 *
 * For Gmail, generate an App Password at:
 *   https://myaccount.google.com/apppasswords
 */
function buildTransport() {
  const host = process.env.SMTP_HOST ?? "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT ?? 465);
  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === "true"
    : port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error(
      "SMTP credentials missing. Set SMTP_USER and SMTP_PASS in .env.local"
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export const MAIL_FROM = process.env.MAIL_FROM ?? "devsnio <info@devsnio.com>";
export const MAIL_TO = process.env.MAIL_TO ?? "info@devsnio.com";

export async function sendMail(opts: {
  to?: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}) {
  const transport = buildTransport();
  return transport.sendMail({
    from: MAIL_FROM,
    to: opts.to ?? MAIL_TO,
    subject: opts.subject,
    html: opts.html,
    text: opts.text,
    replyTo: opts.replyTo,
  });
}
