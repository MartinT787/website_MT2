import { Link } from "react-router-dom";
import { profileList } from "@/content/profiles";

export default function LipidHub() {
  return (
    <div className="pt-40 pb-32 container mx-auto px-8 md:px-16 max-w-5xl min-h-screen">
      <h1 className="font-heading text-primary mb-24">
        nutrition hub
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
        <div className="md:col-span-4">
          <h2 className="font-sans text-lg uppercase tracking-widest text-charcoal/60 sticky top-32">
            Patient Guidance
          </h2>
        </div>
        <div className="md:col-span-8">
          <div className="prose prose-xl prose-p:font-heading prose-p:text-charcoal prose-p:leading-snug max-w-none">
            <p>
              Plain-language nutrition guidance for lipid disorders. This site provides targeted context, actionable dietary advice, and evidence-based reasoning—all fully sourced and accessible.
            </p>
          </div>
        </div>
      </div>

      <section className="container-wide py-16">
        <h2 className="font-serif">Pick the profile that fits you</h2>
        <p className="mt-3 max-w-prose text-ink-soft">
          Not sure which one? Start with Heart-Healthy Eating — it's the
          foundation everyone benefits from, and the other three build on it.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {profileList.map((p) => (
            <Link
              key={p.id}
              to={`/${p.slug}`}
              className="group block rounded-sm border border-ink/10 bg-parchment-50 p-8 no-underline transition-colors hover:border-terracotta hover:bg-parchment"
            >
              <h3 className="font-serif text-2xl text-ink group-hover:text-terracotta-deep">
                {p.label}
              </h3>
              <p className="mt-2 text-sm uppercase tracking-wider text-ink-soft">
                {p.clinicalName}
              </p>
              <p className="mt-4 text-ink">{p.oneLiner}</p>
              <p className="mt-6 text-sm text-terracotta-deep">
                Read this profile →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
