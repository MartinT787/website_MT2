export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 border-t border-charcoal/10">
      <div className="flex flex-col md:flex-row justify-between items-center text-charcoal/50 text-xs font-sans tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Martin Thelin.</p>
        <p className="mt-4 md:mt-0">Patient education, not medical advice.</p>
      </div>
    </footer>
  );
}
