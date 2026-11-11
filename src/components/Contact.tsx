"use client";

import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Copy,
  Check,
  ArrowUpRight,
  Terminal,
  Gamepad2,
  Code2,
  MapPin,
  Clock,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const INQUIRY_TOPICS = [
  {
    id: "software",
    code: "INQ // 01",
    title: "Software & Development",
    subject: "Software Development Inquiry — Exzur A. Lat Portfolio",
    description:
      "Questions regarding desktop applications, Python utilities, or software engineering collaborations.",
    icon: Code2,
  },
  {
    id: "studio",
    code: "INQ // 02",
    title: "Techtal Studios — Games & 3D Assets",
    subject: "Techtal Studios Inquiry — Games & 3D Assets",
    description:
      "Inquiries about upcoming indie game projects (Last Haven), Blender 3D weapon assets, or creative releases.",
    icon: Gamepad2,
  },
  {
    id: "general",
    code: "INQ // 03",
    title: "Networking & General Connection",
    subject: "Hello from your Developer Portfolio",
    description:
      "Connect with me as a fellow Computer Science student, indie creator, or developer.",
    icon: Terminal,
  },
];

export default function Contact() {
  const { contact, personal } = PORTFOLIO_DATA;
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<string>("software");

  const selectedTopic =
    INQUIRY_TOPICS.find((t) => t.id === selectedTopicId) || INQUIRY_TOPICS[0];

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Ignore if clipboard is restricted
    }
  };

  const encodedSubject = encodeURIComponent(selectedTopic.subject);
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    contact.email
  )}&su=${encodedSubject}`;
  const mailtoUrl = `mailto:${contact.email}?subject=${encodedSubject}`;

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
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Whether you want to discuss a software project, connect about
                game development and 3D assets, or reach out regarding Techtal
                Studios, you can contact me directly through any of the channels
                below.
              </p>
            </div>

            <div className="space-y-3">
              {/* Professional Email Card */}
              <div className="p-5 bg-[#111111] border border-white/10 hover:border-white/25 transition-colors flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-9 h-9 bg-[#080808] border border-white/10 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
                      Professional Email
                    </span>
                    <a
                      href={mailtoUrl}
                      className="text-xs sm:text-sm font-mono text-white hover:text-sky-400 break-all mt-1 block transition-colors"
                    >
                      {contact.email}
                    </a>
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
              <div className="p-5 bg-[#111111] border border-white/10 hover:border-white/25 transition-colors flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-9 h-9 bg-[#080808] border border-white/10 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
                      LinkedIn Profile
                    </span>
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-mono text-white hover:text-sky-400 break-all mt-1 inline-flex items-center gap-1 transition-colors"
                    >
                      <span>{contact.linkedin}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(contact.linkedin, "linkedin")}
                  className="p-2 text-neutral-400 hover:text-white bg-[#080808] border border-white/10 transition-colors shrink-0"
                  title="Copy LinkedIn URL"
                  aria-label="Copy LinkedIn URL"
                >
                  {copiedField === "linkedin" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* GitHub Card */}
              <div className="p-5 bg-[#111111] border border-white/10 hover:border-white/25 transition-colors flex items-start justify-between gap-4">
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

            {/* Location & Timezone Info Strip */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-4 bg-[#111111] border border-white/10 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block">
                    Location
                  </span>
                  <span className="text-xs font-mono text-white">
                    {personal.location}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-[#111111] border border-white/10 flex items-center gap-3">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block">
                    Timezone
                  </span>
                  <span className="text-xs font-mono text-white">
                    PHT (UTC+8)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Dispatch & Topic Selector (Replaces Form) */}
          <div className="lg:col-span-7">
            <div className="bg-[#111111] border border-white/10 p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-widest text-white">
                    DIRECT INQUIRY DISPATCH
                  </span>
                  <span className="text-[11px] font-mono text-sky-400">
                    SELECT A TOPIC BELOW
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 mt-4 leading-relaxed">
                  Select an inquiry topic to pre-fill the subject line, then
                  launch a direct email in Gmail, your default mail client, or
                  connect on LinkedIn.
                </p>

                {/* Selectable Inquiry Topics */}
                <div className="mt-5 space-y-3">
                  {INQUIRY_TOPICS.map((topic) => {
                    const Icon = topic.icon;
                    const isSelected = topic.id === selectedTopicId;
                    return (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => setSelectedTopicId(topic.id)}
                        className={`w-full text-left p-4 border transition-colors flex items-start gap-4 ${
                          isSelected
                            ? "bg-[#080808] border-sky-400/60"
                            : "bg-[#0c0c0c] border-white/10 hover:border-white/25"
                        }`}
                      >
                        <div
                          className={`w-9 h-9 shrink-0 border flex items-center justify-center mt-0.5 ${
                            isSelected
                              ? "bg-sky-400/10 border-sky-400/40 text-sky-400"
                              : "bg-[#111111] border-white/10 text-neutral-400"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-semibold text-white">
                              {topic.title}
                            </span>
                            <span
                              className={`text-[10px] font-mono ${
                                isSelected ? "text-sky-400" : "text-neutral-600"
                              }`}
                            >
                              {topic.code}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                            {topic.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-5 border-t border-white/10 space-y-4">
                <div className="px-3.5 py-2.5 bg-[#080808] border border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-neutral-500">SUBJECT LINE:</span>
                  <span className="text-sky-400 truncate">
                    &ldquo;{selectedTopic.subject}&rdquo;
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {/* Primary: Open directly in Gmail Web */}
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-3 bg-white hover:bg-sky-400 text-[#080808] text-xs font-mono uppercase tracking-widest font-semibold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Compose in Gmail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  {/* Secondary: Copy Email Address */}
                  <button
                    type="button"
                    onClick={() => handleCopy(contact.email, "cta-email")}
                    className="inline-flex items-center gap-2 px-4 py-3 bg-[#080808] hover:bg-white/[0.06] text-white border border-white/15 hover:border-white/35 text-xs font-mono uppercase tracking-wider transition-colors"
                  >
                    {copiedField === "cta-email" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-sky-400" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  {/* Tertiary: Connect on LinkedIn */}
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 bg-[#080808] hover:bg-white/[0.06] text-neutral-300 hover:text-white border border-white/10 hover:border-white/30 text-xs font-mono uppercase tracking-wider transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                    <span>Message on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
