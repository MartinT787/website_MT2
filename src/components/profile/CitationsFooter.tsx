interface CitationsFooterProps {
  text: string;
}

export default function CitationsFooter({ text }: CitationsFooterProps) {
  return (
    <section className="border-t border-ink/10 bg-parchment-50 py-12">
      <div className="container-prose">
        <h2 className="font-serif text-lg text-ink-soft">
          About this guidance
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{text}</p>
        <p className="mt-3 text-sm italic text-ink-soft">
          General education, not medical advice. Talk with your care team.
        </p>
      </div>
    </section>
  );
}
