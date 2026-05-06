"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Globe,
  Check,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { personal } from "@/lib/data";
import { cn } from "@/lib/utils";

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
    <section id="contact" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s build something fast and well-architected."
          description="Whether you&apos;re hiring for a senior frontend role, kicking off a greenfield Angular product, or rescuing a legacy app — I&apos;d love to talk."
        />

        <div className="grid lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 space-y-5"
          >
            <GlassCard>
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-fg-subtle">
                Direct
              </div>
              <div className="mt-5 space-y-4">
                <ContactRow
                  icon={Mail}
                  label="Email"
                  value={personal.email}
                  href={`mailto:${personal.email}`}
                />
                <ContactRow
                  icon={Phone}
                  label="Phone"
                  value={personal.phone}
                  href={`tel:${personal.phone.replace(/\s/g, "")}`}
                />
                <ContactRow
                  icon={MapPin}
                  label="Location"
                  value={personal.location}
                />
              </div>
            </GlassCard>

            <GlassCard>
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-fg-subtle">
                Elsewhere
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                <SocialLink href={personal.github} icon={Github} label="GitHub" />
                <SocialLink href={personal.linkedin} icon={Linkedin} label="LinkedIn" />
                <SocialLink href={personal.website} icon={Globe} label="Synexis" />
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <GlassCard>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Jane Doe"
                    required
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="jane@company.com"
                    required
                  />
                </div>
                <Field
                  label="Message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell me about the role or project..."
                  textarea
                  required
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="flex items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-fg-subtle">
                    {status === "sent"
                      ? "Thanks — I'll get back to you within 24 hours."
                      : status === "error"
                        ? "Couldn't send. You can retry below."
                        : "Goes straight to my inbox — usually a reply within 24 hours."}
                  </p>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={cn(
                      "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                      "bg-sage-500 hover:bg-sage-600 dark:bg-sage-300 dark:hover:bg-sage-200 text-sage-50 dark:text-sage-950",
                      "shadow-glow hover:shadow-glow-strong hover:-translate-y-0.5",
                      "disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0",
                    )}
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : status === "sent" ? (
                      <>
                        <Check className="h-4 w-4" />
                        Sent
                      </>
                    ) : status === "error" ? (
                      <>
                        <Send className="h-4 w-4" />
                        Try again
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
                {status === "error" && errorMessage && (
                  <div className="flex items-start gap-2 rounded-xl border border-red-400/40 bg-red-400/10 px-3 py-2 text-xs text-red-600 dark:text-red-300">
                    <AlertCircle className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </form>
            </GlassCard>
          </motion.div>
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
  const content = (
    <div className="flex items-center gap-4 group">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-sage-500/10 dark:bg-sage-300/10 text-sage-600 dark:text-sage-200 transition-colors group-hover:bg-sage-500/20 dark:group-hover:bg-sage-300/20">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-fg-subtle">
          {label}
        </div>
        <div className="text-sm md:text-base text-fg truncate">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Github;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border-strong/60 bg-bg-subtle/40 hover:bg-bg-subtle hover:border-sage-400/60 px-4 py-3 text-sm text-fg transition-colors"
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
};

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  textarea,
}: FieldProps) {
  const baseClass = cn(
    "w-full rounded-xl border border-border bg-bg-subtle/40 px-4 py-3 text-sm text-fg placeholder:text-fg-subtle/70",
    "outline-none transition-all",
    "focus:border-sage-400/70 focus:bg-bg-subtle/70 focus:ring-2 focus:ring-sage-400/20",
  );
  return (
    <label className="block">
      <span className="block text-xs font-medium uppercase tracking-wider text-fg-subtle mb-1.5">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={5}
          className={cn(baseClass, "resize-none")}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={baseClass}
        />
      )}
    </label>
  );
}
