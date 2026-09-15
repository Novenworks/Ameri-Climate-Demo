import Image from "next/image";

const capabilities = [
  {
    title: "Hospitality HVAC",
    body: "Project HVAC for hotels and similar lodging — guest-room systems, rooftop equipment, and the mechanical work those buildings require. First-party named work includes Staybridge Suites, Hampton Inn & Suites, Holiday Inn Express, and Home2Suites.",
    image: "/assets/first-party/gallery-2C5A1595.jpg",
    alt: "TownePlace Suites hotel facade with through-wall HVAC from Ameri-Climate’s gallery",
  },
  {
    title: "Public-sector and secured sites",
    body: "The company lists county jobs and Air Force base work. On Vandenberg, the first-party site says the project required special certifications and background clearances to enter the base and work as a civilian partner.",
    image: "/assets/first-party/gallery-2C5A1643.jpg",
    alt: "Open commercial HVAC control cabinet photographed on an Ameri-Climate job",
  },
  {
    title: "Project-based commercial install",
    body: "Ameri-Climate is a commercial heating, ventilation, and air conditioning contractor. Contact copy describes bid-based project work, including job walks and information requests — not a residential service menu.",
    image: "/assets/first-party/gallery-2C5A1598.jpg",
    alt: "Spiral duct staged for a commercial mechanical install",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-24 bg-[var(--navy)] py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sand)]">
          What we take on
        </p>
        <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
          Commercial mechanical work, grouped the way a project buyer thinks.
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article key={item.title} className="flex flex-col overflow-hidden bg-[var(--navy-mid)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
