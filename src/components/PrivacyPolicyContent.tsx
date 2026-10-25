import { Shield, Lock, AlertCircle, Phone, Mail, ExternalLink, FileSpreadsheet } from 'lucide-react';
import { FOUNDERS, BRAND_INFO } from '../data/duoData';

export default function PrivacyPolicyContent() {
  return (
    <div className="bg-white border border-hairline p-6 sm:p-10 lg:p-12 space-y-10">
      {/* Header */}
      <div className="border-b border-hairline pb-8 space-y-3">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-bronze">
          DUO · Data & Enquiry Transparency
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal">
          Privacy Policy
        </h1>
        <p className="text-base text-stone max-w-2xl leading-relaxed">
          This Privacy Policy explains how {BRAND_INFO.name} (“{BRAND_INFO.tagline}”) collects,
          uses, and stores information submitted through the registration form on this website.
        </p>
      </div>

      {/* Section 1: What Information We Collect */}
      <section className="space-y-4">
        <h2 className="font-editorial text-2xl text-charcoal font-normal">
          1. Information Collected by the Registration Form
        </h2>
        <p className="text-sm sm:text-base text-stone leading-relaxed">
          When you submit a programme registration or enquiry on the DUO website, we collect only
          the information needed to understand your programme interest and contact you:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-charcoal pt-1">
          <li className="p-3.5 bg-ivory/60 border border-hairline">
            <strong>Full Name</strong> (Required)
          </li>
          <li className="p-3.5 bg-ivory/60 border border-hairline">
            <strong>Mobile Number with Country Code</strong> (Required)
          </li>
          <li className="p-3.5 bg-ivory/60 border border-hairline">
            <strong>Email Address</strong> (Optional)
          </li>
          <li className="p-3.5 bg-ivory/60 border border-hairline">
            <strong>Selected Programme</strong> (Required: 3-Day Motivational Crash Course or 3-Month Personality Development Course)
          </li>
          <li className="p-3.5 bg-ivory/60 border border-hairline">
            <strong>Preferred Contact Method</strong> (Required: WhatsApp or Phone)
          </li>
          <li className="p-3.5 bg-ivory/60 border border-hairline">
            <strong>Questions or Additional Information</strong> (Optional message)
          </li>
          <li className="p-3.5 bg-ivory/60 border border-hairline sm:col-span-2">
            <strong>Privacy Consent Record & Submission Timestamp</strong> (Automatically recorded with a generated Registration ID)
          </li>
        </ul>
        <p className="text-xs sm:text-sm text-stone">
          We do not collect online payments, bank account numbers, credit/debit card details, or
          government identity numbers through this website.
        </p>
      </section>

      {/* Section 2: Why Information Is Collected & How It Is Used */}
      <section className="space-y-3 border-t border-hairline pt-8">
        <h2 className="font-editorial text-2xl text-charcoal font-normal">
          2. Why We Collect This Information & How It Is Used
        </h2>
        <p className="text-sm sm:text-base text-stone leading-relaxed">
          Registration information is collected and used by the DUO team strictly to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-stone leading-relaxed">
          <li>Record and manage programme enquiries and applicant registrations.</li>
          <li>
            Contact applicants via their chosen contact method (WhatsApp or phone, and email where
            supplied) regarding programme participation and offline fee arrangements.
          </li>
          <li>Respond to questions shared in the optional message field.</li>
        </ul>
      </section>

      {/* Section 3: How Registration Records Are Stored */}
      <section className="space-y-4 border-t border-hairline pt-8">
        <div className="flex items-center gap-2.5">
          <Lock className="w-5 h-5 text-bronze shrink-0" aria-hidden="true" />
          <h2 className="font-editorial text-2xl text-charcoal font-normal">
            3. Storage in a Restricted-Access Google Sheet
          </h2>
        </div>
        <p className="text-sm sm:text-base text-stone leading-relaxed">
          Submitted registration records are transmitted via a Google Apps Script web endpoint and
          stored in a private, restricted-access Google Sheet managed by the DUO team.
        </p>
        <div className="bg-ivory/70 border border-hairline p-4 flex items-start gap-3 text-xs sm:text-sm text-stone">
          <FileSpreadsheet className="w-5 h-5 text-bronze shrink-0 mt-0.5" aria-hidden="true" />
          <p className="leading-relaxed">
            Registration records are never displayed publicly on this website, and public read
            access to the registration spreadsheet is disabled. Only authorised DUO team members
            can view or export registration records.
          </p>
        </div>
      </section>

      {/* Section 4: Guidance on Optional Message Field */}
      <section className="space-y-3 border-t border-hairline pt-8">
        <div className="flex items-center gap-2.5">
          <AlertCircle className="w-5 h-5 text-bronze shrink-0" aria-hidden="true" />
          <h2 className="font-editorial text-2xl text-charcoal font-normal">
            4. Guidance on Optional Messages
          </h2>
        </div>
        <p className="text-sm sm:text-base text-stone leading-relaxed">
          Applicants should <strong className="text-charcoal">not</strong> submit sensitive personal
          information (such as financial details, passwords, government identification numbers, or
          confidential medical details) in the optional “Questions or additional information” field.
        </p>
      </section>

      {/* Section 5: Items Pending Team Policy Approval */}
      <section className="space-y-3 border-t border-hairline pt-8">
        <div className="flex items-center gap-2.5">
          <Shield className="w-5 h-5 text-bronze shrink-0" aria-hidden="true" />
          <h2 className="font-editorial text-2xl text-charcoal font-normal">
            5. Policy Details Subject to DUO Team Review
          </h2>
        </div>
        <div className="bg-bronze-light border-l-2 border-bronze p-4 text-xs sm:text-sm text-charcoal space-y-1.5">
          <p className="font-semibold">Note on Additional Policy Terms (Requires DUO Team Approval):</p>
          <p className="text-stone leading-relaxed">
            Specific data-retention periods, record deletion schedules, and any formal legal or
            jurisdictional notices are reserved for review and confirmation by the DUO founders
            before publication.
          </p>
        </div>
      </section>

      {/* Section 6: How to Contact DUO with Privacy Questions */}
      <section className="space-y-4 border-t border-hairline pt-8">
        <h2 className="font-editorial text-2xl text-charcoal font-normal">
          6. Contact DUO for Privacy Questions or Requests
        </h2>
        <p className="text-sm sm:text-base text-stone leading-relaxed">
          If you have any questions about this Privacy Policy, or if you wish to review, update, or
          request removal of the registration details you submitted, please contact the DUO founders
          directly using the details below:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {FOUNDERS.map((founder) => (
            <div key={founder.id} className="bg-ivory/60 border border-hairline p-5 space-y-2.5">
              <p className="font-editorial text-xl text-charcoal">{founder.name}</p>
              <p className="text-xs text-stone">{founder.headline}</p>
              <div className="space-y-1.5 pt-1 text-sm">
                <a
                  href={founder.phoneHref}
                  className="flex items-center gap-2 text-charcoal hover:text-bronze font-medium w-fit"
                >
                  <Phone className="w-4 h-4 text-bronze" aria-hidden="true" />
                  <span>{founder.phoneDisplay}</span>
                </a>
                <a
                  href={founder.emailHref}
                  className="flex items-center gap-2 text-charcoal hover:text-bronze font-medium w-fit"
                >
                  <Mail className="w-4 h-4 text-bronze" aria-hidden="true" />
                  <span>{founder.email}</span>
                </a>
                {founder.linkedInUrl && (
                  <a
                    href={founder.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-charcoal hover:text-bronze font-medium w-fit"
                  >
                    <ExternalLink className="w-4 h-4 text-bronze" aria-hidden="true" />
                    <span>{founder.linkedInLabel}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-stone pt-2">
          Location: {BRAND_INFO.location}
        </p>
      </section>
    </div>
  );
}
