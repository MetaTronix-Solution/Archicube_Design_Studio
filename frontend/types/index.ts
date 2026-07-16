// ── Shared TypeScript types & interfaces ──

/** Service definition used on the /services page accordion */
export type Service = {
  title: string;
  summary: string;
  deliverables: string[];
};

/** Portfolio filter category */
export type Category =
  | "All Projects"
  | "Residential"
  | "Interior Spaces"
  | "Commercial Blueprints"
  | "Renovation Works";

/** Single portfolio project */
export type Project = {
  id: string;
  title: string;
  category: Exclude<Category, "All Projects">;
  categoryTag: string;
  summary: string;
  description: string;
  scope: string[];
  vibe: string[];
};

/** Homepage portfolio card (simplified) */
export type PortfolioProject = {
  title: string;
  tag: string;
  ratio: string;
  image: string;
};
