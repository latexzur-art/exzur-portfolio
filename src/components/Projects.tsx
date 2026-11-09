"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Github,
  ExternalLink,
  Terminal,
  Gamepad2,
  Calendar,
  Box,
  FolderPlus,
} from "lucide-react";
import {
  PORTFOLIO_DATA,
  ProjectCategory,
  ProjectItem,
} from "@/data/portfolio";

function ProjectSchematicPreview({ project }: { project: ProjectItem }) {
  const isDesktop = project.category === "Desktop Applications";
  const isGame = project.category === "Game Development";
  const isWeb = project.category === "Web Development";

  return (
    <div className="relative w-full h-48 bg-[#080808] border-b border-white/10 overflow-hidden flex flex-col justify-between p-4 select-none">
      {/* Fine Architectural Grid Background */}
      <div
        className="absolute inset-0 bg-architectural-grid opacity-70"
        aria-hidden="true"
      />

      {/* Top Schematic Bar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-neutral-500">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-sky-400/80 inline-block" />
          <span>{project.code} // PREVIEW PLACEHOLDER</span>
        </span>
        <span className="uppercase tracking-wider text-neutral-600">
          {project.category}
        </span>
      </div>

      {/* Center Technical Wireframe Graphic */}
      <div className="relative z-10 my-auto flex items-center justify-center">
        {isDesktop && (
          <div className="w-56 border border-white/15 bg-[#111111]/90 p-2.5 space-y-2">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-white/30" />
                <span className="w-1.5 h-1.5 bg-white/30" />
                <span className="w-1.5 h-1.5 bg-sky-400/60" />
              </div>
              <span className="text-[9px] font-mono text-neutral-400">
                storyforge_tts.py
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2 space-y-1">
                <div className="h-1.5 w-full bg-white/15" />
                <div className="h-1.5 w-4/5 bg-white/10" />
                <div className="h-1.5 w-3/5 bg-sky-400/30" />
              </div>
              <div className="border border-white/10 flex items-center justify-center p-1">
                <Terminal className="w-4 h-4 text-sky-400/80" />
              </div>
            </div>
          </div>
        )}

        {isGame && (
          <div className="w-56 border border-white/15 bg-[#111111]/90 p-3 flex items-center justify-between">
            <div className="space-y-1.5">
              <span className="text-[9px] font-mono text-sky-400 uppercase block">
                UNITY 3D // SCENE VIEW
              </span>
              <span className="text-xs font-mono text-white block">
                {project.title}
              </span>
              <span className="text-[9px] font-mono text-neutral-500 block">
                3D Gameplay &amp; World Mesh
              </span>
            </div>
            <div className="w-11 h-11 border border-sky-400/40 bg-sky-400/5 flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-sky-400" />
            </div>
          </div>
        )}

        {isWeb && (
          <div className="w-56 border border-white/15 bg-[#111111]/90 p-2.5 space-y-2">
            <div className="flex items-center justify-between border-b border-white/10 pb-1">
              <span className="text-[9px] font-mono text-neutral-400">
                WEB APPLICATION // UI
              </span>
              <Calendar className="w-3 h-3 text-sky-400" />
            </div>
            <div className="grid grid-cols-4 gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-3 border ${
                    i === 2 || i === 5
                      ? "border-sky-400/50 bg-sky-400/15"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {!isDesktop && !isGame && !isWeb && (
          <div className="w-56 border border-white/15 bg-[#111111]/90 p-3 flex items-center justify-between">
            <div className="space-y-1.5">
              <span className="text-[9px] font-mono text-sky-400 uppercase block">
                BLENDER // 3D VIEWPORT
              </span>
              <span className="text-xs font-mono text-white block truncate max-w-[140px]">
                {project.title}
              </span>
              <span className="text-[9px] font-mono text-neutral-500 block">
                Weapon Topology &amp; UV Mesh
              </span>
            </div>
            <div className="w-11 h-11 border border-sky-400/40 bg-sky-400/5 flex items-center justify-center">
              <Box className="w-5 h-5 text-sky-400" />
            </div>
          </div>
        )}
      </div>

      {/* Bottom Placeholder Notice */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-neutral-500">
        <span>[THUMBNAIL PLACEHOLDER]</span>
        <span className="text-neutral-600">16:9 FRAME</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    if (selectedCategory === "All") return true;
    if (project.category === selectedCategory) return true;
    if (project.secondaryCategories?.includes(selectedCategory)) return true;
    return false;
  });

  return (
    <section
      id="projects"
      className="py-24 sm:py-28 bg-[#0c0c0c] border-b border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400 mb-3">
              <span>02 //</span>
              <span>SELECTED WORKS &amp; ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Projects Portfolio
            </h2>
          </div>
        </div>

        {/* Category Filter Bar */}
        <div
          className="mt-8 flex flex-wrap items-center gap-2"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {PORTFOLIO_DATA.projectCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border transition-colors ${
                  isActive
                    ? "bg-white text-[#080808] border-white font-semibold"
                    : "bg-[#111111] text-neutral-400 border-white/10 hover:border-white/25 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="mt-10 p-10 bg-[#111111] border border-white/10 text-center space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-sky-400">
              NO PUBLIC ENTRIES IN {selectedCategory.toUpperCase()} YET
            </p>
            <p className="text-sm text-neutral-400 max-w-md mx-auto">
              Personal projects in this category will appear here once they are
              ready to be showcased.
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory("All")}
              className="mt-2 inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider bg-[#080808] hover:bg-white text-white hover:text-[#080808] border border-white/15 transition-colors"
            >
              View All Projects
            </button>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const showLiveButton =
                project.status !== "In Development" &&
                Boolean(project.liveDemoUrl);

              return (
                <article
                  key={project.id}
                  className={`group flex flex-col justify-between bg-[#111111] border transition-colors ${
                    project.isPlaceholderSlot
                      ? "border-dashed border-white/20 hover:border-sky-400/50"
                      : "border-white/10 hover:border-white/25"
                  }`}
                >
                  <div>
                    {/* Thumbnail or Schematic Placeholder */}
                    {project.thumbnail ? (
                      <div className="relative w-full h-48 bg-[#080808] border-b border-white/10 overflow-hidden">
                        <Image
                          src={project.thumbnail}
                          alt={`${project.title} screenshot`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <ProjectSchematicPreview project={project} />
                    )}

                    {/* Card Body */}
                    <div className="p-6 space-y-4">
                      {/* Status & Category Row */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-[#080808] text-sky-400 border border-sky-400/30">
                            {project.category}
                          </span>
                          {project.secondaryCategories?.map((sec) => (
                            <span
                              key={sec}
                              className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-[#080808] text-neutral-400 border border-white/10"
                            >
                              {sec}
                            </span>
                          ))}
                        </div>

                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-neutral-400">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              project.status === "Active Project"
                                ? "bg-emerald-400"
                                : project.status === "In Development"
                                ? "bg-sky-400"
                                : "bg-neutral-500"
                            }`}
                          />
                          {project.status}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-neutral-400 mt-0.5">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-neutral-300 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Highlights */}
                      <ul className="space-y-1.5 pt-1">
                        {project.highlights.map((item, i) => (
                          <li
                            key={i}
                            className="text-xs text-neutral-400 flex items-start gap-2"
                          >
                            <span className="font-mono text-sky-400/80 select-none">
                              &gt;
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer: Tech Stack & Links */}
                  <div className="px-6 pb-6 pt-4 border-t border-white/[0.08] space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] font-mono bg-[#080808] text-neutral-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Repository & Store/Public Links (Only shown when published / available) */}
                    {(project.githubUrl || showLiveButton) ? (
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono uppercase tracking-wider bg-[#080808] hover:bg-white text-white hover:text-[#080808] border border-white/15 transition-colors"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Repository</span>
                          </a>
                        )}

                        {showLiveButton && project.liveDemoUrl && (
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono uppercase tracking-wider bg-sky-400/10 hover:bg-sky-400 text-sky-300 hover:text-[#080808] border border-sky-400/30 transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>
                              {project.liveDemoLabel || "Public Release"}
                            </span>
                          </a>
                        )}
                      </div>
                    ) : (
                      <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                        <span>STATUS // IN ACTIVE DEVELOPMENT</span>
                        <span className="text-neutral-600">
                          UNRELEASED
                        </span>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Note on adding more projects */}
        <div className="mt-8 p-4 bg-[#111111] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-neutral-400">
          <span className="text-neutral-600 uppercase">
            SHOWING {filteredProjects.length} OF {PORTFOLIO_DATA.projects.length}{" "}
            ENTRIES
          </span>
        </div>
      </div>
    </section>
  );
}
