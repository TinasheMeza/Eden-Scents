import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-6xl font-serif text-warm-gray mb-4">404</h1>
        <h2 className="text-3xl font-serif text-warm-gray mb-4">Page Not Found</h2>
        <p className="text-warm-gray/70 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-soft-gold text-warm-gray px-8 py-4 rounded font-medium hover:bg-soft-gold/90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
