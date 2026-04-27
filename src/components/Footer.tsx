import Disclaimer from "./Disclaimer";

export default function Footer() {
  return (
    <footer className="mt-16 bg-sage text-parchment">
      <div className="container-wide py-12">
        <h2 className="font-serif text-xl text-peach">Important note</h2>
        <div className="mt-4 max-w-prose">
          <Disclaimer variant="full" />
        </div>
        <div className="mt-10 flex flex-col gap-2 text-sm text-parchment/70 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Lipid Nutrition Hub.</p>
          <p>Patient education, not medical advice.</p>
        </div>
      </div>
    </footer>
  );
}
