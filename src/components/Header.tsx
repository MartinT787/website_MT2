import { NavLink, useLocation } from "react-router-dom";

const nav = [
  { to: "/", label: "home" },
  { to: "/cv", label: "cv" },
  { to: "/consulting", label: "consulting" },
  { to: "/clinical-studies", label: "studies" },
  { to: "/lipid-nutrition", label: "nutrition hub" },
];

export default function Header() {
  const { pathname } = useLocation();
  
  // Safe check: If we are not on any of the inner pages, we must be on the home page.
  // This avoids issues with base URLs, trailing slashes, or hash routing.
  const isHome = !pathname.includes("/cv") && 
                 !pathname.includes("/consulting") && 
                 !pathname.includes("/clinical-studies") && 
                 !pathname.includes("/lipid-nutrition");
  const textColor = isHome ? "text-navlight" : "text-charcoal";

  return (
    <header className={`absolute top-0 left-0 w-full z-50 p-8 md:p-12 ${textColor}`}>
      <nav aria-label="Primary">
        <ul className="flex flex-wrap items-center gap-x-5 md:gap-x-6 gap-y-4">
          {nav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  [
                    "font-sans text-base md:text-lg lg:text-xl tracking-widest uppercase transition-all duration-300 no-underline",
                    isHome ? "text-navlight" : "text-charcoal",
                    isActive
                      ? "opacity-100 font-bold"
                      : "opacity-80 hover:opacity-100 hover:font-medium",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
