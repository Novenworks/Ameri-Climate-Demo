import Image from "next/image";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden text-white">
      <Image
        src="/assets/first-party/gallery-2C5A1638.jpg"
        alt="Commercial rooftop HVAC vents installed against Southern California mountains"
        fill
        priority
        className="object-cover object-[center_60%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/92 via-[var(--navy)]/72 to-[var(--navy)]/25" />
      <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 py-16 md:px-6 md:py-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--sand)]">
          Yucaipa · Southern California · Commercial HVAC
        </p>
        <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          {site.tagline}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
          {site.description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg">
            <a href="#contact">Request Project Information</a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href="#work">View Our Work</a>
          </Button>
          <a
            href={site.phoneHref}
            className="inline-flex min-h-12 items-center text-sm font-semibold uppercase tracking-[0.12em] text-white"
          >
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
