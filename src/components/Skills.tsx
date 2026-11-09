"use client";

import React from "react";
import { Code2, Cpu, Cuboid } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const CATEGORY_ICONS = {
  Programming: Code2,
  Development: Cpu,
  Creative: Cuboid,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 sm:py-28 bg-[#080808] border-b border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-10 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400 mb-3">
              <span>03 //</span>
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills &amp; Technologies
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
            PROGRAMMING // DEVELOPMENT // CREATIVE
          </p>
        </div>

        {/* Skills 3-Column Architectural Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skills.map((group) => {
            const Icon = CATEGORY_ICONS[group.category] || Code2;

            return (
              <div
                key={group.id}
                className="bg-[#111111] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  {/* Group Header */}
                  <div className="p-6 border-b border-white/10 bg-[#0c0c0c]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono text-sky-400 uppercase tracking-widest">
                        {group.code}
                      </span>
                      <Icon className="w-4 h-4 text-neutral-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {group.category}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  {/* Skill Items */}
                  <div className="divide-y divide-white/[0.08]">
                    {group.skills.map((skill, idx) => (
                      <div
                        key={skill.name}
                        className="p-5 hover:bg-white/[0.02] transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-mono font-semibold text-white">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-neutral-600">
                            0{idx + 1}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                          {skill.context}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Group Footer */}
                <div className="px-5 py-3 border-t border-white/[0.08] bg-[#0a0a0a] flex items-center justify-between text-[10px] font-mono text-neutral-500">
                  <span>ACTIVE STACK</span>
                  <span>{group.skills.length} TECHNOLOGIES</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
