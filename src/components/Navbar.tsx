import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const navLinks = ['home', 'about', 'instagram', 'contact'] as const;

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (mobileOpen) {
      gsap.fromTo(mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0, opacity: 0, duration: 0.3, ease: 'power3.in',
      });
    }
  }, [mobileOpen]);

  const handleClick = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      ref={navRef}
      className={`nav-enter fixed top-0 left-0 right-0 transition-all duration-700 ${
        scrolled
          ? 'bg-cream/85 backdrop-blur-2xl border-b border-warm-200/50'
          : 'bg-transparent'
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => handleClick('home')}
            className="group cursor-pointer bg-transparent border-none flex items-baseline gap-1.5"
          >
            <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-warm-900 group-hover:text-terra transition-colors duration-300">
              El Toc
            </span>
            <span className="font-serif text-sm md:text-base italic text-warm-500 group-hover:text-warm-700 transition-colors duration-300">
              d'Olèrdola
            </span>
          </button>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleClick(link)}
                className="relative text-[13px] font-normal tracking-wide text-warm-500 hover:text-warm-900 cursor-pointer bg-transparent border-none transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-terra hover:after:w-full after:transition-all after:duration-300"
              >
                {t(`nav.${link}`)}
              </button>
            ))}

            <div className="flex items-center ml-4">
              {(['ca', 'es'] as const).map((l, i) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 text-[11px] tracking-widest uppercase cursor-pointer border transition-all duration-300 ${
                    lang === l
                      ? 'bg-warm-900 text-cream border-warm-900'
                      : 'bg-transparent text-warm-400 border-warm-200 hover:text-warm-700 hover:border-warm-400'
                  } ${i === 0 ? 'rounded-l-sm' : 'rounded-r-sm border-l-0'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-warm-700 cursor-pointer bg-transparent border-none"
          >
            {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        className="md:hidden bg-cream/95 backdrop-blur-2xl border-t border-warm-200/50 overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleClick(link)}
              className="text-left text-sm text-warm-600 hover:text-warm-900 py-3 cursor-pointer bg-transparent border-none border-b border-warm-100 last:border-none transition-colors"
            >
              {t(`nav.${link}`)}
            </button>
          ))}
          <div className="flex items-center gap-2 pt-4 mt-2">
            {(['ca', 'es'] as const).map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setMobileOpen(false); }}
                className={`px-5 py-2 text-[11px] tracking-widest uppercase cursor-pointer border transition-all ${
                  lang === l
                    ? 'bg-warm-900 text-cream border-warm-900'
                    : 'bg-transparent text-warm-500 border-warm-200'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
