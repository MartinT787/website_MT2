import Disclaimer from "@/components/Disclaimer";

export default function About() {
  return (
    <div className="container-prose py-16">
      <h1>About this site</h1>
      <p className="mt-6 text-lg text-ink-soft">
        The Lipid Nutrition Hub is a plain-language resource for people living
        with lipid disorders and the families eating with them.
      </p>

      <h2 className="mt-12">Who it's for</h2>
      <p className="mt-4">
        Patients with a lipid diagnosis, parents of pediatric patients, and the
        general public looking for trustworthy heart-healthy guidance. It is
        not a clinician tool — that's a future version.
      </p>

      <h2 className="mt-12">How it's organized</h2>
      <p className="mt-4">
        Four profiles cover the most common situations: Heart-Healthy Eating
        (the foundation), Cholesterol-Lowering Helper (for high LDL and
        familial hypercholesterolemia), Triglyceride Calmer (for severe high
        triglycerides), and FCS (familial chylomicronemia syndrome).
      </p>

      <h2 className="mt-12">Why it uses food language, not numbers</h2>
      <p className="mt-4">
        Most patients can't translate "&lt; 2300 mg of sodium per day" into
        what's on their plate at lunch. So we don't ask you to. The numbers
        are in the source documents. The site speaks in food.
      </p>
      <p className="mt-4">
        FCS is the one exception: there, grams of fat genuinely matter, and
        there's a simple lookup tool for it. Everywhere else, no calculators.
      </p>

      <h2 className="mt-12">Sources</h2>
      <p className="mt-4">
        Every recommendation traces back to a peer-reviewed clinical guideline
        — the National Lipid Association, the AHA, the NHLBI Expert Panel, the
        FCS Foundation, and the two primary chylomicronemia papers (Williams
        2018 and Goldberg &amp; Chait 2020). Citations are listed at the
        bottom of each profile.
      </p>

      <div className="mt-16 rounded-sm border border-ink/10 bg-parchment-50 p-6">
        <h2 className="font-serif text-xl">Important</h2>
        <div className="mt-3">
          <Disclaimer variant="full" />
        </div>
      </div>
    </div>
  );
}
