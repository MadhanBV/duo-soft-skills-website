import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center space-y-6">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-bronze">
        404 · Page Not Found
      </span>
      <h1 className="font-editorial text-4xl sm:text-5xl text-charcoal font-normal">
        The page you requested could not be found.
      </h1>
      <p className="text-sm sm:text-base text-stone max-w-lg mx-auto">
        Use the links below to return to the DUO homepage, explore our training programmes, or
        submit a registration.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-charcoal text-ivory px-6 py-3.5 text-sm font-medium hover:bg-bronze transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/programmes"
          className="inline-flex items-center gap-2 border border-hairline bg-white text-charcoal px-6 py-3.5 text-sm font-medium hover:border-charcoal transition-colors"
        >
          <span>View Programmes</span>
        </Link>
      </div>
    </div>
  );
}
