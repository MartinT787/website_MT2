interface DisclaimerProps {
  variant?: "full" | "short";
}

export default function Disclaimer({ variant = "full" }: DisclaimerProps) {
  if (variant === "short") {
    return (
      <p className="text-sm italic text-ink-soft">
        General education, not medical advice. Talk with your care team.
      </p>
    );
  }

  return (
    <p className="leading-relaxed">
      The Lipid Nutrition Hub is patient education, not medical advice. The
      information here is general and may not apply to your situation. Talk with
      your doctor, lipidologist, or registered dietitian before changing your
      diet, medications, or care plan. In a medical emergency, call your local
      emergency number.
    </p>
  );
}
