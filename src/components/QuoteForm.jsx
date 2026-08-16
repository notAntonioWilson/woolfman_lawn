"use client";

import { useState } from "react";
import { BIZ, SERVICES, CITIES } from "@/lib/site";

const EMPTY = {
  name: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  service: "",
  timing: "",
  contact: "Text",
  source: "",
  message: "",
};

export default function QuoteForm({ compact = false, defaultService = "", pageSource = "" }) {
  const [form, setForm] = useState({ ...EMPTY, service: defaultService });
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function submit() {
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Please add your name and a phone number so we can send your price.");
      return;
    }
    setError("");
    setState("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          pageSource: pageSource || (typeof window !== "undefined" ? window.location.pathname : ""),
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error("bad response");
      setState("sent");
    } catch {
      setState("idle");
      setError(`Something went wrong on our end. Call or text ${BIZ.phone} and we will take care of it.`);
    }
  }

  if (state === "sent") {
    return (
      <div className="bg-white rounded-[4px] p-8 sm:p-10 text-center">
        <h3 className="text-[26px] uppercase mb-2.5">Request Sent</h3>
        <p className="text-stone max-w-[42ch] mx-auto">
          {BIZ.owner} will reach out with your price, usually the same day. If it is urgent,
          call {BIZ.phone}.
        </p>
        <button
          className="btn btn-sm btn-line mt-6"
          onClick={() => {
            setForm({ ...EMPTY, service: defaultService });
            setState("idle");
          }}
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[4px] p-6 sm:p-8">
      {compact && (
        <div className="mb-5">
          <h3 className="text-[22px] uppercase">Get Your Free Estimate</h3>
          <p className="text-stone text-[14px] mt-1">No cost, no obligation, fast response.</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-name" className="field-label">
            Full name
          </label>
          <input
            id="qf-name"
            className="field"
            value={form.name}
            onChange={set("name")}
            placeholder="First and last"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="qf-phone" className="field-label">
            Phone number
          </label>
          <input
            id="qf-phone"
            className="field"
            value={form.phone}
            onChange={set("phone")}
            placeholder="(586) 555-0123"
            inputMode="tel"
            autoComplete="tel"
          />
        </div>
        <div>
          <label htmlFor="qf-address" className="field-label">
            Property address or ZIP
          </label>
          <input
            id="qf-address"
            className="field"
            value={form.address}
            onChange={set("address")}
            placeholder="48227"
            autoComplete="street-address"
          />
        </div>
        <div>
          <label htmlFor="qf-city" className="field-label">
            City
          </label>
          <select id="qf-city" className="field" value={form.city} onChange={set("city")}>
            <option value="">Choose your city</option>
            {CITIES.map((c) => (
              <option key={c.slug}>{c.name}</option>
            ))}
            <option>Somewhere else nearby</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="qf-service" className="field-label">
            What do you need?
          </label>
          <select id="qf-service" className="field" value={form.service} onChange={set("service")}>
            <option value="">Choose a service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option>More than one service</option>
            <option>Not sure yet</option>
          </select>
        </div>

        <div>
          <label htmlFor="qf-timing" className="field-label">
            How soon do you need it?
          </label>
          <select id="qf-timing" className="field" value={form.timing} onChange={set("timing")}>
            <option value="">Choose one</option>
            <option>As soon as possible</option>
            <option>This week</option>
            <option>Within the month</option>
            <option>Just getting a price</option>
          </select>
        </div>

        <div>
          <span className="field-label">Best way to reach you</span>
          <div className="flex gap-2">
            {["Text", "Call", "Email"].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setForm({ ...form, contact: c })}
                className={`flex-1 h-12 rounded-[3px] border-[1.5px] text-[14px] font-medium transition-colors ${
                  form.contact === c
                    ? "border-turf bg-turf text-white"
                    : "border-line text-ink hover:border-turf"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="qf-email" className="field-label">
            Email <span className="text-stone/60 font-semibold tracking-normal">optional</span>
          </label>
          <input
            id="qf-email"
            className="field"
            value={form.email}
            onChange={set("email")}
            placeholder="you@email.com"
            inputMode="email"
            autoComplete="email"
          />
        </div>

        {!compact && (
          <>
            <div className="sm:col-span-2">
              <label htmlFor="qf-source" className="field-label">
                How did you hear about us?{" "}
                <span className="text-stone/60 font-semibold tracking-normal">optional</span>
              </label>
              <select id="qf-source" className="field" value={form.source} onChange={set("source")}>
                <option value="">Choose one</option>
                <option>Google</option>
                <option>Facebook or Instagram</option>
                <option>Referral from a neighbor or friend</option>
                <option>Saw the truck</option>
                <option>Other</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="qf-message" className="field-label">
                Anything else we should know?{" "}
                <span className="text-stone/60 font-semibold tracking-normal">optional</span>
              </label>
              <textarea
                id="qf-message"
                className="field h-24 py-3 resize-y"
                value={form.message}
                onChange={set("message")}
                placeholder="Gate code, dog in the yard, corner lot, hill in the back..."
              />
            </div>
          </>
        )}

        {error && (
          <p className="sm:col-span-2 text-[13.5px] text-red-700 bg-red-50 border border-red-200 rounded-[3px] px-3 py-2.5">
            {error}
          </p>
        )}

        <div className="sm:col-span-2">
          <button
            type="button"
            onClick={submit}
            disabled={state === "sending"}
            className="btn btn-primary w-full disabled:opacity-60"
          >
            {state === "sending" ? "Sending..." : "Get My Free Estimate"}
          </button>
          <p className="text-[12.5px] text-stone mt-3 text-center">
            No cost, no obligation. Most estimates go out the same day.
          </p>
        </div>
      </div>
    </div>
  );
}
