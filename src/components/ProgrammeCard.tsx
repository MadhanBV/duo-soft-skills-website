import { Link } from 'react-router';
import { ArrowRight, Clock, Users, Award, Calendar, MapPin } from 'lucide-react';
import { ProgrammeData } from '../data/duoData';

interface ProgrammeCardProps {
  programme: ProgrammeData;
  mode?: 'preview' | 'detailed';
}

export default function ProgrammeCard({ programme, mode = 'detailed' }: ProgrammeCardProps) {
  const registerUrl = `/register?programme=${encodeURIComponent(programme.title)}`;
  const detailAnchorUrl = `/programmes#${programme.id}`;

  return (
    <article
      id={programme.id}
      className="bg-white border border-hairline flex flex-col justify-between transition-colors hover:border-bronze/70 scroll-mt-28"
    >
      <div className="p-6 sm:p-8 lg:p-10 space-y-6">
        {/* Top Meta & Price Row */}
        <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-hairline">
          <div className="space-y-1.5">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.18em] text-bronze font-medium">
              {programme.code}
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-charcoal font-normal">
              {programme.title}
            </h3>
          </div>
          <div className="text-left sm:text-right bg-ivory px-4 py-2.5 border border-hairline">
            <span className="block text-[11px] font-mono uppercase tracking-[0.15em] text-stone">
              Programme Fee
            </span>
            <span className="font-editorial text-2xl sm:text-3xl font-medium text-charcoal">
              {programme.price}
            </span>
          </div>
        </div>

        {/* Core Focus */}
        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-[0.15em] text-stone">Primary Focus</p>
          <p className="text-base text-charcoal font-medium leading-relaxed">{programme.focus}</p>
        </div>

        {/* Key Structured Facts */}
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="bg-ivory/60 p-4 border border-hairline/80">
            <dt className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone">
              <Calendar className="w-3.5 h-3.5 text-bronze" aria-hidden="true" />
              <span>Duration</span>
            </dt>
            <dd className="mt-1 text-sm font-semibold text-charcoal">{programme.duration}</dd>
          </div>

          <div className="bg-ivory/60 p-4 border border-hairline/80">
            <dt className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone">
              <Clock className="w-3.5 h-3.5 text-bronze" aria-hidden="true" />
              <span>Session Structure</span>
            </dt>
            <dd className="mt-1 text-sm font-semibold text-charcoal">
              {programme.totalCommitment} ({programme.structure})
            </dd>
          </div>

          {programme.batchSize !== 'Not specified' && (
            <div className="bg-ivory/60 p-4 border border-hairline/80">
              <dt className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone">
                <Users className="w-3.5 h-3.5 text-bronze" aria-hidden="true" />
                <span>Batch Size</span>
              </dt>
              <dd className="mt-1 text-sm font-semibold text-charcoal">{programme.batchSize}</dd>
            </div>
          )}

          <div
            className={`bg-ivory/60 p-4 border border-hairline/80 ${
              programme.batchSize === 'Not specified' ? 'sm:col-span-2' : ''
            }`}
          >
            <dt className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone">
              <Award className="w-3.5 h-3.5 text-bronze" aria-hidden="true" />
              <span>Included Items</span>
            </dt>
            <dd className="mt-1 text-sm font-semibold text-charcoal">{programme.includes}</dd>
          </div>
        </dl>

        {/* Special Feature for 3-Day Crash Course */}
        {programme.specialFeature && (
          <div className="bg-bronze-light border-l-2 border-bronze p-4 flex items-start gap-3">
            <MapPin className="w-4 h-4 text-bronze shrink-0 mt-1" aria-hidden="true" />
            <div className="text-sm text-charcoal">
              <span className="font-semibold">Day 3 Format: </span>
              <span>{programme.specialFeature}</span>
            </div>
          </div>
        )}

        {/* Monthly Progression for 3-Month Course (Detailed Mode) */}
        {mode === 'detailed' && programme.monthlyProgression && (
          <div className="pt-4 border-t border-hairline space-y-4">
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-bronze">
              Monthly Curriculum Progression
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {programme.monthlyProgression.map((item) => (
                <div
                  key={item.month}
                  className="p-4 bg-ivory/70 border border-hairline flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-5"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-bronze font-semibold shrink-0 w-24">
                    {item.month}
                  </span>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-charcoal">{item.title}</p>
                    <p className="text-sm text-stone leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Card Action Footer */}
      <div className="px-6 sm:px-8 lg:px-10 py-5 bg-ivory/50 border-t border-hairline flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {mode === 'preview' ? (
          <>
            <Link
              to={detailAnchorUrl}
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-charcoal hover:text-bronze transition-colors py-2"
            >
              <span>View Full Programme Details</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              to={registerUrl}
              className="inline-flex items-center justify-center gap-2 bg-charcoal text-ivory px-5 py-3 text-sm font-medium hover:bg-bronze hover:text-white transition-colors"
            >
              <span>Register for this Programme</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </>
        ) : (
          <>
            <p className="text-xs text-stone">
              No online payment required during registration.
            </p>
            <Link
              to={registerUrl}
              className="inline-flex items-center justify-center gap-2 bg-charcoal text-ivory px-6 py-3.5 text-sm font-medium hover:bg-bronze hover:text-white transition-colors shrink-0"
            >
              <span>Register for this Programme</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </>
        )}
      </div>
    </article>
  );
}
