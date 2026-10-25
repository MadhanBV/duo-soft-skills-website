import { Link } from 'react-router';
import {
  CheckCircle2,
  Phone,
  RotateCcw,
  ShieldCheck,
} from 'lucide-react';
import { RegistrationSuccessResponse } from '../services/registrationService';
import { FOUNDERS } from '../data/duoData';

interface SubmissionStatusProps {
  result: RegistrationSuccessResponse;
  onReset: () => void;
}

export default function SubmissionStatus({ result, onReset }: SubmissionStatusProps) {
  const { registrationId, submittedAt, submittedData } = result;

  return (
    <div
      role="status"
      aria-live="polite"
      className="bg-white border border-hairline p-6 sm:p-10 space-y-8"
    >
      {/* Primary Confirmation Header */}
      <div className="space-y-4 border-b border-hairline pb-6">
        <div className="inline-flex items-center gap-2.5 bg-ivory px-3.5 py-1.5 border border-hairline">
          <CheckCircle2 className="w-4 h-4 text-bronze" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-charcoal font-medium">
            Registration Submitted
          </span>
        </div>

        <h2 className="font-editorial text-2xl sm:text-3xl text-charcoal font-normal leading-snug">
          Thank you for registering with DUO. Your details have been submitted successfully. The DUO
          team can contact you using the details you provided.
        </h2>
      </div>

      {/* Registration Summary Record */}
      <div className="bg-ivory/70 border border-hairline p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-hairline pb-3">
          <span className="text-xs font-mono uppercase tracking-[0.15em] text-stone">
            Submitted Registration Summary
          </span>
          <span className="font-mono text-xs font-semibold text-charcoal bg-white px-2.5 py-1 border border-hairline">
            Ref: {registrationId}
          </span>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="text-xs font-mono uppercase tracking-wider text-stone">Full Name</dt>
            <dd className="mt-0.5 font-medium text-charcoal">{submittedData.fullName}</dd>
          </div>
          <div>
            <dt className="text-xs font-mono uppercase tracking-wider text-stone">Mobile Number</dt>
            <dd className="mt-0.5 font-medium text-charcoal">{submittedData.mobileNumber}</dd>
          </div>
          <div>
            <dt className="text-xs font-mono uppercase tracking-wider text-stone">
              Selected Programme
            </dt>
            <dd className="mt-0.5 font-medium text-charcoal">{submittedData.programme}</dd>
          </div>
          <div>
            <dt className="text-xs font-mono uppercase tracking-wider text-stone">
              Preferred Contact Method
            </dt>
            <dd className="mt-0.5 font-medium text-charcoal">{submittedData.preferredContact}</dd>
          </div>
          {submittedData.email && (
            <div>
              <dt className="text-xs font-mono uppercase tracking-wider text-stone">
                Email Address
              </dt>
              <dd className="mt-0.5 font-medium text-charcoal">{submittedData.email}</dd>
            </div>
          )}
          <div>
            <dt className="text-xs font-mono uppercase tracking-wider text-stone">Submitted At</dt>
            <dd className="mt-0.5 font-mono text-xs text-charcoal">{submittedAt}</dd>
          </div>
        </dl>
      </div>

      {/* Offline Payment Notice */}
      <div className="bg-ivory/50 border border-hairline p-5 flex items-start gap-3.5">
        <ShieldCheck className="w-5 h-5 text-bronze shrink-0 mt-0.5" aria-hidden="true" />
        <div className="space-y-1 text-sm">
          <p className="font-semibold text-charcoal">Offline Payment Process</p>
          <p className="text-stone leading-relaxed">
            No online payment is collected on this website. All fee payments are handled offline
            after the DUO team connects with you via your preferred contact method (
            {submittedData.preferredContact}).
          </p>
        </div>
      </div>

      {/* Direct Founder Contact Info */}
      <div className="border border-hairline p-5 sm:p-6 space-y-4 bg-white">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-bronze">
          <Phone className="w-4 h-4" aria-hidden="true" />
          <span>Direct Contact with DUO</span>
        </div>
        <p className="text-xs sm:text-sm text-stone leading-relaxed">
          If you wish to reach the founders directly regarding your registration:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {FOUNDERS.map((founder) => (
            <div key={founder.id} className="p-3.5 bg-ivory/60 border border-hairline text-xs space-y-1">
              <p className="font-semibold text-charcoal">{founder.name}</p>
              <p>
                <a href={founder.phoneHref} className="text-charcoal hover:text-bronze underline">
                  {founder.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={founder.emailHref} className="text-stone hover:text-charcoal underline">
                  {founder.email}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center justify-center gap-2 text-sm font-medium text-stone hover:text-charcoal border border-hairline px-5 py-3 transition-colors"
        >
          <RotateCcw className="w-4 h-4" aria-hidden="true" />
          <span>Submit Another Registration</span>
        </button>

        <Link
          to="/programmes"
          className="inline-flex items-center justify-center gap-2 bg-charcoal text-ivory px-6 py-3 text-sm font-medium hover:bg-bronze hover:text-white transition-colors"
        >
          <span>Return to Programmes</span>
        </Link>
      </div>
    </div>
  );
}
