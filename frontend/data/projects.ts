import type { Category, Project, PortfolioProject } from "@/types";

/** Filter tabs for the /portfolio page */
export const FILTERS: Category[] = [
  "All Projects",
  "Residential",
  "Interior Spaces",
  "Commercial Blueprints",
  "Renovation Works",
];

/** Full project data for the /portfolio page */
export const PROJECTS: Project[] = [
  {
    id: "emerald-canopy",
    title: "The Emerald Canopy Residence",
    category: "Residential",
    categoryTag: "Residential Architecture",
    summary:
      "A multi-story contemporary home blending strict geometric lines with functional living zones.",
    description:
      "Designed with modern spatial planning and Vastu compliance, this project prioritizes natural cross-ventilation and fluid room transitions. Features a striking cantilevered concrete facade, high ceilings, and expansive floor-to-ceiling glass installations that seamlessly bridge the gap between indoor luxury and outdoor green spaces.",
    scope: [
      "Vastu Mapping",
      "3D Elevation Modeling",
      "Working Architectural Drawings",
    ],
    vibe: ["Minimalist", "Open-Concept", "Sustainable"],
  },
  {
    id: "nordic-lounge",
    title: "The Nordic Ambient Living Lounge",
    category: "Interior Spaces",
    categoryTag: "Interior Design",
    summary:
      "High-end residential interior execution focusing on warmth, space optimization, and bespoke textures.",
    description:
      "A complete interior overhaul blending minimalist Scandinavian aesthetics with cozy, luxury textures. We implemented hidden custom modular storage systems, warm ambient hidden LED light strips, acoustic wood-slat wall panels, and premium material specifications to maximize utility without compromising on visual sophistication.",
    scope: [
      "Lighting Architecture",
      "Custom Millwork",
      "Material & Finishes Procurement",
    ],
    vibe: ["Warm Minimalist", "Functional", "Elegant"],
  },
  {
    id: "nextgen-hq",
    title: "NextGen Tech Headquarters",
    category: "Commercial Blueprints",
    categoryTag: "Commercial Blueprints",
    summary:
      "An optimized corporate layout built to cultivate creative collaboration and structural efficiency.",
    description:
      "A large-scale commercial space layout designed around modern agile workflows. We provided comprehensive architectural layouts, high-load structural calculations, and complex electrical/HVAC mapping. The project focuses on hot-desking zones, acoustic meeting pods, and centralized community hubs wrapped in sleek industrial metal accents.",
    scope: [
      "Commercial Space Optimization",
      "Load-Bearing Analysis",
      "HVAC Layouts",
    ],
    vibe: ["Industrial Modern", "Collaborative", "High-Efficiency"],
  },
  {
    id: "urban-oasis",
    title: "Urban Oasis Villa Remodel",
    category: "Renovation Works",
    categoryTag: "Renovation Works",
    summary:
      "Breathing new life into an aging brick structure through advanced engineering retrofits.",
    description:
      "Taking a traditional 15-year-old family estate and fully retrofitting it into an energy-efficient, visually striking modern villa. The scope involved critical structural reinforcement, removing interior load-bearing walls to achieve an open layout, updating outdated plumbing nodes, and crafting a state-of-the-art louvers facade.",
    scope: ["Structural Retrofitting", "Facade Overhaul", "System Upgrades"],
    vibe: ["Eco-Friendly", "Contemporary", "Restructural"],
  },
];

/** Simplified project cards for the homepage Portfolio section */
export const HOMEPAGE_PROJECTS: PortfolioProject[] = [
  {
    title: "Modern Living Space",
    tag: "Interior Design",
    ratio: "aspect-[4/3]",
    image: "/images/project1.jpg",
  },
  {
    title: "Luxury Office Design",
    tag: "Commercial",
    ratio: "aspect-[4/3]",
    image: "/images/project2.jpg",
  },
  {
    title: "Urban Residence",
    tag: "Architecture",
    ratio: "aspect-[5/4]",
    image: "/images/project3.jpg",
  },
  {
    title: "Boutique Hotel Interior",
    tag: "Hospitality",
    ratio: "aspect-[5/4]",
    image: "/images/project4.jpg",
  },
];
