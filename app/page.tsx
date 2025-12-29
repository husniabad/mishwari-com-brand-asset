import {
  ShieldCheck,
  ArrowRight,
  Mail,
  Globe,
  Lock,
  Briefcase,
  TrendingUp,
  MapPin,
} from 'lucide-react';

function UseCaseItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className='bg-neutral-900/40 border border-neutral-800 p-2 rounded-lg text-center flex flex-col items-center justify-center gap-1 text-neutral-400'>
      <div className='text-amber-500/80'>{icon}</div>
      <span className='text-[10px] font-medium'>{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className='min-h-screen w-full bg-neutral-950 text-white selection:bg-amber-500 selection:text-black font-sans flex flex-col items-center justify-between p-4 relative overflow-x-hidden'>
      {/* Background Ambience */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 fixed'>
        <div className='absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[100px]'></div>
        <div className='absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px]'></div>
      </div>

      {/* Spacer to push main content to center */}
      <div className='flex-1 flex items-center justify-center w-full z-10 my-4'>
        {/* MAIN CARD */}
        <main className='relative w-full max-w-4xl bg-neutral-900/60 backdrop-blur-xl border border-neutral-800 rounded-3xl p-6 md:p-10 shadow-2xl ring-1 ring-white/5'>
          {/* Header Badges */}
          <div className='flex flex-col sm:flex-row justify-between items-center mb-8 gap-3 opacity-90'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] md:text-xs font-bold uppercase tracking-widest'>
              <ShieldCheck size={12} />
              <span>Premium Asset</span>
            </div>
            <div className='inline-flex items-center gap-2 text-neutral-500 text-[10px] md:text-xs font-medium'>
              <Lock size={12} />
              <span>Secure Transfer via Escrow.com</span>
            </div>
          </div>

          {/* Hero Section */}
          <div className='text-center mb-10'>
            <h1 className='text-5xl md:text-7xl font-black tracking-tighter text-white mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-500'>
              mishwari.com
            </h1>
            <h2
              className='text-3xl md:text-5xl font-black text-amber-500 mb-4'
              dir='rtl'>
              مشواري
            </h2>
            <p className='text-neutral-300 text-lg font-light'>
              The definitive Arabic brand for{' '}
              <span className='text-white font-medium'>
                The Digital Economy
              </span>
              .
            </p>
            <p
              className='text-neutral-400 text-xs sm:text-sm mt-1'
              dir='rtl'>
              الاسم التجاري الأمثل لقطاعات النقل، الموارد البشرية، والتقنية
              المالية.
            </p>
          </div>

          {/* Action Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-end'>
            {/* Left: Use Cases */}
            <div className='space-y-3'>
              <div className='flex items-center gap-2 mb-2'>
                <span className='text-neutral-600 text-[10px] uppercase tracking-widest font-bold'>
                  Strategic Fit
                </span>
                <div className='h-px bg-neutral-800 flex-1'></div>
              </div>
              <div className='grid grid-cols-3 gap-2'>
                <UseCaseItem
                  icon={<MapPin size={14} />}
                  label='Mobility'
                />
                <UseCaseItem
                  icon={<Briefcase size={14} />}
                  label='Careers'
                />
                <UseCaseItem
                  icon={<TrendingUp size={14} />}
                  label='Fintech'
                />
              </div>
            </div>

            {/* Right: CTA */}
            <div className='space-y-3'>
              <a
                href='mailto:admin@yallabus.app?subject=Acquisition Inquiry: Mishwari.com'
                className='group w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-neutral-200 transition-all py-3 px-4 rounded-xl font-bold text-sm md:text-base'>
                <Mail size={16} />
                <span>Make an Offer</span>
                <ArrowRight
                  size={16}
                  className='group-hover:translate-x-1 transition-transform'
                />
              </a>
              <p className='text-center text-neutral-500 text-[10px]'>
                Accepting offers from established entities.
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* SEO FOOTER - Visible but Subtle */}
      <footer className='w-full max-w-4xl mx-auto z-10 pb-4 px-4'>
        <div className='border-t border-neutral-900 pt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-neutral-700'>
          {/* Trust Badge */}
          <div className='flex items-center gap-2 text-[10px] text-neutral-500'>
            <Globe size={10} />
            <span>
              Verified owner:{' '}
              <a
                href='https://yallabus.app'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-neutral-300 transition-colors'>
                YallaBus.app
              </a>
            </span>
          </div>

          {/* SEO TEXT: Small, Dark, Boring. Humans skip it, Google loves it. */}
          <div className='text-[10px] leading-relaxed text-neutral-500 max-w-lg text-justify md:text-right block'>
            <strong>About Mishwari:</strong> "Mishwari" (مشواري) translates to
            "My Journey" or "My Errand" in Arabic. It is a high-value keyword
            for ride-hailing, logistics, HR recruitment paths, and personal
            finance apps targeting the GCC (Saudi Arabia, UAE, Qatar) and MENA
            markets.
          </div>
        </div>
      </footer>
    </div>
  );
}
