import { Link } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PrivacyPolicyContent from '../components/PrivacyPolicyContent';

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/register"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone hover:text-charcoal transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-bronze" aria-hidden="true" />
            <span>Back to Registration Form</span>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone hover:text-charcoal transition-colors"
          >
            <span>Home</span>
            <ArrowRight className="w-3.5 h-3.5 text-bronze" aria-hidden="true" />
          </Link>
        </div>

        <PrivacyPolicyContent />
      </div>
    </div>
  );
}
