import { useEffect } from "react";
import gsap from "gsap";

export default function ClinicalStudies() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".study-item", 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power2.out",
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-56 md:pt-40 pb-32 container mx-auto px-8 md:px-16 max-w-5xl min-h-screen">
      <h1 className="font-heading text-primary mb-24">
        clinical trials
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-4 study-item">
          <h2 className="font-sans text-lg uppercase tracking-widest text-charcoal/60 sticky top-32">
            Novartis (Inclisiran)
          </h2>
          <span className="inline-block mt-2 font-sans text-xs uppercase tracking-widest text-accent font-medium">Actively Recruiting</span>
        </div>
        <div className="md:col-span-8 study-item">
          <div className="prose prose-xl prose-p:font-heading prose-p:text-charcoal prose-p:leading-snug max-w-none">
            <p className="mb-6">
              Site Principal Investigator for two clinical trials evaluating the safety and efficacy of PCSK9-targeted siRNA therapeutics in pediatric populations.
            </p>
            <p>
              These studies recruit patients with homozygous (HoFH) and heterozygous (HeFH) familial hypercholesterolemia.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-12">
            <a href="https://clinicaltrials.gov/study/NCT06597006" target="_blank" rel="noopener noreferrer" className="font-sans text-sm uppercase tracking-widest text-charcoal hover:text-accent transition-colors no-underline border-b border-charcoal/20 pb-1 w-max">
              View HoFH Study Details
            </a>
            <a href="https://clinicaltrials.gov/study/NCT06597019" target="_blank" rel="noopener noreferrer" className="font-sans text-sm uppercase tracking-widest text-charcoal hover:text-accent transition-colors no-underline border-b border-charcoal/20 pb-1 w-max">
              View HeFH Study Details
            </a>
          </div>
        </div>

        <div className="md:col-span-12 border-t border-charcoal/10 my-8 study-item"></div>

        <div className="md:col-span-4 study-item">
          <h2 className="font-sans text-lg uppercase tracking-widest text-charcoal/60 sticky top-32">
            Ionis (Olezarsen)
          </h2>
          <span className="inline-block mt-2 font-sans text-xs uppercase tracking-widest text-charcoal/40 font-medium">Upcoming</span>
        </div>
        <div className="md:col-span-8 study-item">
          <div className="prose prose-xl prose-p:font-heading prose-p:text-charcoal prose-p:leading-snug max-w-none">
            <p className="mb-6">
              Site Principal Investigator for an upcoming clinical trial evaluating the safety and efficacy of Olezarsen, an APOC3-targeted antisense oligonucleotide.
            </p>
            <p>
              This study enrolls patients with Familial Chylomicronemia Syndrome (FCS) to assess the therapeutic reduction of severe hypertriglyceridemia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
