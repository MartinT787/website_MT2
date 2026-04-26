import { useEffect, useMemo, useState } from "react";
import {
  FCS_FAT_CEILING_G_PER_DAY,
  FCS_FAT_WARNING_G_PER_DAY,
  fatStatus,
} from "@/lib/clinical/fcs";

interface DayEntry {
  id: string;
  name: string;
  fatGrams: number;
}

const STORAGE_KEY = "fcs.day.v1";
const STORAGE_DATE_KEY = "fcs.day.date.v1";

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function loadDay(): DayEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const storedDate = window.localStorage.getItem(STORAGE_DATE_KEY);
    if (storedDate !== todayKey()) {
      window.localStorage.removeItem(STORAGE_KEY);
      window.localStorage.setItem(STORAGE_DATE_KEY, todayKey());
      return [];
    }
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as DayEntry[]) : [];
  } catch {
    return [];
  }
}

function saveDay(entries: DayEntry[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  window.localStorage.setItem(STORAGE_DATE_KEY, todayKey());
}

export default function FoodFatLookup() {
  const [name, setName] = useState("");
  const [fatGrams, setFatGrams] = useState<string>("");
  const [entries, setEntries] = useState<DayEntry[]>([]);

  useEffect(() => {
    setEntries(loadDay());
  }, []);

  const total = useMemo(
    () => entries.reduce((sum, e) => sum + e.fatGrams, 0),
    [entries],
  );
  const status = fatStatus(total);

  function addEntry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const grams = Number(fatGrams);
    if (!name.trim() || Number.isNaN(grams) || grams < 0) return;
    const next: DayEntry[] = [
      ...entries,
      { id: crypto.randomUUID(), name: name.trim(), fatGrams: grams },
    ];
    setEntries(next);
    saveDay(next);
    setName("");
    setFatGrams("");
  }

  function removeEntry(id: string) {
    const next = entries.filter((e) => e.id !== id);
    setEntries(next);
    saveDay(next);
  }

  function clearDay() {
    setEntries([]);
    saveDay([]);
  }

  const statusColor =
    status === "over"
      ? "bg-avoid text-parchment"
      : status === "warning"
        ? "bg-caution text-ink"
        : "bg-eat text-parchment";

  return (
    <section
      aria-labelledby="fcs-lookup-heading"
      className="rounded-sm border border-ink/10 bg-parchment-50 p-6 md:p-8"
    >
      <header>
        <p className="font-serif text-sm uppercase tracking-widest text-terracotta-deep">
          The one tool on this site
        </p>
        <h2 id="fcs-lookup-heading" className="mt-3 font-serif">
          FCS food-fat tally
        </h2>
        <p className="mt-3 max-w-prose text-ink-soft">
          Add foods as you eat them. The day's total is compared against the
          15-to-20-gram fat budget. Resets at midnight, your time. No accounts,
          no syncing — your day stays on this device.
        </p>
      </header>

      <form
        onSubmit={addEntry}
        className="mt-8 grid gap-4 md:grid-cols-[2fr,1fr,auto] md:items-end"
      >
        <label className="block">
          <span className="block text-sm font-medium text-ink-soft">
            Food
          </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. baked cod, 4 oz"
            className="mt-1 w-full rounded-sm border border-ink/20 bg-parchment px-3 py-2 font-sans text-base focus:border-terracotta focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-ink-soft">
            Total fat (g)
          </span>
          <input
            type="number"
            inputMode="decimal"
            min={0}
            step={0.1}
            value={fatGrams}
            onChange={(e) => setFatGrams(e.target.value)}
            placeholder="1.0"
            className="mt-1 w-full rounded-sm border border-ink/20 bg-parchment px-3 py-2 font-mono text-base focus:border-terracotta focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
          />
        </label>
        <button
          type="submit"
          className="rounded-sm bg-terracotta px-5 py-2 font-sans text-base font-medium text-parchment transition-colors hover:bg-terracotta-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-deep"
        >
          Add
        </button>
      </form>

      <div className="mt-8 rounded-sm bg-parchment p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h3 className="font-serif text-lg">Today</h3>
          {entries.length > 0 && (
            <button
              type="button"
              onClick={clearDay}
              className="text-sm text-terracotta-deep hover:underline"
            >
              Clear today
            </button>
          )}
        </div>

        {entries.length === 0 ? (
          <p className="mt-4 text-sm italic text-ink-soft">
            Nothing added yet. Today is a clean slate.
          </p>
        ) : (
          <ul className="mt-4 divide-y divide-ink/10">
            {entries.map((entry) => (
              <li
                key={entry.id}
                className="flex items-center justify-between gap-4 py-3"
              >
                <span className="text-base">{entry.name}</span>
                <span className="flex items-center gap-3">
                  <span className="font-mono text-sm">
                    {entry.fatGrams.toFixed(1)} g
                  </span>
                  <button
                    type="button"
                    onClick={() => removeEntry(entry.id)}
                    aria-label={`Remove ${entry.name}`}
                    className="text-xs text-ink-soft hover:text-avoid"
                  >
                    Remove
                  </button>
                </span>
              </li>
            ))}
          </ul>
        )}

        <div
          className={`mt-6 flex items-baseline justify-between gap-4 rounded-sm px-4 py-3 ${statusColor}`}
        >
          <span className="font-serif text-base">Total today</span>
          <span className="font-mono text-2xl">{total.toFixed(1)} g</span>
        </div>
        <p className="mt-3 text-sm text-ink-soft">
          Daily budget: {FCS_FAT_WARNING_G_PER_DAY}–
          {FCS_FAT_CEILING_G_PER_DAY} g of fat.{" "}
          {status === "over"
            ? "You're over the upper bound — review the day with your dietitian."
            : status === "warning"
              ? "You're inside the budget but close to the upper bound."
              : "You're well inside the budget."}
        </p>
      </div>

      <p className="mt-6 text-sm italic text-ink-soft">
        This is an estimate. Confirm your fat budget with your dietitian. The
        gram values come from your input or from USDA FoodData Central, and
        will not be exact for every brand or preparation.
      </p>
    </section>
  );
}
