import { useEffect } from "react";
import gsap from "gsap";

export default function CV() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cv-item", 
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
    return () => ctx.revert(); // Cleanup for React 18 Strict Mode
  }, []);

  return (
    <div className="pt-56 md:pt-40 pb-32 container mx-auto px-8 md:px-16 max-w-5xl min-h-screen">
      <h1 className="font-heading text-primary mb-24 cv-item">
        curriculum vitae
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        {/* Current Roles */}
        <div className="md:col-span-4 cv-item">
          <h2 className="font-sans text-lg uppercase tracking-widest text-charcoal/60 sticky top-32">
            Current Roles
          </h2>
        </div>
        <div className="md:col-span-8 cv-item mb-12">
          <ul className="list-none space-y-4 font-heading text-xl md:text-2xl text-charcoal/90">
            <li className="flex items-start gap-4">
              <span className="text-accent mt-2 w-1.5 h-1.5 rounded-sm bg-accent shrink-0"></span>
              <span>Assistant Professor in Pediatric Endocrinology at the University of California, San Francisco (UCSF)</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-accent mt-2 w-1.5 h-1.5 rounded-sm bg-accent shrink-0"></span>
              <span>Director of Pediatric Lipid Clinic at UCSF</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-accent mt-2 w-1.5 h-1.5 rounded-sm bg-accent shrink-0"></span>
              <span>Pediatric Hospitalist in the Bone Marrow Transplant Unit at UCSF</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-12 border-t border-charcoal/10 my-4 cv-item"></div>

        {/* Board Certifications */}
        <div className="md:col-span-4 cv-item">
          <h2 className="font-sans text-lg uppercase tracking-widest text-charcoal/60 sticky top-32">
            Board Certifications
          </h2>
        </div>
        <div className="md:col-span-8 cv-item mb-12">
          <ul className="list-none space-y-4 font-heading text-xl md:text-2xl text-charcoal/90">
            <li className="flex items-start gap-4">
              <span className="text-accent mt-2 w-1.5 h-1.5 rounded-sm bg-accent shrink-0"></span>
              <span>American Board of Pediatrics</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-accent mt-2 w-1.5 h-1.5 rounded-sm bg-accent shrink-0"></span>
              <span>American Board of Pediatric Endocrinology</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-accent mt-2 w-1.5 h-1.5 rounded-sm bg-accent shrink-0"></span>
              <span>American Board of Clinical Lipidology</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-12 border-t border-charcoal/10 my-4 cv-item"></div>

        {/* Education */}
        <div className="md:col-span-4 cv-item">
          <h2 className="font-sans text-lg uppercase tracking-widest text-charcoal/60 sticky top-32">
            Education
          </h2>
        </div>
        <div className="md:col-span-8 cv-item mb-12">
          <ul className="list-none space-y-4 font-heading text-xl md:text-2xl text-charcoal/90">
            <li className="flex items-start gap-4">
              <span className="text-accent mt-2 w-1.5 h-1.5 rounded-sm bg-accent shrink-0"></span>
              <span>Medical Doctor (MD) at Lund University, Sweden</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-accent mt-2 w-1.5 h-1.5 rounded-sm bg-accent shrink-0"></span>
              <span>Doctor of Philosophy (PhD) in Cell and Tumor Biology at Lund University, Sweden</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-12 border-t border-charcoal/10 my-4 cv-item"></div>

        {/* Postdoctoral Training */}
        <div className="md:col-span-4 cv-item">
          <h2 className="font-sans text-lg uppercase tracking-widest text-charcoal/60 sticky top-32">
            Postdoctoral Training
          </h2>
        </div>
        <div className="md:col-span-8 cv-item mb-12">
          <ul className="list-none space-y-4 font-heading text-xl md:text-2xl text-charcoal/90">
            <li className="flex items-start gap-4">
              <span className="text-accent mt-2 w-1.5 h-1.5 rounded-sm bg-accent shrink-0"></span>
              <span>Postdoctoral studies in Immunology at Joslin Diabetes Center, Harvard, Boston</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-accent mt-2 w-1.5 h-1.5 rounded-sm bg-accent shrink-0"></span>
              <span>Pediatric Residency at UCSF</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-accent mt-2 w-1.5 h-1.5 rounded-sm bg-accent shrink-0"></span>
              <span>Pediatric Endocrinology Fellowship at UCSF</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
