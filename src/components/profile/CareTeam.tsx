interface CareTeamProps {
  items: string[];
}

export default function CareTeam({ items }: CareTeamProps) {
  return (
    <section className="container-prose py-16">
      <h2 className="font-serif">Talk to your care team if&hellip;</h2>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden className="mt-2 inline-block h-1 w-3 bg-terracotta" />
            <span className="text-base leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
