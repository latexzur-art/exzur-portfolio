"use client";

import React from "react";
import {
  Globe,
  Monitor,
  Gamepad2,
  Box,
  Code2,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const FOCUS_ICONS = [Globe, Monitor, Gamepad2, Box, Code2];

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="about"
      className="py-24 sm:py-28 bg-[#080808] border-b border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-10 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400 mb-3">
              <span>01 //</span>
              <span>PROFILE &amp; BACKGROUND</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              About Me
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
            BS COMPUTER SCIENCE // STI COLLEGE LUCENA
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl sm:text-2xl font-medium text-white leading-snug">
              {personal.about.headline}
            </h3>

            <div className="space-y-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
              {personal.about.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Education & Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 bg-[#111111] border border-white/10">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-mono uppercase tracking-wider mb-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Foundation</span>
                </div>
                <p className="text-sm font-medium text-white">
                  {personal.education.degree}
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  {personal.education.institution}
                </p>
              </div>

              <div className="p-5 bg-[#111111] border border-white/10">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-mono uppercase tracking-wider mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Base &amp; Studio Initiative</span>
                </div>
                <p className="text-sm font-medium text-white">
                  {personal.location}
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Founder of Techtal Studios (Personal Creative Brand)
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Five Core Interest Areas */}
          <div className="lg:col-span-6">
            <div className="bg-[#111111] border border-white/10 divide-y divide-white/10">
              <div className="px-6 py-4 flex items-center justify-between bg-[#0c0c0c]">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-300">
                  CORE TECHNICAL &amp; CREATIVE INTERESTS
                </span>
                <span className="text-[11px] font-mono text-neutral-500">
                  05 DOMAINS
                </span>
              </div>

              {personal.about.focusAreas.map((area, index) => {
                const IconComponent = FOCUS_ICONS[index % FOCUS_ICONS.length];
                return (
                  <div
                    key={area.title}
                    className="p-5 sm:px-6 flex items-start gap-4 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="w-9 h-9 shrink-0 bg-[#080808] border border-white/10 flex items-center justify-center text-sky-400 mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-semibold text-white">
                          {area.title}
                        </h4>
                        <span className="text-[10px] font-mono text-neutral-600">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                        {area.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
