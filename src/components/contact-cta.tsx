import Image from "next/image";
import { DemoForm } from "@/components/demo-form";
import { site } from "@/lib/site";

export function ContactCta() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-16 text-white md:py-24">
      <Image
        src="/assets/first-party/gallery-2C5A1616.jpg"
        alt="Completed hospitality envelope from Ameri-Climate’s project gallery"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[var(--navy)]/88" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1fr_minmax(0,28rem)] md:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sand)]">
            Start a conversation
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
            Request project information.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85">
            The current business asks visitors to describe upcoming jobs and says they reply within
            one to two business days. Office hours: {site.hours}.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            <li>
              <a className="font-semibold underline decoration-white/40 underline-offset-4" href={site.phoneHref}>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="font-semibold underline decoration-white/40 underline-offset-4" href={site.emailHref}>
                {site.email}
              </a>
            </li>
            <li>
              {site.addressLine}
              <br />
              {site.cityLine}
            </li>
          </ul>
        </div>
        <div className="bg-white p-5 text-[var(--navy)] md:p-6">
          <DemoForm />
        </div>
      </div>
    </section>
  );
}
