import { Link } from 'react-router';
import { ShieldCheck, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import ProgrammeCard from '../components/ProgrammeCard';
import ProgrammeComparison from '../components/ProgrammeComparison';
import CustomisedCourseSection from '../components/CustomisedCourseSection';
import { PROGRAMMES, BRAND_INFO } from '../data/duoData';

export default function ProgrammesPage() {
  return (
    <div className="pb-20">
      {/* Page Header */}
      <section className="bg-ivory border-b border-hairline py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-bronze font-medium">
              DUO Training Curriculum
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-charcoal font-normal leading-tight">
              Training Programmes
            </h1>
            <p className="text-base sm:text-lg text-stone leading-relaxed">
              DUO offers two distinct training programmes tailored to your goals: a focused 3-Day
              Motivational Crash Course and a comprehensive 30-class, 3-Month Personality Development
              Course.
            </p>
          </div>

          {/* Offline Payment Notice Banner */}
          <div className="bg-white border border-hairline p-4 sm:p-5 flex items-start gap-3.5 max-w-3xl">
            <ShieldCheck className="w-5 h-5 text-bronze shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs sm:text-sm text-stone leading-relaxed">
              <strong className="text-charcoal font-semibold">
                Important Note on Registration & Payments:{' '}
              </strong>
              {BRAND_INFO.offlinePaymentNotice}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Programme Cards */}
      <section aria-label="Detailed programmes" className="py-14 sm:py-20 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {PROGRAMMES.map((programme) => (
              <ProgrammeCard key={programme.id} programme={programme} mode="detailed" />
            ))}
          </div>

          <CustomisedCourseSection />
        </div>
      </section>

      {/* How to Choose Between Programmes */}
      <section className="py-14 sm:py-20 bg-ivory-deep/35 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-bronze font-medium">
              Programme Selection Guide
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-charcoal font-normal">
              Helping You Choose the Right Programme
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-hairline p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-bronze font-semibold">
                  Option 01 · Short Intensive
                </span>
                <span className="font-mono text-sm font-semibold text-charcoal">₹6,000</span>
              </div>
              <h3 className="font-editorial text-2xl text-charcoal">
                Consider the 3-Day Motivational Crash Course if you want:
              </h3>
              <ul className="space-y-2.5 text-sm text-stone">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-bronze shrink-0 mt-1" aria-hidden="true" />
                  <span>A compact 3-day commitment (2 hours per day, 6 hours total).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-bronze shrink-0 mt-1" aria-hidden="true" />
                  <span>Focused work on developing your inner self and speaking skills.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-bronze shrink-0 mt-1" aria-hidden="true" />
                  <span>
                    A dedicated Day 3 personal interaction at the DUO office or another selected
                    place, plus a memento and certificate.
                  </span>
                </li>
              </ul>
              <div className="pt-3">
                <Link
                  to={`/register?programme=${encodeURIComponent('3-Day Motivational Crash Course')}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-bronze underline"
                >
                  <span>Select 3-Day Motivational Crash Course</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-hairline p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-bronze font-semibold">
                  Option 02 · Comprehensive Course
                </span>
                <span className="font-mono text-sm font-semibold text-charcoal">₹30,000</span>
              </div>
              <h3 className="font-editorial text-2xl text-charcoal">
                Consider the 3-Month Personality Development Course if you want:
              </h3>
              <ul className="space-y-2.5 text-sm text-stone">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-bronze shrink-0 mt-1" aria-hidden="true" />
                  <span>
                    An in-depth 3-month progression across 30 total classes in a small batch of 5 to
                    10 participants.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-bronze shrink-0 mt-1" aria-hidden="true" />
                  <span>
                    Dedicated preparation for interviews alongside personality development and
                    speaking skills improvement.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-bronze shrink-0 mt-1" aria-hidden="true" />
                  <span>
                    Month-by-month work covering communication assessment (Month 1), targeted skill
                    redefinition and presentability (Month 2), and attire, choice of words, decorum,
                    and mannerisms (Month 3).
                  </span>
                </li>
              </ul>
              <div className="pt-3">
                <Link
                  to={`/register?programme=${encodeURIComponent('3-Month Personality Development Course')}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-bronze underline"
                >
                  <span>Select 3-Month Personality Development Course</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Table */}
      <section id="comparison" className="pt-14 sm:pt-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-bronze font-medium">
              Side-by-Side Overview
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-charcoal font-normal">
              Programme Comparison
            </h2>
          </div>

          <ProgrammeComparison />

          <div className="bg-white border border-hairline p-5 flex items-start gap-3 text-xs sm:text-sm text-stone">
            <HelpCircle className="w-5 h-5 text-bronze shrink-0 mt-0.5" aria-hidden="true" />
            <p className="leading-relaxed">
              Have a question before deciding? You can include your questions in the optional field
              on the <Link to="/register" className="text-charcoal underline hover:text-bronze font-medium">Registration Form</Link> or
              contact our founders directly on the <Link to="/about" className="text-charcoal underline hover:text-bronze font-medium">About DUO</Link> page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
