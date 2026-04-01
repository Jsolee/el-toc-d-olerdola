import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const reveals = gsap.utils.toArray<HTMLElement>('.contact-reveal');
    reveals.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    ScrollTrigger.batch('.contact-card', {
      start: 'top 88%',
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 50,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          overwrite: true,
        });
      },
    });
  }, { scope: containerRef });

  const contactItems = [
    {
      icon: <Mail size={18} strokeWidth={1.5} />,
      label: t('contact.email'),
      value: 'eltocdolerdola@gmail.com',
      href: 'mailto:eltocdolerdola@gmail.com',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      label: t('contact.instagram'),
      value: '@eltocdolerdola',
      href: 'https://www.instagram.com/eltocdolerdola',
    },
    {
      icon: <MapPin size={18} strokeWidth={1.5} />,
      label: t('contact.location'),
      value: t('contact.locationValue'),
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-28 md:py-40 px-6 lg:px-12">
      <div ref={containerRef} className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="contact-reveal flex items-center gap-4 mb-5">
              <span className="w-12 h-px bg-terra" />
              <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-terra">
                {t('contact.tag')}
              </span>
            </div>

            <h2 className="contact-reveal font-serif text-[clamp(2.5rem,5vw,4rem)] font-bold text-warm-900 mb-6 tracking-tight leading-[1.1]">
              {t('contact.title')}
            </h2>

            <p className="contact-reveal text-warm-500 text-[15px] leading-relaxed font-light">
              {t('contact.description')}
            </p>
          </div>

          <div className="md:col-span-1" />

          <div className="md:col-span-6 flex flex-col gap-4">
            {contactItems.map((item) => {
              const inner = (
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center border border-warm-200 text-warm-500 group-hover:border-terra/30 group-hover:text-terra transition-all duration-400">
                    {item.icon}
                  </div>
                  <div className="pt-0.5">
                    <div className="text-[11px] font-medium tracking-[0.2em] uppercase text-warm-400 mb-1">
                      {item.label}
                    </div>
                    <div className="text-warm-800 text-sm">{item.value}</div>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-card group block p-6 bg-cream border border-warm-200/60 no-underline hover:border-terra/20 hover:bg-terra/[0.02] transition-all duration-500"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={item.label}
                  className="contact-card group block p-6 bg-cream border border-warm-200/60"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
