import { NextResponse } from "next/server";
import { z } from "zod";
import { sendMail } from "@/lib/mailer";

export const runtime = "nodejs"; // nodemailer requires Node runtime

const contactSchema = z.object({
  name: z.string().min(2, "Name is required").max(120),
  email: z.email("Valid email is required"),
  company: z.string().max(160).optional().or(z.literal("")),
  services: z.array(z.string()).max(10).optional(),
  budget: z.string().max(80).optional().or(z.literal("")),
  message: z.string().min(10, "Tell us a bit more about your project").max(5000),
  // Honeypot — checked manually below, accept any value here
  website: z.string().optional(),
});

function escape(s: string | undefined | null) {
  if (!s) return "";
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderHtml(data: z.infer<typeof contactSchema>) {
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Company / Project", data.company ?? "—"],
    ["Services", (data.services ?? []).join(", ") || "—"],
    ["Budget", data.budget || "—"],
  ];

  const rowsHtml = rows
    .map(
      ([k, v]) => `
        <tr>
          <td style="padding:8px 12px;border-bottom:1px solid #f1f5f9;color:#71717a;font-size:13px;width:160px;">${escape(k)}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #f1f5f9;color:#18181b;font-size:14px;font-weight:600;">${escape(v)}</td>
        </tr>`
    )
    .join("");

  return `
  <!doctype html>
  <html>
    <body style="margin:0;padding:32px 16px;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e4e4e7;">
        <tr>
          <td style="padding:24px 28px;background:#0A0A0A;color:#fff;">
            <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.12em;color:#FF751F;text-transform:uppercase;">New contact</p>
            <h1 style="margin:0;font-size:22px;font-weight:800;letter-spacing:-0.02em;">${escape(data.name)} just reached out</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 28px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              ${rowsHtml}
            </table>
            <div style="margin-top:22px;padding:18px;background:#fafafa;border:1px solid #f1f5f9;border-radius:12px;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.08em;">Message</p>
              <p style="margin:0;font-size:14px;color:#27272a;line-height:1.6;white-space:pre-wrap;">${escape(data.message)}</p>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 28px;background:#fafafa;border-top:1px solid #f1f5f9;color:#a1a1aa;font-size:12px;">
            Sent from the devsnio contact form · Reply directly to respond.
          </td>
        </tr>
      </table>
    </body>
  </html>`;
}

function renderText(data: z.infer<typeof contactSchema>) {
  return [
    `New contact from devsnio.com`,
    ``,
    `Name:     ${data.name}`,
    `Email:    ${data.email}`,
    `Company:  ${data.company || "—"}`,
    `Services: ${(data.services ?? []).join(", ") || "—"}`,
    `Budget:   ${data.budget || "—"}`,
    ``,
    `Message:`,
    data.message,
  ].join("\n");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    return NextResponse.json(
      { ok: false, error: issue?.message ?? "Validation failed" },
      { status: 400 }
    );
  }

  // Honeypot — silently drop bot submissions
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  try {
    await sendMail({
      subject: `New project inquiry — ${parsed.data.name}`,
      html: renderHtml(parsed.data),
      text: renderText(parsed.data),
      replyTo: parsed.data.email,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/contact] mail send failed:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send message. Please email info@devsnio.com directly." },
      { status: 500 }
    );
  }
}
