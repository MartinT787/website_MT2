import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container-prose py-24 text-center">
      <p className="font-serif text-sm uppercase tracking-widest text-terracotta-deep">
        404
      </p>
      <h1 className="mt-4">We can't find that page.</h1>
      <p className="mt-4 text-ink-soft">
        It may have moved, or the link might be wrong.
      </p>
      <p className="mt-8">
        <Link to="/">← Back to home</Link>
      </p>
    </div>
  );
}
