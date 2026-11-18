"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Briefcase,
  Check,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { personal } from "@/lib/data";

const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ??
  "f2332c55-9334-4e59-9023-20f71d5c0164";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", `Portfolio inquiry from ${form.name}`);
    formData.append("from_name", form.name);
    formData.append("replyto", form.email);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(
          typeof data.message === "string"
            ? data.message
            : "Something went wrong. Please try again.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network error — please try again, or email me directly.",
      );
    }
  };

  return (
    <section id="contact" className="section-pad bg-bg-subtle">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s build something fast and well-architected."
          description="Open to remote Frontend Engineer, AI Application Engineer and Full-Stack roles with product teams building AI-powered or complex SaaS software. If that&apos;s you — or you have a project in mind — let&apos;s talk."
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-10">
          <div className="min-w-0">
            <h3 className="section-label">Direct</h3>
            <dl className="mt-3 divide-y divide-border border-y border-border">
              <ContactRow icon={Mail} label="Email" value={personal.email} href={`mailto:${personal.email}`} />
              <ContactRow icon={Phone} label="Phone" value={personal.phone} href={`tel:${personal.phone.replace(/\s/g, "")}`} />
              <ContactRow icon={MapPin} label="Location" value={personal.location} />
            </dl>
            <h3 className="section-label mt-6">Elsewhere</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <SocialLink href={personal.github} icon={Github} label="GitHub" />
              <SocialLink href={personal.linkedin} icon={Linkedin} label="LinkedIn" />
              <SocialLink href={personal.upwork} icon={Briefcase} label="Upwork" />
            </div>
          </div>

          <GlassCard className="min-w-0 bg-bg">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" value={form.name} onChange={onChange} placeholder="Jane Doe" />
                <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} placeholder="jane@company.com" />
              </div>
              <Field label="Message" name="message" value={form.message} onChange={onChange} placeholder="Tell me about the role or project..." textarea />
              <input type="checkbox" name="botcheck" hidden tabIndex={-1} autoComplete="off" />
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p role="status" className="max-w-xs text-sm leading-relaxed text-fg-muted">
                  {status === "sent"
                    ? "Thanks — I'll get back to you within 24 hours."
                    : status === "error"
                      ? "Couldn't send. You can retry below."
                      : "Goes straight to my inbox — usually a reply within 24 hours."}
                </p>
                <button type="submit" disabled={status === "sending"} className="action action-primary shrink-0 disabled:cursor-wait disabled:opacity-60">
                  {status === "sending" ? (
                    <><Loader2 aria-hidden="true" className="h-4 w-4 motion-safe:animate-spin" /> Sending...</>
                  ) : status === "sent" ? (
                    <><Check aria-hidden="true" className="h-4 w-4" /> Sent</>
                  ) : (
                    <><Send aria-hidden="true" className="h-4 w-4" /> {status === "error" ? "Try again" : "Send Message"}</>
                  )}
                </button>
              </div>
              {status === "error" && errorMessage && (
                <div role="alert" className="flex items-start gap-2 rounded-lg border border-red-400/40 bg-red-400/10 px-3 py-2 text-sm text-red-700 dark:text-red-300">
                  <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-center gap-2 py-3.5 text-sm sm:gap-4">
      <dt className="flex items-center gap-2 font-medium">
        <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
        {label}
      </dt>
      <dd className="break-words text-fg-muted">
        {href ? <a href={href} className="underline-offset-4 hover:text-accent hover:underline">{value}</a> : value}
      </dd>
    </div>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: typeof Github; label: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="action action-secondary px-3">
      <Icon aria-hidden="true" className="h-4 w-4" />
      {label}
    </a>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  type?: string;
  textarea?: boolean;
};

function Field({ label, name, value, onChange, placeholder, type = "text", textarea }: FieldProps) {
  const props = { name, value, onChange, placeholder, required: true };

  return (
    <label className="block min-w-0">
      <span className="mb-2 block text-sm font-medium">{label}</span>
      {textarea ? (
        <textarea {...props} rows={5} className="contact-field block resize-y" />
      ) : (
        <input {...props} type={type} autoComplete={name} className="contact-field block" />
      )}
    </label>
  );
}
