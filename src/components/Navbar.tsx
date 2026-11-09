"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);

      const sections = PORTFOLIO_DATA.navigation.map((item) =>
        item.href.replace("#", "")
      );
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLinkedInPlaceholder =
    PORTFOLIO_DATA.contact.linkedin.startsWith("[") ||
    !PORTFOLIO_DATA.contact.linkedin.startsWith("http");

  const linkedInHref = isLinkedInPlaceholder
    ? "#contact"
    : PORTFOLIO_DATA.contact.linkedin;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#080808]/90 backdrop-blur-md border-b border-white/10"
          : "bg-[#080808]/70 backdrop-blur-sm border-b border-white/[0.06]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#home"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Exzur A. Lat — Home"
        >
          <span className="w-8 h-8 flex items-center justify-center bg-[#111111] border border-white/15 group-hover:border-sky-400/60 transition-colors text-xs font-mono font-semibold tracking-tighter text-white">
            EL
          </span>
          <div className="flex flex-col">
            <span className="text-xs font-mono tracking-[0.18em] text-white font-medium">
              EXZUR A. LAT
            </span>
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 group-hover:text-sky-400 transition-colors">
              TECHTAL STUDIOS
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2"
          aria-label="Primary Navigation"
        >
          {PORTFOLIO_DATA.navigation.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            const isStudio = item.label === "Techtal Studios";

            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors ${
                  isActive
                    ? "text-white"
                    : isStudio
                    ? "text-slate-300 hover:text-sky-400"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {isStudio && (
                  <span className="inline-block w-1.5 h-1.5 bg-sky-400 mr-1.5 align-middle" />
                )}
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-sky-400" />
                )}
              </a>
            );
          })}
        </nav>

        {/* External Links (GitHub & LinkedIn) */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={PORTFOLIO_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            title="GitHub: latexzur-art"
            className="p-2 text-neutral-400 hover:text-white hover:bg-white/[0.04] border border-transparent hover:border-white/10 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={linkedInHref}
            target={isLinkedInPlaceholder ? undefined : "_blank"}
            rel={isLinkedInPlaceholder ? undefined : "noopener noreferrer"}
            aria-label="LinkedIn Profile"
            title={
              isLinkedInPlaceholder
                ? `LinkedIn: ${PORTFOLIO_DATA.contact.linkedin} (Configure in src/data/portfolio.ts)`
                : "LinkedIn Profile"
            }
            className="p-2 text-neutral-400 hover:text-white hover:bg-white/[0.04] border border-transparent hover:border-white/10 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="ml-2 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider bg-[#111111] hover:bg-white text-white hover:text-[#080808] border border-white/15 transition-colors"
          >
            Connect
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-300 hover:text-white border border-white/10 bg-[#111111]"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080808] border-b border-white/15 px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 flex items-center gap-1.5">
              <Terminal className="w-3 h-3 text-sky-400" />
              NAVIGATION // INDEX
            </span>
            <span className="text-[10px] font-mono text-neutral-600">01000101</span>
          </div>
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {PORTFOLIO_DATA.navigation.map((item, idx) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 text-xs font-mono uppercase tracking-wider border-l-2 transition-colors ${
                    isActive
                      ? "border-sky-400 bg-white/[0.04] text-white"
                      : "border-transparent text-neutral-400 hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] text-neutral-600">0{idx + 1}</span>
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-neutral-300 hover:text-white bg-[#111111] border border-white/10"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={linkedInHref}
                target={isLinkedInPlaceholder ? undefined : "_blank"}
                rel={isLinkedInPlaceholder ? undefined : "noopener noreferrer"}
                onClick={() => isLinkedInPlaceholder && setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-neutral-300 hover:text-white bg-[#111111] border border-white/10"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-xs font-mono uppercase tracking-wider bg-white text-[#080808] font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
