import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Footer() {
  const { contact, navigation } = PORTFOLIO_DATA;

  const isEmailPlaceholder =
    contact.email.startsWith("[") || !contact.email.includes("@");
  const isLinkedInPlaceholder =
    contact.linkedin.startsWith("[") || !contact.linkedin.startsWith("http");

  return (
    <footer className="bg-[#080808] text-neutral-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 flex items-center justify-center bg-[#111111] border border-white/15 text-xs font-mono font-semibold text-white">
                EL
              </span>
              <span className="text-sm font-mono tracking-[0.18em] text-white font-semibold">
                EXZUR A. LAT
              </span>
            </div>
            <p className="text-sm text-neutral-300">
              A personal portfolio featuring{" "}
              <span className="text-white font-medium">Techtal Studios</span>.
            </p>
            <p className="text-xs font-mono text-neutral-500">
               Independent Creative Technology Studio (Personal Brand)
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 block">
              Navigation
            </span>
            <ul className="grid grid-cols-2 gap-2 text-xs font-mono">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Quick Top Link */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 block mb-3">
                Profiles &amp; Channels
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub: latexzur-art"
                  className="p-2.5 bg-[#111111] hover:bg-white text-neutral-300 hover:text-[#080808] border border-white/10 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={isLinkedInPlaceholder ? "#contact" : contact.linkedin}
                  target={isLinkedInPlaceholder ? undefined : "_blank"}
                  rel={isLinkedInPlaceholder ? undefined : "noopener noreferrer"}
                  aria-label="LinkedIn"
                  title={`LinkedIn: ${contact.linkedin}`}
                  className="p-2.5 bg-[#111111] hover:bg-white text-neutral-300 hover:text-[#080808] border border-white/10 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={isEmailPlaceholder ? "#contact" : `mailto:${contact.email}`}
                  aria-label="Email"
                  title={`Email: ${contact.email}`}
                  className="p-2.5 bg-[#111111] hover:bg-white text-neutral-300 hover:text-[#080808] border border-white/10 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#home"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-sky-400 transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Binary Signature */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div className="space-y-1">
            <p className="text-neutral-300">&copy; 2026 Exzur A. Lat</p>
            <p className="text-neutral-500">
              A personal portfolio featuring Techtal Studios.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
