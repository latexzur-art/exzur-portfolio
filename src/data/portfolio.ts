export type ProjectCategory =
  | "All"
  | "Web Development"
  | "Game Development"
  | "Desktop Applications"
  | "3D Modeling";

export interface ProjectItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  technologies: string[];
  category: Exclude<ProjectCategory, "All">;
  secondaryCategories?: Exclude<ProjectCategory, "All">[];
  status: "In Development" | "Prototype" | "Active Project" | "Template Slot";
  /**
   * Path to screenshot in /public/projects/... or null to display the technical schematic preview placeholder
   */
  thumbnail: string | null;
  /**
   * Provide a full URL when published, or leave as null when in development / private
   */
  githubUrl: string | null;
  /**
   * Provide a store/demo URL once published to stores/public.
   * No button is shown while status is "In Development" or when liveDemoUrl is null.
   */
  liveDemoUrl: string | null;
  liveDemoLabel?: string;
  isPlaceholderSlot?: boolean;
}

export interface SkillGroup {
  id: string;
  code: string;
  category: "Programming" | "Development" | "Creative";
  description: string;
  skills: {
    name: string;
    context: string;
  }[];
}

export interface StudioDivision {
  id: string;
  code: string;
  name: string;
  focus: string;
  items: string[];
  description: string;
}

