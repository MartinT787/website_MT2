import { useEffect } from "react";
import gsap from "gsap";

export default function Consulting() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".consult-item", 
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
    <div className="pt-40 pb-32 container mx-auto px-8 md:px-16 max-w-5xl min-h-screen">
      <h1 className="font-heading text-primary mb-24">
        consulting
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-4 consult-item">
          <h2 className="font-sans text-lg uppercase tracking-widest text-charcoal/60 sticky top-32">
            Advisory Services
          </h2>
        </div>
        <div className="md:col-span-8 consult-item">
          <div className="prose prose-xl prose-p:font-heading prose-p:text-charcoal prose-p:leading-snug max-w-none">
            <p>
              With extensive experience as a physician-scientist specializing in rare lipid disorders and pediatric endocrinology, I provide specialized consulting services for metabolic clinical trials, research initiatives, and strategic clinical development.
            </p>
            <p>
              My background integrates rigorous clinical practice at UCSF with a deep understanding of immunological mechanisms and advanced metabolic pathways. I offer unique insights for pharmaceutical and biotech partners developing novel therapeutics for conditions such as Familial Chylomicronemia Syndrome (FCS) and Homozygous/Heterozygous Familial Hypercholesterolemia (HoFH/HeFH).
            </p>
          </div>
        </div>

        <div className="md:col-span-12 border-t border-charcoal/10 my-8 consult-item"></div>

        <div className="md:col-span-4 consult-item">
          <h2 className="font-sans text-lg uppercase tracking-widest text-charcoal/60 sticky top-32">
            Get in Touch
          </h2>
        </div>
        <div className="md:col-span-8 consult-item">
          <p className="font-sans font-light text-charcoal text-[1.2rem] mb-8 max-w-xl leading-relaxed">
            For inquiries regarding consulting opportunities, advisory board participation, or trial design consultation, please reach out via email.
          </p>
          <a 
            href="mailto:martin@martinthelin.com" 
            className="inline-block font-heading text-2xl md:text-4xl text-accent hover:opacity-60 transition-opacity no-underline"
          >
            martin@martinthelin.com
          </a>
        </div>
      </div>
    </div>
  );
}
