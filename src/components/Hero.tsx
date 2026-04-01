import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.6 });

    tl.from('.hero-eyebrow', {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power3.out',
    })
    .from('.hero-letter', {
      opacity: 0,
      y: 120,
      rotateX: 90,
      stagger: 0.025,
      duration: 0.9,
      ease: 'back.out(1.4)',
    }, '-=0.5')
    .from('.hero-line', {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 1.2,
      ease: 'power3.inOut',
    }, '-=0.3')
    .from('.hero-description', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out',
    }, '-=0.6')
    .from('.hero-cta', {
      opacity: 0,
      y: 24,
      stagger: 0.12,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.5')
    .from('.hero-scroll-hint', {
      opacity: 0,
      duration: 1.2,
    }, '-=0.3');

    gsap.to('.hero-float-1', {
      y: -18,
      x: 10,
      rotation: 2,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to('.hero-float-2', {
      y: 14,
      x: -8,
      rotation: -1.5,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to('.hero-content', {
      y: '20%',
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    });

    gsap.to('.hero-scroll-hint', {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1.6,
      ease: 'sine.inOut',
    });
  }, { scope: containerRef });

  const subtitle = t('hero.subtitle');
  const title = t('hero.title');

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="hero-float-1 absolute top-[15%] right-[10%] w-64 h-64 rounded-full bg-terra/[0.04] blur-3xl" />
      <div className="hero-float-2 absolute bottom-[20%] left-[8%] w-80 h-80 rounded-full bg-ochre/[0.05] blur-3xl" />

      <div className="hero-content relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="hero-eyebrow mb-8">
          <span className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] uppercase text-warm-500">
            <span className="w-8 h-px bg-warm-400" />
            Cultura Popular Catalana
            <span className="w-8 h-px bg-warm-400" />
          </span>
        </div>

        <div className="overflow-hidden mb-1" style={{ perspective: '800px' }}>
          <div className="flex justify-center flex-wrap gap-x-[0.04em]">
            {subtitle.split('').map((char, i) => (
              <span
                key={`sub-${i}`}
                className="hero-letter font-serif text-[clamp(3rem,8vw,7rem)] font-black text-warm-900 tracking-tighter inline-block leading-[0.9]"
                style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden mb-6" style={{ perspective: '800px' }}>
          <div className="flex justify-center flex-wrap gap-x-[0.04em]">
            {title.split('').map((char, i) => (
              <span
                key={`title-${i}`}
                className="hero-letter font-serif text-[clamp(3rem,8vw,7rem)] font-black text-terra tracking-tighter inline-block leading-[0.9] italic"
                style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-line w-24 h-px bg-terra/40 mx-auto mb-8" />

        <p className="hero-description text-warm-500 text-base md:text-lg max-w-md mx-auto leading-relaxed mb-12 font-light">
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#about"
            className="hero-cta group inline-flex items-center gap-3 px-10 py-4 bg-warm-900 text-cream text-[13px] font-medium tracking-wide no-underline hover:bg-terra transition-all duration-500 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            {t('hero.cta')}
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
          </a>
          <a
            href="https://www.instagram.com/eltocdolerdola"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta group inline-flex items-center gap-3 px-10 py-4 border border-warm-300 text-warm-600 text-[13px] font-medium tracking-wide no-underline hover:border-terra/40 hover:text-terra hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-500"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            @eltocdolerdola
          </a>
        </div>
      </div>

      <div className="hero-scroll-hint absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] text-warm-400 tracking-[0.25em] uppercase font-light">{t('hero.scroll')}</span>
        <ArrowDown size={14} className="text-warm-400" strokeWidth={1.5} />
      </div>
    </section>
  );
}
