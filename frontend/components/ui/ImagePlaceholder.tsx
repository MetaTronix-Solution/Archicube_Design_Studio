import { ImageIcon } from "lucide-react";

type Props = {
  label?: string;
  className?: string;
  ratio?: string; // tailwind aspect-ratio class e.g. "aspect-[4/5]"
};

/**
 * Drop-in placeholder for a real photo.
 * Replace usage with:
 *   <Image src="/images/your-photo.jpg" alt="..." fill className="object-cover" />
 * inside a `relative` wrapper of the same size.
 */
export default function ImagePlaceholder({
  label = "Image",
  className = "",
  ratio = "aspect-[4/3]",
}: Props) {
  return (
    <div
      className={`relative flex ${ratio} w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-ink/10 via-gold/15 to-ink/5 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(189,143,78,0.25),transparent_60%)]" />
      <div className="relative flex flex-col items-center gap-2 text-ink-soft/60">
        <ImageIcon className="h-7 w-7" strokeWidth={1.25} />
        <span className="font-body text-xs tracking-wide">{label}</span>
      </div>
    </div>
  );
}
