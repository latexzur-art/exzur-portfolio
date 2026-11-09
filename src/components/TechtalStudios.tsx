"use client";

import React from "react";
import {
  Gamepad2,
  Cuboid,
  TerminalSquare,
  Sparkles,
  Info,
  ArrowUpRight,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const DIVISION_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "techtal-games": Gamepad2,
  "techtal-assets": Cuboid,
  "techtal-software": TerminalSquare,
};

export default function TechtalStudios() {
  const { studio } = PORTFOLIO_DATA;

  return (
    <section
      id="techtal-studios"
      className="py-24 sm:py-32 bg-[#0a0b0e] border-b border-white/10 relative overflow-hidden"
    >
      {/* Distinctive Studio Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-studio-grid opacity-80"
        aria-hidden="true"
      />

      {/* Restrained Top Border Highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Studio Banner Frame */}
        <div className="bg-[#111111] border border-sky-400/25 p-8 sm:p-12 relative">
          {/* Corner Crosshairs */}
          <span
            aria-hidden="true"
            className="absolute -top-2 -left-1.5 text-xs font-mono text-sky-400 select-none"
          >
            +
          </span>
          <span
            aria-hidden="true"
            className="absolute -top-2 -right-1.5 text-xs font-mono text-sky-400 select-none"
          >
            +
          </span>
          <span
            aria-hidden="true"
            className="absolute -bottom-2 -left-1.5 text-xs font-mono text-sky-400 select-none"
          >
            +
          </span>
          <span
            aria-hidden="true"
            className="absolute -bottom-2 -right-1.5 text-xs font-mono text-sky-400 select-none"
          >
            +
          </span>

          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-sky-400">
              <span>04 //</span>
              <span>CREATIVE STUDIO IDENTITY</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080808] border border-white/10 text-[11px] font-mono text-slate-300">
              <Sparkles className="w-3 h-3 text-sky-400" />
              <span>PERSONAL CREATIVE BRAND // FOUNDER: {studio.founder.toUpperCase()}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-5">
              {/* Studio Brand Emblem + Name */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#080808] border border-sky-400/40 flex items-center justify-center font-mono font-bold text-base tracking-tighter text-sky-400">
                  TS
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-sky-400 block">
                    INDEPENDENT LABEL
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                    {studio.name}
                  </h2>
                </div>
              </div>

              <p className="text-lg sm:text-xl font-light text-slate-200 tracking-wide">
                {studio.descriptor}
              </p>

              <blockquote className="border-l-2 border-sky-400 pl-4 py-1">
                <p className="text-sm sm:text-base font-mono text-sky-300/90">
                  &ldquo;{studio.tagline}&rdquo;
                </p>
              </blockquote>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed pt-1">
                {studio.overview}
              </p>
            </div>

            {/* Right: Brand Transparency & Studio Metadata Box */}
            <div className="lg:col-span-5 bg-[#080808] border border-white/10 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-white flex items-center gap-2">
                  <Info className="w-3.5 h-3.5 text-sky-400" />
                  STUDIO OVERVIEW
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  EST. BY EXZUR A. LAT
                </span>
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed">
                {studio.brandNotice}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10 text-xs font-mono">
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase block">
                    Founder &amp; Creator
                  </span>
                  <span className="text-white mt-0.5 block">
                    {studio.founder}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase block">
                    Structure
                  </span>
                  <span className="text-slate-300 mt-0.5 block">
                    Personal Creative Brand
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Product Categories (Divisions) */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              STUDIO PRODUCT DIVISIONS // 03 PILLARS
            </h3>
            <span className="text-[11px] font-mono text-neutral-600">
              GAMES · ASSETS · SOFTWARE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studio.divisions.map((division) => {
              const Icon = DIVISION_ICONS[division.id] || TerminalSquare;
              return (
                <div
                  key={division.id}
                  className="bg-[#111111] border border-white/10 hover:border-sky-400/40 transition-colors p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                      <span className="text-[11px] font-mono text-sky-400 uppercase tracking-widest">
                        {division.code}
                      </span>
                      <div className="w-8 h-8 bg-[#080808] border border-white/10 flex items-center justify-center text-sky-400">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="text-lg font-bold tracking-wide text-white font-mono">
                      {division.name}
                    </h4>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {division.focus}
                    </p>

                    <p className="text-xs sm:text-sm text-neutral-400 mt-4 leading-relaxed">
                      {division.description}
                    </p>
                  </div>

                  <ul className="mt-6 pt-4 border-t border-white/[0.08] space-y-2">
                    {division.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs font-mono text-neutral-300"
                      >
                        <span className="w-1.5 h-1.5 bg-sky-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Products & Published Releases */}
        <div className="mt-12 bg-[#111111] border border-white/10">
          <div className="px-6 py-5 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#0c0c0c]">
            <div>
              <h3 className="text-sm font-mono uppercase tracking-widest text-white">
                Upcoming Products &amp; Published Releases
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5">
                Current independent projects and planned digital releases under
                the Techtal Studios banner.
              </p>
            </div>
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-white transition-colors"
            >
              <span>View Full Project Specs</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="divide-y divide-white/10">
            {studio.releasesAndPipeline.map((release) => (
              <div
                key={release.id}
                className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
              >
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-base font-bold text-white">
                      {release.title}
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-[#080808] text-sky-400 border border-sky-400/30">
                      {release.division}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-neutral-400">
                    {release.type}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-300 pt-1">
                    {release.summary}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-wider border ${
                      release.status === "Published"
                        ? "bg-emerald-400/10 text-emerald-300 border-emerald-400/30"
                        : release.status === "In Development"
                        ? "bg-sky-400/10 text-sky-300 border-sky-400/30"
                        : "bg-[#080808] text-neutral-400 border-white/15"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        release.status === "Published"
                          ? "bg-emerald-400"
                          : release.status === "In Development"
                          ? "bg-sky-400"
                          : "bg-neutral-500"
                      }`}
                    />
                    {release.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
