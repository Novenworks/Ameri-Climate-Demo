import Image from "next/image";
import { projects } from "@/lib/site";

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 bg-[var(--paper)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--red)]">
          Previous projects
        </p>
        <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--navy)] md:text-4xl">
          Named commercial work, plus the jobsite photography already on the first-party site.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink)]">
          Project names below come from Ameri-Climate’s current website. Gallery photos are labeled as they appear — we do not rename a building to match a different project.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <figure className="relative min-h-[280px] overflow-hidden md:col-span-2 md:min-h-[420px]">
            <Image
              src="/assets/first-party/gallery-2C5A1615.jpg"
              alt="TownePlace Suites Marriott under construction, from Ameri-Climate’s project gallery"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--navy)] to-transparent p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sand)]">
                From the gallery
              </p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold">
                Hospitality jobsite — TownePlace Suites
              </p>
              <p className="mt-1 max-w-xl text-sm text-white/85">
                First-party About gallery. Branding is visible in the photograph; this is not relabeled as another hotel.
              </p>
            </figcaption>
          </figure>

          {projects
            .filter((project) => project.image)
            .map((project) => (
              <article
                key={project.title}
                className="flex flex-col overflow-hidden bg-white shadow-[0_1px_0_rgba(8,21,41,0.08)] md:col-span-2"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.image ?? ""}
                    alt={project.imageAlt ?? `${project.title} project`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--red)]">
                    {project.location}
                    {project.year ? ` · ${project.year}` : ""}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--navy)]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]">{project.body}</p>
                </div>
              </article>
            ))}

          <div className="grid gap-3 bg-[var(--navy)] p-5 text-white md:col-span-2 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((project) => !project.image)
              .map((project) => (
                <article key={project.title} className="border-t border-white/20 pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--sand)]">
                    {project.location}
                    {project.year ? ` · ${project.year}` : ""}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{project.body}</p>
                </article>
              ))}
          </div>

          <figure className="relative min-h-[260px] overflow-hidden">
            <Image
              src="/assets/first-party/gallery-2C5A1648.jpg"
              alt="Rooftop condensing units open during a commercial install"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-[var(--navy)]/80 p-4 text-sm text-white">
              Rooftop equipment during install — first-party gallery
            </figcaption>
          </figure>
          <figure className="relative min-h-[260px] overflow-hidden">
            <Image
              src="/assets/first-party/victorville-1.jpg"
              alt="Project building in Victorville from Ameri-Climate’s gallery"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-[var(--navy)]/80 p-4 text-sm text-white">
              Victorville — first-party gallery photography
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
