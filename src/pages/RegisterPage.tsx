import { useSearchParams, Link } from 'react-router';
import { Phone, Mail, ShieldCheck, CheckCircle2, ArrowLeft } from 'lucide-react';
import RegistrationForm from '../components/RegistrationForm';
import { PROGRAMMES, FOUNDERS, ProgrammeOptionName, BRAND_INFO } from '../data/duoData';

export default function RegisterPage() {
  const [searchParams] = useSearchParams();
  const rawParam = searchParams.get('programme') || '';

  const matchedProgramme: ProgrammeOptionName | '' =
    rawParam === '3-Day Motivational Crash Course' || rawParam === '3-day-crash-course'
      ? '3-Day Motivational Crash Course'
      : rawParam === '3-Month Personality Development Course' ||
        rawParam === '3-month-personality-course'
      ? '3-Month Personality Development Course'
      : '';

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="max-w-3xl space-y-3">
          <Link
            to="/programmes"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone hover:text-charcoal transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-bronze" aria-hidden="true" />
            <span>Compare Programmes</span>
          </Link>
          <h1 className="font-editorial text-4xl sm:text-5xl text-charcoal font-normal">
            Programme Registration
          </h1>
          <p className="text-base text-stone leading-relaxed">
            Register directly for DUO’s training programmes using the form below. Once submitted,
            the DUO team can reach out to you via your preferred contact method (WhatsApp or phone).
          </p>
        </div>

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left / Main Form Column */}
          <div className="lg:col-span-8">
            <RegistrationForm preselectedProgramme={matchedProgramme} />
          </div>

          {/* Right Reference Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Programme Reference Card */}
            <div className="bg-white border border-hairline p-6 space-y-5">
              <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-bronze font-semibold">
                Available Programmes
              </h2>
              <div className="divide-y divide-hairline space-y-4">
                {PROGRAMMES.map((prog) => (
                  <div key={prog.id} className="pt-4 first:pt-0 space-y-2">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-editorial text-lg text-charcoal font-medium">
                        {prog.title}
                      </h3>
                      <span className="font-mono text-sm font-semibold text-charcoal shrink-0">
                        {prog.price}
                      </span>
                    </div>
                    <p className="text-xs text-stone leading-relaxed">{prog.focus}</p>
                    <ul className="space-y-1 text-xs text-charcoal pt-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-bronze shrink-0" aria-hidden="true" />
                        <span>
                          {prog.duration} · {prog.totalCommitment}
                        </span>
                      </li>
                      {prog.batchSize !== 'Not specified' && (
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-bronze shrink-0" aria-hidden="true" />
                          <span>Batch: {prog.batchSize}</span>
                        </li>
                      )}
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-bronze shrink-0" aria-hidden="true" />
                        <span>Includes: {prog.includes}</span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Offline Payment Assurance */}
            <div className="bg-white border border-hairline p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-bronze font-semibold">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                <span>Offline Fee Process</span>
              </div>
              <p className="text-xs sm:text-sm text-stone leading-relaxed">
                {BRAND_INFO.offlinePaymentNotice}
              </p>
            </div>

            {/* Direct Contact Sidebar Card */}
            <div className="bg-white border border-hairline p-6 space-y-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-bronze font-semibold">
                Direct Founder Contact
              </h2>
              <div className="space-y-4 text-xs sm:text-sm">
                {FOUNDERS.map((founder) => (
                  <div key={founder.id} className="space-y-1 border-l-2 border-bronze/50 pl-3">
                    <p className="font-semibold text-charcoal">{founder.name}</p>
                    <a
                      href={founder.phoneHref}
                      className="flex items-center gap-2 text-stone hover:text-charcoal"
                    >
                      <Phone className="w-3.5 h-3.5 text-bronze" aria-hidden="true" />
                      <span>{founder.phoneDisplay}</span>
                    </a>
                    <a
                      href={founder.emailHref}
                      className="flex items-center gap-2 text-stone hover:text-charcoal"
                    >
                      <Mail className="w-3.5 h-3.5 text-bronze" aria-hidden="true" />
                      <span>{founder.email}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
