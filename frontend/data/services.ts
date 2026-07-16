import type { Service } from "@/types";

export const services: Service[] = [
  {
    title: "Architectural Design",
    summary:
      "Concept through construction drawings for residential and commercial buildings, shaped around how the site and the client actually intend to use it.",
    deliverables: [
      "Site analysis & feasibility",
      "Concept design & massing studies",
      "Planning & permit drawings",
      "Construction documentation",
    ],
  },
  {
    title: "Interior Design & Fit-Out",
    summary:
      "Spatial planning, material selection, and fit-out coordination that carries the architectural intent all the way to the finished room.",
    deliverables: [
      "Space planning & layouts",
      "Material & finish selection",
      "Custom joinery & fixtures",
      "Fit-out contractor coordination",
    ],
  },
  {
    title: "Construction & Project Management",
    summary:
      "On-site oversight from groundbreaking to handover, keeping budget, schedule, and design intent aligned across every trade.",
    deliverables: [
      "Contractor tendering & selection",
      "Budget & schedule management",
      "Site supervision",
      "Snagging & handover",
    ],
  },
  {
    title: "Renovation & Extension",
    summary:
      "Reworking existing structures — additions, conversions, and adaptive reuse — with the same rigor as a ground-up build.",
    deliverables: [
      "Structural surveys",
      "Extension & conversion design",
      "Heritage & compliance review",
      "Phased works planning",
    ],
  },
];
