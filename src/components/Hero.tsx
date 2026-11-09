"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, GraduationCap, Layers } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const BINARY_COLUMNS = [
  "01000101 01011000 01011010 01010101 01010010",
  "01010100 01000101 01000011 01001000 01010100",
  "01000001 01001100 00100000 01010011 01010100",
  "01010101 01000100 01001001 01001111 01010011",
];

export default function Hero() {
  const { personal, studio } = PORTFOLIO_DATA;
  const statusText = personal.status.availableForEmployment
    ? personal.status.employmentOpenLabel
    : personal.status.label;

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex flex-col justify-between border-b border-white/10 overflow-hidden bg-[#080808]"
    >
      {/* Subtle Animated Technical Background */}
      <div
        className="pointer-events-none absolute inset-0 bg-architectural-grid opacity-80"
        aria-hidden="true"
      />

      {/* Restrained radial vignette to keep focus sharp */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(56,189,248,0.055),transparent_65%)]"
        aria-hidden="true"
      />

      {/* Subtle animated scanline / technical horizon */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0.15, y: "15%" }}
        animate={{ opacity: [0.1, 0.25, 0.1], y: ["15%", "82%", "15%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/30 to-transparent"
      />

      {/* Subtle Binary Watermark Details */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden lg:flex flex-col gap-1.5 absolute top-28 right-8 text-[10px] font-mono text-white/[0.07] select-none tracking-widest text-right"
      >
        {BINARY_COLUMNS.map((line, i) => (
          <span key={i}>{line}</span>
        ))}
        <span className="text-sky-400/20 mt-1">SYS.LOC // PH-4301 // 13.9414° N</span>
      </div>

      {/* Top Technical Coordinate Bar */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.07] text-[11px] font-mono text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="text-sky-400">00 //</span>
            <span className="uppercase tracking-widest text-neutral-400">
              PORTFOLIO &amp; STUDIO INDEX
            </span>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 my-auto py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-8">
            {/* Configurable Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#111111] border border-white/10"
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  personal.status.availableForEmployment
                    ? "bg-emerald-400"
                    : "bg-sky-400"
                }`}
              />
              <span className="text-xs font-mono tracking-wide text-neutral-300">
                {statusText}
              </span>
            </motion.div>

            {/* Primary Identity Heading */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                {personal.NameUppercase}
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-300 tracking-wide">
                {personal.title}
              </p>
            </motion.div>

            {/* Tagline Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="border-l-2 border-sky-400/70 pl-4 sm:pl-6 py-1 max-w-2xl"
            >
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
                &ldquo;{personal.heroQuote}&rdquo;
              </p>
            </motion.blockquote>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-white text-[#080808] hover:bg-sky-400 hover:text-[#080808] text-xs font-mono uppercase tracking-widest font-semibold transition-colors"
              >
                <span>Explore My Projects</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#111111] hover:bg-white/[0.06] text-white border border-white/15 hover:border-white/35 text-xs font-mono uppercase tracking-widest transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Contact Me</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Architectural Identity Blueprint Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="lg:col-span-4"
          >
            <div className="bg-[#111111] border border-white/10 p-6 relative">
              {/* Corner technical crosshairs */}
              <span
                aria-hidden="true"
                className="absolute -top-1.5 -left-1.5 text-[10px] font-mono text-sky-400/60 select-none"
              >
                +
              </span>
              <span
                aria-hidden="true"
                className="absolute -top-1.5 -right-1.5 text-[10px] font-mono text-sky-400/60 select-none"
              >
                +
              </span>
              <span
                aria-hidden="true"
                className="absolute -bottom-1.5 -left-1.5 text-[10px] font-mono text-sky-400/60 select-none"
              >
                +
              </span>
              <span
                aria-hidden="true"
                className="absolute -bottom-1.5 -right-1.5 text-[10px] font-mono text-sky-400/60 select-none"
              >
                +
              </span>

              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <span className="text-[11px] font-mono uppercase tracking-widest text-sky-400">
                  IDENTITY // SPECIFICATION
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  REV 2.6
                </span>
              </div>

              <dl className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <dt className="font-mono uppercase text-[10px] tracking-wider text-neutral-500">
                      Education
                    </dt>
                    <dd className="text-neutral-200 font-medium mt-0.5">
                      {personal.education.degree}
                    </dd>
                    <dd className="text-neutral-400 text-[11px]">
                      {personal.education.institution}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <dt className="font-mono uppercase text-[10px] tracking-wider text-neutral-500">
                      Location
                    </dt>
                    <dd className="text-neutral-200 font-medium mt-0.5">
                      {personal.location}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Layers className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <dt className="font-mono uppercase text-[10px] tracking-wider text-neutral-500">
                      Creative Studio Brand
                    </dt>
                    <dd className="text-white font-mono tracking-wider font-semibold mt-0.5">
                      {studio.name}
                    </dd>
                    <dd className="text-neutral-400 text-[11px]">
                      {studio.descriptor}
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                {["Software Engineering", "Game Dev", "3D Modeling"].map(
                  (interest) => (
                    <span
                      key={interest}
                      className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider bg-[#080808] text-neutral-300 border border-white/10"
                    >
                      {interest}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Discipline Strip */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-5 border-t border-white/10 pt-6 gap-4">
          {personal.interests.map((item, index) => (
            <div key={item} className="flex items-center gap-2.5">
              <span className="text-[10px] font-mono text-sky-400/80">
                0{index + 1}
              </span>
              <span className="text-xs font-mono text-neutral-400 truncate">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
