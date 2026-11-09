"use client";

import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Contact() {
  const { contact } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "submitted" | "mailto-ready" | "error"
  >("idle");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const isEmailPlaceholder =
    contact.email.startsWith("[") || !contact.email.includes("@");
  const isLinkedInPlaceholder =
    contact.linkedin.startsWith("[") || !contact.linkedin.startsWith("http");

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Fallback if clipboard is restricted
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If an external form endpoint (e.g. Formspree) is configured via env var, use it:
    if (contact.formEndpoint) {
      try {
        setStatus("submitting");
        const response = await fetch(contact.formEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus("submitted");
          setFormData({ name: "", email: "", subject: "", message: "" });
          return;
        }
        setStatus("error");
      } catch {
        setStatus("error");
      }
      return;
    }

    // Functional mailto fallback
    const recipient = isEmailPlaceholder ? "" : contact.email;
    const mailtoSubject = encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;
    window.location.href = mailtoUrl;
    setStatus("mailto-ready");
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-28 bg-[#080808] border-b border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-10 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400 mb-3">
              <span>05 //</span>
              <span>DIRECT COMMUNICATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Contact
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
            INQUIRIES // COLLABORATION // TECHTAL STUDIOS
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Channels & Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Get in Touch
              </h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Whether you want to discuss a software project, connect about
                game development and 3D assets, or reach out regarding Techtal
                Studios, feel free to send a message or connect via the links
                below.
              </p>
            </div>

            <div className="space-y-3">
              {/* Professional Email Card */}
              <div className="p-5 bg-[#111111] border border-white/10 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-9 h-9 bg-[#080808] border border-white/10 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
                      Professional Email
                    </span>
                    {isEmailPlaceholder ? (
                      <span className="text-xs sm:text-sm font-mono text-neutral-200 break-all mt-1 block">
                        {contact.email}
                      </span>
                    ) : (
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-xs sm:text-sm font-mono text-white hover:text-sky-400 break-all mt-1 block transition-colors"
                      >
                        {contact.email}
                      </a>
                    )}
                    {isEmailPlaceholder && (
                      <span className="text-[11px] font-mono text-neutral-500 mt-1 block">
                        Editable in src/data/portfolio.ts
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(contact.email, "email")}
                  className="p-2 text-neutral-400 hover:text-white bg-[#080808] border border-white/10 transition-colors shrink-0"
                  title="Copy Email"
                  aria-label="Copy Email"
                >
                  {copiedField === "email" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* LinkedIn Card */}
              <div className="p-5 bg-[#111111] border border-white/10 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-9 h-9 bg-[#080808] border border-white/10 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
                      LinkedIn Profile
                    </span>
                    {isLinkedInPlaceholder ? (
                      <span className="text-xs sm:text-sm font-mono text-neutral-200 break-all mt-1 block">
                        {contact.linkedin}
                      </span>
                    ) : (
                      <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-mono text-white hover:text-sky-400 break-all mt-1 inline-flex items-center gap-1 transition-colors"
                      >
                        <span>{contact.linkedin}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {isLinkedInPlaceholder && (
                      <span className="text-[11px] font-mono text-neutral-500 mt-1 block">
                        Editable in src/data/portfolio.ts
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(contact.linkedin, "linkedin")}
                  className="p-2 text-neutral-400 hover:text-white bg-[#080808] border border-white/10 transition-colors shrink-0"
                  title="Copy LinkedIn value"
                  aria-label="Copy LinkedIn value"
                >
                  {copiedField === "linkedin" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* GitHub Card */}
              <div className="p-5 bg-[#111111] border border-white/10 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-9 h-9 bg-[#080808] border border-white/10 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                    <Github className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
                      GitHub Profile
                    </span>
                    <a
                      href={contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-mono text-white hover:text-sky-400 break-all mt-1 inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>{contact.github}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  </div>
                </div>

                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-neutral-400 hover:text-white bg-[#080808] border border-white/10 transition-colors shrink-0"
                  title="Open GitHub Profile"
                  aria-label="Open GitHub Profile"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-[#111111] border border-white/10 p-6 sm:p-8 space-y-5"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-widest text-white">
                  SEND A MESSAGE
                </span>
                <span className="text-[11px] font-mono text-neutral-500">
                  {contact.formEndpoint
                    ? "DIRECT ENDPOINT ACTIVE"
                    : "MAILTO CLIENT FALLBACK"}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2"
                  >
                    Name <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="w-full px-3.5 py-2.5 bg-[#080808] border border-white/15 focus:border-sky-400 focus:outline-none text-sm text-white placeholder:text-neutral-600 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2"
                  >
                    Email <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 bg-[#080808] border border-white/15 focus:border-sky-400 focus:outline-none text-sm text-white placeholder:text-neutral-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2"
                >
                  Subject <span className="text-sky-400">*</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="Project inquiry, collaboration, or general question"
                  className="w-full px-3.5 py-2.5 bg-[#080808] border border-white/15 focus:border-sky-400 focus:outline-none text-sm text-white placeholder:text-neutral-600 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2"
                >
                  Message <span className="text-sky-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Write your message here..."
                  className="w-full px-3.5 py-2.5 bg-[#080808] border border-white/15 focus:border-sky-400 focus:outline-none text-sm text-white placeholder:text-neutral-600 transition-colors resize-y"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-white hover:bg-sky-400 text-[#080808] text-xs font-mono uppercase tracking-widest font-semibold transition-colors disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </span>
                </button>

                {formData.message && (
                  <button
                    type="button"
                    onClick={() =>
                      handleCopy(
                        `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\n${formData.message}`,
                        "formatted-message"
                      )
                    }
                    className="inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-mono text-neutral-400 hover:text-white bg-[#080808] border border-white/10 transition-colors"
                  >
                    {copiedField === "formatted-message" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Formatted Message</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {status === "submitted" && (
                <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
                  Your message has been sent. Thank you for reaching out!
                </div>
              )}

              {status === "mailto-ready" && (
                <div className="p-3.5 bg-sky-500/10 border border-sky-500/30 text-xs font-mono text-sky-300">
                  Opened your default mail client with your pre-filled message.
                  {isEmailPlaceholder &&
                    " (Note: Replace [YOUR PROFESSIONAL EMAIL] in src/data/portfolio.ts to pre-fill the recipient address.)"}
                </div>
              )}

              {status === "error" && (
                <div className="p-3.5 bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-300">
                  Could not submit via the endpoint. Please use the Copy
                  Formatted Message button or email directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
