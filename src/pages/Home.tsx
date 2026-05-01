import { useEffect } from "react";
import gsap from "gsap";
import { BeamsBackground } from "@/components/ui/beams-background";

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".fade-up", 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.2
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-primary">
      {/* Left Pane */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <BeamsBackground intensity="medium" className="h-full w-full opacity-60" />
        </div>
        <div className="relative z-10 w-full max-w-2xl mt-24 md:mt-0 pt-48 md:pt-0">
          <h1 className="fade-up font-heading font-medium tracking-tight leading-[0.9] text-6xl md:text-8xl lg:text-[9rem] mb-12 text-background">
            Martin<br />Thelin
          </h1>
          <div className="fade-up space-y-8 mt-12">
            <div className="font-heading text-xl md:text-2xl lg:text-[1.75rem] leading-snug text-background max-w-2xl space-y-8">
              <p>
                Martin Thelin, an MD/PhD physician-scientist, is a pediatric endocrinologist and lipidologist based in San Francisco. He serves as Director of the Pediatric Lipid Clinic at UCSF.
              </p>
              <p>
                After completing his doctoral studies at Lund University and postdoctoral training at Harvard’s Joslin Diabetes Center, Martin now focuses his research on immune mechanisms within Type 1 diabetes and rare lipid disorders.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Pane */}
      <div className="relative w-full md:w-1/2 min-h-[50vh] md:min-h-screen">
        <img 
          src="/martin-thelin.jpg"
          alt="Dr. Martin Thelin"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none"></div>
      </div>
    </div>
  );
}
