import { Phone, MessageSquare, ArrowUpRight } from 'lucide-react';

const CUSTOM_CONTACT_DISPLAY = '+91 821 732 8139';
const CUSTOM_PHONE_HREF = 'tel:+918217328139';
const CUSTOM_WHATSAPP_HREF =
  'https://wa.me/918217328139?text=' +
  encodeURIComponent(
    'Hello DUO team, I would like to discuss my requirements for a customised training course and request a tailored proposal.'
  );

export default function CustomisedCourseSection() {
  return (
    <div
      id="customised-course"
      className="bg-white border border-hairline p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 transition-colors hover:border-bronze/70"
    >
      <div className="space-y-3 max-w-2xl">
        <span className="inline-block font-mono text-xs uppercase tracking-[0.18em] text-bronze font-medium">
          TAILORED TRAINING · INDIVIDUALS & ORGANISATIONS
        </span>
        <h3 className="font-editorial text-2xl sm:text-3xl text-charcoal font-normal">
          Customised Course
        </h3>
        <p className="text-sm sm:text-base text-stone leading-relaxed">
          Alongside our structured programmes, DUO can customise training based on individual or
          organisational needs. Connect directly with our team to discuss your objectives,
          requirements, and preferred format to receive a customised proposal.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
        <a
          href={CUSTOM_WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 bg-charcoal text-ivory px-6 py-3.5 text-sm font-medium tracking-wide hover:bg-bronze hover:text-white transition-colors"
        >
          <MessageSquare className="w-4 h-4" aria-hidden="true" />
          <span>Discuss Your Requirements</span>
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </a>

        <a
          href={CUSTOM_PHONE_HREF}
          className="inline-flex items-center justify-center gap-2 bg-ivory/70 text-charcoal border border-hairline px-5 py-3.5 text-sm font-medium hover:border-bronze transition-colors"
        >
          <Phone className="w-4 h-4 text-bronze" aria-hidden="true" />
          <span>{CUSTOM_CONTACT_DISPLAY}</span>
        </a>
      </div>
    </div>
  );
}