export interface StudioReleaseItem {
  id: string;
  title: string;
  division: "TECHTAL GAMES" | "TECHTAL ASSETS" | "TECHTAL SOFTWARE";
  type: string;
  status: "In Development" | "Planned" | "Published";
  summary: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Exzur A. Lat",
    NameUppercase: "EXZUR A. LAT",
    title: "Aspiring Software Developer",
    heroQuote:
      "Building software, exploring technology, and creating digital experiences.",
    education: {
      degree: "Bachelor of Science in Computer Science",
      institution: "STI College Lucena",
    },
    location: "Philippines",
    interests: [
      "Web Development",
      "Desktop Application Development",
      "Game Development",
      "3D Modeling",
      "Software Engineering",
    ],
    /**
     * Configurable status indicator in the Hero section.
     * Set `availableForEmployment: true` only when actively seeking employment.
     */
    status: {
      availableForEmployment: false,
      label: "CS Student @ STI College Lucena · Building Independent Projects",
      employmentOpenLabel: "Open to Software Development Internships & Opportunities",
    },
    about: {
      headline:
        "Computer Science student focused on practical software construction, interactive systems, and 3D digital craft.",
      paragraphs: [
        "I am Exzur A. Lat, a Bachelor of Science in Computer Science student at STI College Lucena in the Philippines. My work centers on learning how software is architected from the ground up—whether that means building responsive web platforms, crafting standalone desktop utilities, or programming interactive game mechanics.",
        "Beyond traditional software engineering, I actively explore game development in Unity and 3D modeling in Blender. Combining code with visual creation allows me to approach problems from both a technical and design-oriented perspective, turning ideas into functional digital projects.",
      ],
      focusAreas: [
        {
          title: "Web Development",
          detail: "Full-stack web applications, scheduling interfaces, and modern frontend architecture.",
        },
        {
          title: "Desktop Application Development",
          detail: "Standalone Python GUI tools and local-first productivity workflows.",
        },
        {
          title: "Game Development",
          detail: "Interactive 3D simulation mechanics and gameplay systems built with Unity and C#.",
        },
        {
          title: "3D Modeling",
          detail: "Low-poly environments, stylized props, and game-ready 3D assets crafted in Blender.",
        },
        {
          title: "Software Engineering",
          detail: "Clean code organization, relational database design, and version-controlled workflows.",
        },
      ],
    },
  },

  studio: {
    name: "TECHTAL STUDIOS",
    descriptor: "Independent Creative Technology Studio",
    tagline: "Creating Digital Experiences Through Code and Creativity.",
    founder: "Exzur A. Lat",
    brandNotice:
      "Techtal Studios is the personal independent creative brand of Exzur A. Lat, established to develop, organize, and publish original software, indie games, and 3D digital assets. It operates as an individual creative label rather than an incorporated company.",
    overview:
      "Built as a dedicated creative umbrella within my portfolio, Techtal Studios brings together my independent experiments and long-term digital products under one unified identity—bridging software engineering, interactive games, and 3D asset creation.",
    divisions: [
      {
        id: "techtal-games",
        code: "DIV // 01",
        name: "TECHTAL GAMES",
        focus: "Interactive Entertainment & Game Systems",
        items: [
          "Indie games",
          "Interactive experiences",
          "Game development projects",
        ],
        description:
          "Original mechanics-driven indie games and interactive 3D worlds built in Unity with custom C# systems.",
      },
      {
        id: "techtal-assets",
        code: "DIV // 02",
        name: "TECHTAL ASSETS",
        focus: "3D Geometry & Digital Craft",
        items: ["3D models", "Blender assets", "Digital resources"],
        description:
          "Game-ready 3D weapon packs, stylized low-poly models, and reusable Blender resources designed for indie creators.",
      },
      {
        id: "techtal-software",
        code: "DIV // 03",
        name: "TECHTAL SOFTWARE",
        focus: "Utilities & Web Platforms",
        items: [
          "Desktop applications",
          "Web applications",
          "Independent software products",
        ],
        description:
          "Focused desktop tools and web-based systems engineered to solve practical creative and organizational workflows.",
      },
    ] as StudioDivision[],
    releasesAndPipeline: [
      {
        id: "rel-storyforge",
        title: "StoryForge",
        division: "TECHTAL SOFTWARE",
        type: "Desktop Application (Python / CustomTkinter)",
        status: "In Development",
        summary:
          "Standalone desktop storytelling workspace featuring a local text-to-speech synthesis workflow.",
      },
      {
        id: "rel-last-haven",
        title: "Last Haven",
        division: "TECHTAL GAMES",
        type: "3D Indie Game Project (Unity / C#)",
        status: "In Development",
        summary:
          "An original 3D indie game developed in Unity and C#, combining custom-modeled 3D environments with core gameplay and survival-driven mechanics.",
      },
      {
        id: "rel-forged-edge",
        title: "Forged Edge — Stylized Sword Asset Pack",
        division: "TECHTAL ASSETS",
        type: "Blender 3D Weapon Asset Collection",
        status: "In Development",
        summary:
          "A curated collection of game-ready 3D sword and melee blade models crafted in Blender with clean topology for RPG and action projects.",
      },
    ] as StudioReleaseItem[],
  },

  projectCategories: [
    "All",
    "Web Development",
    "Game Development",
    "Desktop Applications",
    "3D Modeling",
  ] as ProjectCategory[],

  projects: [
    {
      id: "storyforge",
      code: "PRJ // 01",
      title: "StoryForge",
      subtitle: "Desktop Storytelling Application",
      description:
        "A dedicated desktop storytelling application built with Python and CustomTkinter, designed around an offline-capable local text-to-speech narration workflow for writers and creators.",
      highlights: [
        "Modern dark-themed desktop interface built with Python & CustomTkinter",
        "Integrated local text-to-speech (TTS) audio generation workflow",
        "Structured story drafting and scene management organization",
      ],
      technologies: ["Python", "CustomTkinter", "Local TTS"],
      category: "Desktop Applications",
      status: "In Development",
      thumbnail: null,
      githubUrl: null,
      liveDemoUrl: null,
    },
    {
      id: "last-haven",
      code: "PRJ // 02",
      title: "Last Haven",
      subtitle: "3D Indie Game Project",
      description:
        "An original 3D game project developed in Unity and C#. Combines custom gameplay mechanics, interactive systems, and 3D environment assets under the Techtal Games creative banner.",
      highlights: [
        "Core gameplay mechanics and interactive systems programmed in C#",
        "Custom 3D environment layout and asset integration in Unity",
        "Developed as a flagship indie game project under Techtal Games",
      ],
      technologies: ["Unity", "C#", "Blender", "3D Modeling"],
      category: "Game Development",
      secondaryCategories: ["3D Modeling"],
      status: "In Development",
      thumbnail: null,
      githubUrl: null,
      liveDemoUrl: null,
    },
    {
      id: "forged-edge-sword-pack",
      code: "PRJ // 03",
      title: "Forged Edge — Sword Asset Pack",
      subtitle: "Blender 3D Weapon Asset Collection",
      description:
        "A 3D weapon modeling project crafted in Blender featuring a modular collection of stylized and low-poly swords designed with clean topology for game engines.",
      highlights: [
        "Custom 3D blade, hilt, and guard geometry modeled in Blender",
        "Optimized low-to-mid poly mesh topology ready for Unity import",
        "Developed as an independent digital asset release under Techtal Assets",
      ],
      technologies: ["Blender", "3D Modeling", "UV Mapping", "Game Assets"],
      category: "3D Modeling",
      status: "In Development",
      thumbnail: null,
      githubUrl: null,
      liveDemoUrl: null,
    },
  ] as ProjectItem[],

  skills: [
    {
      id: "programming",
      code: "SKL // 01",
      category: "Programming",
      description:
        "Core languages used for desktop utilities, game scripting, and interactive web logic.",
      skills: [
        {
          name: "Python",
          context: "Desktop GUI applications (CustomTkinter), automation, and local TTS workflows",
        },
        {
          name: "C#",
          context: "Unity game mechanics, object-oriented scripting, and simulation systems",
        },
        {
          name: "JavaScript",
          context: "Interactive web interfaces, client-side logic, and full-stack web development",
        },
      ],
    },
    {
      id: "development",
      code: "SKL // 02",
      category: "Development",
      description:
        "Frameworks, engines, version control, and database technologies used to build and ship projects.",
      skills: [
        {
          name: "React",
          context: "Component-driven user interfaces and modular frontend architecture",
        },
        {
          name: "Next.js",
          context: "Modern React applications, routing, SEO optimization, and Vercel deployment",
        },
        {
          name: "Unity",
          context: "3D game development, scene assembly, physics, and interactive simulation",
        },
        {
          name: "Git",
          context: "Source code version control, branching workflows, and GitHub collaboration",
        },
        {
          name: "PostgreSQL",
          context: "Relational database modeling, structured queries, and scheduling data storage",
        },
      ],
    },
    {
      id: "creative",
      code: "SKL // 03",
      category: "Creative",
      description:
        "3D digital creation tools for game-ready assets, low-poly environments, and visual design.",
      skills: [
        {
          name: "Blender",
          context: "3D mesh creation, low-poly asset pipelines, UV unwrapping, and scene rendering",
        },
        {
          name: "3D Modeling",
          context: "Stylized props, architectural diorama layouts, and game-ready geometry",
        },
      ],
    },
  ] as SkillGroup[],

  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "latexzur@gmail.com",
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ||
      "https://www.linkedin.com/in/exzur-lat/",
    github:
      process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/latexzur-art",
    githubHandle: "latexzur-art",
    formEndpoint: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT || "",
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Techtal Studios", href: "#techtal-studios" },
    { label: "Contact", href: "#contact" },
  ],
};
