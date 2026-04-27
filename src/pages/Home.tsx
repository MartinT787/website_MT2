import { Link } from "react-router-dom";
import { profileList } from "@/content/profiles";

export default function Home() {
  return (
    <div>
      <section className="bg-parchment-50">
        <div className="container-prose py-16 md:py-24">
          <p className="font-serif text-sm uppercase tracking-widest text-terracotta-deep">
            Lipid Nutrition Hub
          </p>
          <h1 className="mt-4 font-serif">
            Plain-language nutrition guidance for people living with lipid
            disorders.
          </h1>
          <p className="mt-6 text-lg text-ink-soft">
            Most patients leave clinic with a one-page diet sheet and not much
            else. This site gives you the next step: a profile that fits your
            condition, food guidance you can use today, and the reasoning
            behind it — all in plain language, all with sources.
          </p>
        </div>
      </section>

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

      <section className="bg-sage py-16 text-parchment">
        <div className="container-prose">
          <h2 className="font-serif text-peach">A note on what this is</h2>
          <p className="mt-4">
            This site is a first step. It's for patients and families, not for
            clinicians. The goal is plain food language you can use without a
            calculator and without a degree in nutrition.
          </p>
          <p className="mt-4">
            For one specific condition — FCS — there's a single tool that
            tracks total grams of fat, because that condition genuinely needs
            it. Everywhere else, no calculators. No charts. No streaks. Just
            the food.
          </p>
        </div>
      </section>
    </div>
  );
}
