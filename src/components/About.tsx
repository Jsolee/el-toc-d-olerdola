import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const reveals = gsap.utils.toArray<HTMLElement>('.about-reveal');
    reveals.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    gsap.from('.about-quote', {
      opacity: 0,
      x: -30,
      duration: 1.4,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-quote',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from('.about-quote-line', {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 1,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.about-quote',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    const counters = gsap.utils.toArray<HTMLElement>('.stat-number');
    counters.forEach((el) => {
      const target = parseInt(el.dataset.value || '0', 10);
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          el.textContent = `${Math.round(obj.val)}+`;
        },
      });
    });

    gsap.from('.stat-item', {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.stat-container',
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from('.about-ornament', {
      scaleX: 0,
      duration: 1.4,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.about-ornament',
        start: 'top 92%',
        toggleActions: 'play none none none',
      },
    });
  }, { scope: containerRef });

  return (
    <section id="about" className="py-28 md:py-40 px-6 lg:px-12">
      <div ref={containerRef} className="max-w-6xl mx-auto">
        <div className="about-reveal flex items-center gap-4 mb-6">
          <span className="w-12 h-px bg-terra" />
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-terra">
            {t('about.tag')}
          </span>
        </div>

        <h2 className="about-reveal font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-warm-900 mb-16 tracking-tight leading-[1.05] max-w-3xl">
          {t('about.title')}
        </h2>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-20">
          <div className="md:col-span-5 space-y-6">
            <p className="about-reveal editorial-dropcap text-warm-600 leading-[1.8] text-[15px]">
              {t('about.p1')}
            </p>
            <p className="about-reveal text-warm-600 leading-[1.8] text-[15px]">
              {t('about.p2')}
            </p>
          </div>

          <div className="md:col-span-1" />

          <div className="md:col-span-6 flex flex-col justify-between">
            <p className="about-reveal text-warm-600 leading-[1.8] text-[15px] mb-8">
              {t('about.p3')}
            </p>

            <div className="about-quote relative pl-8 py-6 border-l-2 border-terra/30">
              <div className="about-quote-line absolute top-0 left-0 w-2 h-full bg-terra/10" style={{ transform: 'translateX(-2px)' }} />
              <p className="font-serif text-xl md:text-2xl text-warm-800 italic leading-relaxed">
                "Cada cop de bastó és un batec de la nostra terra."
              </p>
              <span className="block mt-3 text-[11px] tracking-[0.2em] uppercase text-warm-400">Dita popular</span>
            </div>
          </div>
        </div>

        <div className="about-ornament section-ornament mb-16">
          <span className="text-warm-400 text-xs">&#9830;</span>
        </div>

        <div className="stat-container grid grid-cols-3 gap-6 md:gap-12">
          {[
            { key: 'stat1', value: 50 },
            { key: 'stat2', value: 30 },
            { key: 'stat3', value: 20 },
          ].map(({ key, value }) => (
            <div key={key} className="stat-item text-center md:text-left">
              <div
                className="stat-number font-serif text-[clamp(2.5rem,5vw,4rem)] font-bold text-terra mb-1 tracking-tight"
                data-value={value}
              >
                0+
              </div>
              <div className="text-[13px] text-warm-500 font-light">{t(`about.${key}.label`)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
