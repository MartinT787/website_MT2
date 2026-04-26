import type { EducationCard } from "@/content/profiles/types";

interface EducationCardsProps {
  cards: EducationCard[];
}

export default function EducationCards({ cards }: EducationCardsProps) {
  return (
    <section className="bg-parchment-50 py-16">
      <div className="container-wide">
        <h2 className="font-serif">Things worth knowing</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-sm border border-ink/10 bg-parchment p-6"
            >
              <h3 className="font-serif text-lg text-terracotta-deep">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
