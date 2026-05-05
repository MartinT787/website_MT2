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
    <div className="pt-56 md:pt-40 pb-32 container mx-auto px-8 md:px-16 max-w-5xl min-h-screen">
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
              As a UCSF physician-scientist specializing in rare lipid disorders, I partner with pharmaceutical and biotech companies to guide the development of novel therapeutics.
            </p>
            <p className="mb-4">
              My consulting expertise includes:
            </p>
            <ul className="list-none space-y-3">
              <li><strong>Clinical Trial Strategy:</strong> Guiding metabolic clinical trials and research initiatives.</li>
              <li><strong>Translational Insights:</strong> Bridging the gap between advanced metabolic pathways, immunology, and clinical practice.</li>
              <li><strong>Rare Disease Focus:</strong> Specialized knowledge in complex conditions like FCS and HoFH/HeFH.</li>
            </ul>
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
          <div className="flex flex-col gap-6">
            <a 
              href="mailto:martin@martinthelin.com" 
              className="inline-block font-heading text-2xl md:text-4xl text-accent hover:opacity-60 transition-opacity no-underline w-fit"
            >
              martin@martinthelin.com
            </a>
            <a 
              href="https://www.linkedin.com/in/martin-thelin-md-phd-a6388454" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-heading text-2xl md:text-4xl text-accent hover:opacity-60 transition-opacity no-underline w-fit"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
