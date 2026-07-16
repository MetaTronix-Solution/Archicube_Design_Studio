import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes – handles conflicts and conditional values. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
