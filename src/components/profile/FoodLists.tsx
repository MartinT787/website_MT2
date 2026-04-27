import type { FoodList } from "@/content/profiles/types";

interface FoodListsProps {
  foods: FoodList;
}

interface ColumnProps {
  title: string;
  description: string;
  items: string[];
  swatch: string;
  bg: string;
}

function Column({ title, description, items, swatch, bg }: ColumnProps) {
  return (
    <div className={`rounded-sm p-6 ${bg}`}>
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className={`inline-block h-3 w-3 rounded-full ${swatch}`}
        />
        <h3 className="font-serif text-xl">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-ink-soft">{description}</p>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden className="text-ink-soft">
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FoodLists({ foods }: FoodListsProps) {
  return (
    <section className="container-wide py-16">
      <h2 className="font-serif">Food guidance</h2>
      <p className="mt-2 max-w-prose text-ink-soft">
        Three lists. Eat more of the first column. Be mindful of the middle.
        Limit the third.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Column
          title="Eat freely"
          description="The base of the plate."
          items={foods.eat}
          swatch="bg-eat"
          bg="bg-eat-soft"
        />
        <Column
          title="Be mindful"
          description="Smaller portions, less often."
          items={foods.mindful}
          swatch="bg-caution"
          bg="bg-caution-soft"
        />
        <Column
          title="Limit"
          description="Save for occasions, or skip."
          items={foods.avoid}
          swatch="bg-avoid"
          bg="bg-avoid-soft"
        />
      </div>
    </section>
  );
}
