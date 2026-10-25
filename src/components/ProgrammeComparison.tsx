import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { PROGRAMMES } from '../data/duoData';

export default function ProgrammeComparison() {
  const [crashCourse, personalityCourse] = PROGRAMMES;

  const comparisonRows = [
    {
      feature: 'Programme Title',
      courseA: crashCourse.title,
      courseB: personalityCourse.title,
    },
    {
      feature: 'Duration',
      courseA: crashCourse.duration,
      courseB: personalityCourse.duration,
    },
    {
      feature: 'Session / Class Structure',
      courseA: '2 hours per day (6 hours total across 3 days)',
      courseB: '30 classes across 3 months',
    },
    {
      feature: 'Batch Information',
      courseA: 'Individual & group format (Day 3 personal interaction)',
      courseB: 'Minimum 5, maximum 10 participants per batch',
    },
    {
      feature: 'Primary Focus',
      courseA: 'Developing the inner self and speaking skills',
      courseB: 'Personality development, interview preparation, and speaking skills improvement',
    },
    {
      feature: 'Curriculum / Structure Breakdown',
      courseA:
        'Days 1–2: Inner self & speaking skills development · Day 3: Personal interaction at the DUO office or another selected place',
      courseB:
        'Month 1: Introduction, communication assessment & areas to improve · Month 2: Targeted improvement, redefining skills & presentability · Month 3: Attire, choice of words, decorum & mannerisms',
    },
    {
      feature: 'Included Items',
      courseA: 'Memento and certificate',
      courseB: 'Memento and completion certificate',
    },
    {
      feature: 'Fee (Offline Payment)',
      courseA: crashCourse.price,
      courseB: personalityCourse.price,
      highlight: true,
    },
  ];

  return (
    <div className="bg-white border border-hairline overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[680px]">
          <thead>
            <tr className="bg-charcoal text-ivory border-b border-charcoal">
              <th
                scope="col"
                className="py-5 px-6 text-xs font-mono uppercase tracking-[0.16em] text-bronze w-1/4"
              >
                Specification
              </th>
              <th scope="col" className="py-5 px-6 w-[37.5%] border-l border-white/15">
                <span className="block font-mono text-[11px] uppercase tracking-[0.15em] text-bronze">
                  {crashCourse.code}
                </span>
                <span className="font-editorial text-xl font-normal text-ivory mt-1 block">
                  {crashCourse.title}
                </span>
              </th>
              <th scope="col" className="py-5 px-6 w-[37.5%] border-l border-white/15">
                <span className="block font-mono text-[11px] uppercase tracking-[0.15em] text-bronze">
                  {personalityCourse.code}
                </span>
                <span className="font-editorial text-xl font-normal text-ivory mt-1 block">
                  {personalityCourse.title}
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-hairline text-sm">
            {comparisonRows.map((row) => (
              <tr
                key={row.feature}
                className={row.highlight ? 'bg-ivory/70 font-medium' : 'hover:bg-ivory/30 transition-colors'}
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-charcoal align-top bg-ivory/40"
                >
                  {row.feature}
                </th>
                <td className="py-4 px-6 text-stone align-top border-l border-hairline leading-relaxed">
                  {row.highlight ? (
                    <span className="font-editorial text-2xl text-charcoal font-medium">
                      {row.courseA}
                    </span>
                  ) : (
                    row.courseA
                  )}
                </td>
                <td className="py-4 px-6 text-stone align-top border-l border-hairline leading-relaxed">
                  {row.highlight ? (
                    <span className="font-editorial text-2xl text-charcoal font-medium">
                      {row.courseB}
                    </span>
                  ) : (
                    row.courseB
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-ivory border-t border-hairline">
              <td className="py-5 px-6 text-xs text-stone align-middle">
                Select a programme to prefill your registration form:
              </td>
              <td className="py-5 px-6 border-l border-hairline">
                <Link
                  to={`/register?programme=${encodeURIComponent(crashCourse.title)}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-charcoal text-ivory px-4 py-3 text-xs sm:text-sm font-medium hover:bg-bronze hover:text-white transition-colors"
                >
                  <span>Register for 3-Day Course</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </td>
              <td className="py-5 px-6 border-l border-hairline">
                <Link
                  to={`/register?programme=${encodeURIComponent(personalityCourse.title)}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-charcoal text-ivory px-4 py-3 text-xs sm:text-sm font-medium hover:bg-bronze hover:text-white transition-colors"
                >
                  <span>Register for 3-Month Course</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
