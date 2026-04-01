import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../context/LanguageContext';

const cardData = [
  { emoji: '⚔️', gradient: 'from-amber-50 to-orange-50' },
  { emoji: '🎭', gradient: 'from-warm-100 to-amber-50' },
  { emoji: '🎶', gradient: 'from-orange-50 to-yellow-50' },
  { emoji: '👶', gradient: 'from-amber-50 to-warm-100' },
  { emoji: '💃', gradient: 'from-yellow-50 to-amber-50' },
  { emoji: '🎪', gradient: 'from-warm-50 to-orange-50' },
];

function InstagramCard({ caption, emoji, gradient }: {
  index?: number; caption: string; emoji: string; gradient: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const onEnter = () => {
    gsap.to(cardRef.current, { scale: 0.97, duration: 0.4, ease: 'power2.out' });
    gsap.to(overlayRef.current, { opacity: 1, duration: 0.4 });
  };

  const onLeave = () => {
    gsap.to(cardRef.current, { scale: 1, duration: 0.4, ease: 'power2.out' });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 });
  };

  return (
    <div
      ref={cardRef}
      className="ig-card group relative aspect-square overflow-hidden cursor-pointer"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        <span className="text-5xl md:text-6xl inline-block transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          {emoji}
        </span>
      </div>

      <div
        ref={overlayRef}
        className="absolute inset-0 bg-warm-900/70 backdrop-blur-sm flex items-end p-5 opacity-0"
      >
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              </svg>
            </div>
            <span className="text-white/80 text-[11px] tracking-wide">@eltocdolerdola</span>
          </div>
          <p className="text-white/70 text-xs leading-relaxed font-light">{caption}</p>
        </div>
      </div>
    </div>
  );
}

export default function Instagram() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.ig-header', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.ig-header',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    ScrollTrigger.batch('.ig-card', {
      start: 'top 88%',
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 60,
          scale: 0.95,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          overwrite: true,
        });
      },
    });

    gsap.from('.ig-follow', {
      opacity: 0,
      y: 24,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.ig-follow',
        start: 'top 92%',
        toggleActions: 'play none none none',
      },
    });
  }, { scope: containerRef });

  return (
    <section id="instagram" className="py-28 md:py-40 px-6 lg:px-12 bg-warm-100/40">
      <div ref={containerRef} className="max-w-6xl mx-auto">
        <div className="ig-header flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="w-12 h-px bg-terra" />
              <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-terra">
                {t('instagram.tag')}
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-warm-900 tracking-tight leading-[1.05]">
              {t('instagram.title')}
            </h2>
          </div>
          <p className="text-warm-500 text-[15px] max-w-sm leading-relaxed font-light md:text-right">
            {t('instagram.description')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mb-14">
          {cardData.map((card, i) => (
            <InstagramCard
              key={i}
              index={i}
              caption={t(`instagram.post${i + 1}`)}
              emoji={card.emoji}
              gradient={card.gradient}
            />
          ))}
        </div>

        <div className="ig-follow text-center">
          <a
            href="https://www.instagram.com/eltocdolerdola"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-warm-900 text-cream text-[13px] font-medium tracking-wide no-underline hover:bg-terra transition-all duration-500 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            {t('instagram.follow')}
            <span className="inline-block group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
