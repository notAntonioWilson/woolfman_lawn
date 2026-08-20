import { NextResponse } from "next/server";

/* ------------------------------------------------------------------
   LEAD INTAKE
   Every estimate request on the site POSTs here.

   Set LEAD_WEBHOOK_URL in your environment (Vercel > Settings >
   Environment Variables) to the n8n or Make webhook URL. This route
   forwards the lead as JSON. From there n8n handles the email to
   Keonte, the SMS, and the Airtable row.

   With no webhook set, the lead is logged to the server console so
   local development still works.
   ------------------------------------------------------------------ */

const DEFAULT_WEBHOOK_URL =
  "https://n8n-self-host-xogy.onrender.com/webhook/aa096b86-4af2-40ab-90a8-ddb090dabcf4";

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = String(data.name || "").trim();
  const phone = String(data.phone || "").trim();
  const email = String(data.email || "").trim();

  if (!name || !phone || !email) {
    return NextResponse.json(
      { ok: false, error: "Name, phone number, and email are required." },
      { status: 422 }
    );
  }

  // Honeypot: bots fill hidden fields. Accept silently so they do not retry.
  if (data.company) return NextResponse.json({ ok: true });

  const lead = {
    source: "lawnwoolf.com",
    name,
    phone,
    email,
    city: String(data.city || "").trim(),
    service: String(data.service || "").trim(),
    timing: String(data.timing || "").trim(),
    preferredContact: String(data.contact || "").trim(),
    heardAbout: String(data.source || "").trim(),
    message: String(data.message || "").trim().slice(0, 2000),
    pageSource: String(data.pageSource || "").trim(),
    submittedAt: data.submittedAt || new Date().toISOString(),
    userAgent: request.headers.get("user-agent") || "",
  };

  // LEAD_WEBHOOK_URL wins if set in Vercel; otherwise fall back to the live
  // n8n production webhook so the form works without any env configuration.
  const webhook = process.env.LEAD_WEBHOOK_URL || DEFAULT_WEBHOOK_URL;

  try {
    // n8n is on a free Render instance that can cold-start, so allow a long
    // window before giving up rather than failing a real lead.
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000);

    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true, forwarded: true });
  } catch (err) {
    // Never lose a lead. The visitor still sees success; the full payload goes
    // to the Vercel runtime log so it can be recovered by hand.
    console.error("[LEAD] Webhook failed. Lead payload:", JSON.stringify(lead), err);
    return NextResponse.json({ ok: true, forwarded: false });
  }
}
