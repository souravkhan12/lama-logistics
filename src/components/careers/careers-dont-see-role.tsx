"use client";

import { CAREERS_HR_EMAIL } from "@/data/careers-data";

import CareersSplitButtonCream from "./careers-split-button-cream";

export default function CareersDontSeeRole() {
  return (
    <section className="bg-about-join-team-cta flex items-center py-14 text-(--color-surface-cream) lg:h-[446px] lg:py-16">
      <div className="layout-container flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="flex max-w-2xl flex-col gap-4 h-full justify-center">
          <h2 className="font-display text-h1 font-light lg:text-h0">
            Don&apos;t see your role?
          </h2>
          <p className="font-body text-b1">
            Even if your ideal role isn't listed today, we’re always looking for
            disciplined, safety-conscious professionals to join our growing
            network. Send your resume and a brief note about why you’re a fit
            for our field team.
          </p>
        </div>
        <CareersSplitButtonCream
          href={`/about/apply`}
          label="WRITE TO US"
          aria-label="Get in touch about careers"
        />
      </div>
    </section>
  );
}
