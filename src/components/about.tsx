import Image from "next/image";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:px-6">
        <div className="relative aspect-[3/4] overflow-hidden bg-[var(--navy)]">
          <Image
            src="/assets/first-party/gallery-2C5A1641.jpg"
            alt="Interior of a commercial HVAC cabinet on an Ameri-Climate project"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--red)]">
            Why this operation is credible
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--navy)] md:text-4xl">
            A Yucaipa family business that became a commercial contractor.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--ink)]">
            <p>
              Ameri-Climate is a family business that started in {site.since}, owned by{" "}
              {site.owner}. It began as a residential air conditioning service in Yucaipa and grew
              into a solely commercial air conditioning contractor throughout Southern California.
            </p>
            <p>
              First-party copy says the work expands from hotels to county jobs to Air Force bases.
              Every job is described as being worked with respect and quality, with a mission to
              serve clients with work that shows excellence.
            </p>
            <p>
              California CSLB license {site.cslb} is published on the current website. Official
              records show the license current and active, with C-20 (HVAC) and B (General Building)
              classifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
