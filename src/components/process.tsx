import Image from "next/image";

const steps = [
  {
    n: "01",
    title: "Request information",
    body: "The current site asks for a description of the upcoming project and says the office replies within one to two business days.",
  },
  {
    n: "02",
    title: "Job walk or bid conversation",
    body: "Contact options on the live form include bid request, job information, and job walk. Each job is bid at differing rates based on the project.",
  },
  {
    n: "03",
    title: "Commercial install",
    body: "Heating, ventilation, and air conditioning contracting on the kinds of facilities already shown: hospitality, public-sector, and other commercial work.",
  },
];

export function Process() {
  return (
    <section className="bg-[var(--navy)] py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sand)]">
            How a conversation starts
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
            A simple path, taken from how they already ask to be contacted.
          </h2>
          <ol className="mt-8 space-y-6">
            {steps.map((step) => (
              <li key={step.n} className="border-t border-white/15 pt-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-[var(--sand)]">
                  {step.n}
                </p>
                <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative min-h-[320px] overflow-hidden">
          <Image
            src="/assets/first-party/gallery-2C5A1605.jpg"
            alt="Insulated copper piping and valves on a commercial HVAC install"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
