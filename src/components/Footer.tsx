import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.footer-content', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 95%',
        toggleActions: 'play none none none',
      },
    });
  }, { scope: containerRef });

  return (
    <footer ref={containerRef} className="border-t border-warm-200/60 bg-cream">
      <div className="footer-content max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-baseline gap-1.5 mb-2">
              <span className="font-serif text-xl font-bold text-warm-900">El Toc</span>
              <span className="font-serif text-sm italic text-warm-500">d'Olèrdola</span>
            </div>
            <p className="text-[13px] text-warm-400 italic font-light">
              {t('footer.tradition')}
            </p>
          </div>

          <a
            href="https://www.instagram.com/eltocdolerdola"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center border border-warm-200 text-warm-500 hover:border-terra/30 hover:text-terra hover:scale-105 active:scale-95 transition-all duration-300"
            aria-label="Instagram"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </div>

        <div className="mt-12 pt-6 border-t border-warm-200/40">
          <p className="text-[11px] text-warm-400 tracking-wide">
            &copy; {new Date().getFullYear()} Ball de Bastons d'Ol&egrave;rdola. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
