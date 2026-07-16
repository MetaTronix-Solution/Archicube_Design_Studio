import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function FeaturedBanner() {
  return (
    <section className="px-5 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <ImagePlaceholder
          label="Featured project"
          ratio="aspect-[16/9] sm:aspect-[21/9]"
          className="rounded-3xl"
        />
      </div>
    </section>
  );
}
