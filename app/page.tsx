import React from 'react';
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

export default function Home() {
  return (
    // h-screen + overflow-hidden ensures the "No Scroll" experience
    <div className='h-screen w-full bg-neutral-900 text-white selection:bg-amber-500 selection:text-black font-sans flex flex-col items-center justify-center p-4 relative overflow-hidden'>
      {/* Background Ambience (Unchanged) */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl'></div>
      </div>

      <main className='relative z-10 max-w-4xl w-full bg-neutral-800/50 backdrop-blur-xl border border-neutral-700 rounded-3xl p-8 shadow-2xl flex flex-col justify-between max-h-[90vh]'>
        {/* Header Badges: Added Escrow for Trust */}
        <div className='flex flex-col sm:flex-row justify-between items-center mb-6 gap-3 opacity-90'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium uppercase tracking-wider'>
            <ShieldCheck size={14} />
            <span>Premium Digital Asset</span>
          </div>
          <div className='inline-flex items-center gap-2 text-neutral-400 text-xs font-medium'>
            <Lock size={12} />
            <span>Secure Transfer via Escrow.com</span>
          </div>
        </div>

        {/* Domain Name - The Hero (Tightened Spacing) */}
        <div className='text-center mb-8'>
          <h1 className='text-5xl md:text-7xl font-bold tracking-tight text-white mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400'>
            mishwari.com
          </h1>
          <h2
            className='text-4xl md:text-5xl font-bold text-amber-500 mb-4'
            dir='rtl'>
            مشواري
          </h2>
          <p className='text-neutral-300 text-lg leading-relaxed max-w-2xl mx-auto'>
            The definitive Arabic brand for{' '}
            <span className='text-white font-medium'>The Digital Economy</span>.
          </p>
          <p
            className='text-neutral-400 text-sm mt-1'
            dir='rtl'>
            الاسم التجاري الأمثل لقطاعات النقل، الموارد البشرية، والتقنية
            المالية.
          </p>
        </div>

        {/* Strategic Grid: Split into Use Cases (Left) and Action (Right) */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-end'>
          {/* Left: Use Cases (Why they should buy it) */}
          <div className='space-y-3'>
            <div className='flex items-center gap-2 mb-2'>
              <div className='h-px bg-neutral-700 flex-1'></div>
              <span className='text-neutral-500 text-[10px] uppercase tracking-widest'>
                Strategic Fit
              </span>
              <div className='h-px bg-neutral-700 flex-1'></div>
            </div>

            {/* Micro-Cards for Use Cases */}
            <div className='grid grid-cols-3 gap-2'>
              <div className='bg-neutral-900/40 border border-neutral-700/50 p-3 rounded-xl text-center hover:border-amber-500/30 transition-colors'>
                <MapPin
                  size={16}
                  className='mx-auto text-amber-500 mb-2'
                />
                <span className='text-[10px] text-neutral-300 block'>
                  Mobility
                </span>
              </div>
              <div className='bg-neutral-900/40 border border-neutral-700/50 p-3 rounded-xl text-center hover:border-amber-500/30 transition-colors'>
                <Briefcase
                  size={16}
                  className='mx-auto text-amber-500 mb-2'
                />
                <span className='text-[10px] text-neutral-300 block'>
                  Recruitment
                </span>
              </div>
              <div className='bg-neutral-900/40 border border-neutral-700/50 p-3 rounded-xl text-center hover:border-amber-500/30 transition-colors'>
                <TrendingUp
                  size={16}
                  className='mx-auto text-amber-500 mb-2'
                />
                <span className='text-[10px] text-neutral-300 block'>
                  Fintech
                </span>
              </div>
            </div>
          </div>

          {/* Right: Action Area (Clean & Direct) */}
          <div className='space-y-3'>
            <a
              href='mailto:husni.abad.97@gmail.com?subject=Acquisition Inquiry: Mishwari.com'
              className='group w-full flex items-center justify-center gap-3 bg-white text-black hover:bg-neutral-200 transition-all py-3 px-6 rounded-xl font-bold text-base shadow-lg shadow-white/5'>
              <Mail size={18} />
              <span>Make an Offer / قدم عرضاً</span>
              <ArrowRight
                size={18}
                className='group-hover:translate-x-1 transition-transform'
              />
            </a>
            <div className='text-center'>
              <p className='text-neutral-500 text-xs'>
                Accepting offers from established entities.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='mt-8 pt-4 border-t border-neutral-800 flex items-center justify-center gap-2 text-neutral-600 text-xs text-center'>
          <Globe size={12} />
          <span>Verified Asset held by developers of</span>
          <span className='text-neutral-400 hover:text-white cursor-pointer transition-colors font-medium'>
            YallaBus.app
          </span>
        </div>
      </main>
    </div>
  );
}
