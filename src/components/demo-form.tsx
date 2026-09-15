"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/fields";
import { site } from "@/lib/site";

const reasons = [
  "Bid Request",
  "General Information",
  "Job Information",
  "Job Walk",
  "Other",
] as const;

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-[var(--steel)] bg-[var(--paper)] p-5 text-sm leading-relaxed text-[var(--ink)]">
        <p className="font-semibold text-[var(--navy)]">This is a speculative demo form.</p>
        <p className="mt-2">
          Nothing was sent to Ameri-Climate. To reach the business, call{" "}
          <a className="underline" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>{" "}
          or email{" "}
          <a className="underline" href={site.emailHref}>
            {site.email}
          </a>
          . Their current site says they reply within one to two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <p className="rounded-sm border border-[var(--sand)] bg-[var(--paper)] p-3 text-xs leading-relaxed text-[var(--ink)]">
        Speculative Novenworks redesign. This form does not submit to Ameri-Climate. Use the phone
        or email on this page for a real inquiry.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="first">First name</Label>
          <Input id="first" name="first" required autoComplete="given-name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last">Last name</Label>
          <Input id="last" name="last" required autoComplete="family-name" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="reason">Reason of inquiry</Label>
        <select
          id="reason"
          name="reason"
          required
          className="flex min-h-11 w-full rounded-sm border border-[var(--steel)] bg-white px-3 text-base text-[var(--navy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)]"
          defaultValue=""
        >
          <option value="" disabled>
            Select one
          </option>
          {reasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea id="message" name="message" required />
      </div>
      <Button type="submit" className="w-full sm:w-auto">
        Submit demo inquiry
      </Button>
    </form>
  );
}
