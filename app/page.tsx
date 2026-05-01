import {
  ArrowRight,
  Mail,
  Lock,
  Briefcase,
  TrendingUp,
  MapPin,
} from 'lucide-react';
import type { ReactNode } from 'react';

function UseCaseItem({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <li className='flex items-center gap-2 border-l border-neutral-200 py-2 pl-3 text-sm text-neutral-700'>
      <span className='text-amber-700'>{icon}</span>
      <span>{label}</span>
    </li>
  );
}

export default function Home() {
  return (
    <div className='min-h-screen w-full bg-stone-50 text-neutral-950 selection:bg-amber-200 selection:text-neutral-950 font-sans flex flex-col'>
      <main className='mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-5 py-12 sm:px-8'>
        <div className='mb-12 flex flex-col gap-3 border-b border-neutral-200 pb-5 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between'>
          <p>mishwari.com is available</p>
          <div className='inline-flex items-center gap-2 text-neutral-500'>
            <Lock size={12} />
            <span>Secure transfer available via Escrow.com</span>
          </div>
        </div>

        <section className='max-w-2xl'>
          <h1 className='mb-3 text-5xl font-semibold text-neutral-950 sm:text-6xl'>
            mishwari.com
          </h1>
          <p
            className='mb-6 text-3xl font-medium text-amber-700 sm:text-4xl'
            dir='rtl'>
            مشواري
          </p>
          <p className='mb-3 max-w-xl text-xl leading-8 text-neutral-800'>
            A memorable Arabic name for mobility, delivery, hiring, or fintech
            products.
          </p>
          <p className='max-w-xl text-base leading-7 text-neutral-600' dir='rtl'>
            اسم عربي واضح ومناسب لتطبيقات النقل، التوصيل، التوظيف، والخدمات
            المالية.
          </p>
        </section>

        <section className='mt-10 grid gap-8 border-t border-neutral-200 pt-8 sm:grid-cols-[1fr_auto] sm:items-end'>
          <div>
            <p className='mb-3 text-xs font-semibold uppercase text-neutral-500'>
              Possible uses
            </p>
            <ul className='grid gap-1 sm:grid-cols-3'>
              <UseCaseItem icon={<MapPin size={15} />} label='Mobility' />
              <UseCaseItem icon={<Briefcase size={15} />} label='Hiring' />
              <UseCaseItem icon={<TrendingUp size={15} />} label='Fintech' />
            </ul>
          </div>

          <div className='space-y-3 sm:min-w-56'>
            <a
              href='mailto:contact@mishwari.com?subject=Inquiry About Mishwari.com'
              className='group inline-flex w-full items-center justify-center gap-2 rounded-md bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800'>
              <Mail size={16} />
              <span>Contact Owner</span>
              <ArrowRight
                size={16}
                className='transition-transform group-hover:translate-x-1'
              />
            </a>
            <p className='text-center text-xs text-neutral-500'>
              Serious inquiries welcome.
            </p>
            <a
              href='mailto:contact@mishwari.com?subject=Inquiry About Mishwari.com'
              className='block text-center text-xs font-medium text-neutral-700 underline-offset-4 hover:underline'>
              contact@mishwari.com
            </a>
          </div>
        </section>
      </main>

      <footer className='mx-auto w-full max-w-3xl px-5 pb-8 text-xs text-neutral-500 sm:px-8'>
        <div className='flex flex-col gap-3 border-t border-neutral-200 pt-5 sm:flex-row sm:items-center sm:justify-between'>
          <p>Mishwari means &quot;my journey&quot; or &quot;my errand&quot; in Arabic.</p>
          <p className='flex items-center gap-2'>
            <Mail size={13} />
            <span>
              Contact:{' '}
              <a
                href='mailto:contact@mishwari.com?subject=Inquiry About Mishwari.com'
                className='text-neutral-700 underline-offset-4 hover:underline'>
                contact@mishwari.com
              </a>
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
