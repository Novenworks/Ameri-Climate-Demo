"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--navy)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex min-w-0 items-center" aria-label="Ameri-Climate home">
          <Image
            src="/assets/first-party/logo-primary.png"
            alt="Ameri-Climate"
            width={320}
            height={120}
            priority
            className="h-10 w-auto mix-blend-screen md:h-12"
          />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white"
          >
            <Phone className="size-4" aria-hidden />
            {site.phoneDisplay}
          </a>
          <Button asChild>
            <a href="#contact">Request Information</a>
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-[var(--navy)] px-4 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 text-sm font-semibold uppercase tracking-[0.14em] text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="py-2 text-sm font-semibold text-white"
            >
              {site.phoneDisplay}
            </a>
            <Button asChild className="w-full">
              <a href="#contact" onClick={() => setOpen(false)}>
                Request Information
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
