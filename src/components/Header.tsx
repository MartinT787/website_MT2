import { Link, NavLink } from "react-router-dom";

const nav = [
  { to: "/heart-healthy", label: "Heart-Healthy" },
  { to: "/cholesterol", label: "Cholesterol" },
  { to: "/triglyceride", label: "Triglycerides" },
  { to: "/fcs", label: "FCS" },
  { to: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="border-b border-ink/10 bg-parchment-50">
      <div className="container-wide flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between md:py-8">
        <Link
          to="/"
          className="font-serif text-2xl font-medium tracking-tight text-ink no-underline hover:text-terracotta-deep"
        >
          Lipid Nutrition Hub
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "no-underline transition-colors",
                      isActive
                        ? "text-terracotta-deep"
                        : "text-ink-soft hover:text-terracotta-deep",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
