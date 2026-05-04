"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Check } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { personal } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`,
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("sent"), 400);
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
              <div className="mt-5 flex gap-3">
                <SocialLink href={personal.github} icon={Github} label="GitHub" />
                <SocialLink href={personal.linkedin} icon={Linkedin} label="LinkedIn" />
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
                <div className="flex items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-fg-subtle">
                    Submitting opens your default mail client.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={cn(
                      "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                      "bg-teal-500 hover:bg-teal-600 dark:bg-teal-300 dark:hover:bg-teal-200 text-teal-50 dark:text-teal-950",
                      "shadow-glow hover:shadow-glow-strong hover:-translate-y-0.5",
                      "disabled:opacity-60 disabled:cursor-not-allowed",
                    )}
                  >
                    {status === "sent" ? (
                      <>
                        <Check className="h-4 w-4" />
                        Sent
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
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
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-teal-500/10 dark:bg-teal-300/10 text-teal-600 dark:text-teal-200 transition-colors group-hover:bg-teal-500/20 dark:group-hover:bg-teal-300/20">
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
      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border-strong/60 bg-bg-subtle/40 hover:bg-bg-subtle hover:border-teal-400/60 px-4 py-3 text-sm text-fg transition-colors"
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
    "focus:border-teal-400/70 focus:bg-bg-subtle/70 focus:ring-2 focus:ring-teal-400/20",
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
