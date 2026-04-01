import { createContext, useContext, useState, type ReactNode } from 'react';

type Lang = 'ca' | 'es';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  ca: {
    'nav.home': 'Inici',
    'nav.about': 'Qui som',
    'nav.instagram': 'Instagram',
    'nav.contact': 'Contacte',

    'hero.subtitle': 'Ball de Bastons',
    'hero.title': "d'Olèrdola",
    'hero.description': 'Preservant la tradició del ball de bastons al Penedès des de fa generacions. Cultura, ritme i comunitat.',
    'hero.cta': 'Descobreix-nos',
    'hero.scroll': 'Desplaça\'t',

    'about.tag': 'Qui som',
    'about.title': 'Una tradició viva',
    'about.p1': 'El Ball de Bastons d\'Olèrdola és una de les expressions més autèntiques de la cultura popular catalana. Amb arrels que es remunten a segles enrere, aquesta dansa tradicional combina la força, la precisió i el ritme en un espectacle únic.',
    'about.p2': 'Els nostres bastoners i bastoneres mantenen viva la flama d\'aquesta tradició, actuant en festes majors, trobades de cultura popular i esdeveniments arreu de Catalunya. Cada cop de bastó ressona amb la història del nostre poble.',
    'about.p3': 'Som part del teixit cultural d\'Olèrdola i del Penedès, i treballem per transmetre aquesta passió a les noves generacions. Si vols formar part d\'aquesta família, ets benvingut!',
    'about.stat1.number': '+50',
    'about.stat1.label': 'Anys de tradició',
    'about.stat2.number': '+30',
    'about.stat2.label': 'Bastoners i bastoneres',
    'about.stat3.number': '+20',
    'about.stat3.label': 'Actuacions anuals',

    'instagram.tag': 'Segueix-nos',
    'instagram.title': 'El nostre dia a dia',
    'instagram.description': 'Segueix @eltocdolerdola a Instagram per veure els nostres assajos, actuacions i moments especials.',
    'instagram.follow': 'Segueix-nos a Instagram',
    'instagram.post1': 'Assaig setmanal amb els bastoners',
    'instagram.post2': 'Actuació a la Festa Major',
    'instagram.post3': 'Trobada de cultura popular',
    'instagram.post4': 'Els més petits aprenen la tradició',
    'instagram.post5': 'Ball de bastons al carrer',
    'instagram.post6': 'Cercavila per les festes',

    'contact.tag': 'Contacte',
    'contact.title': 'Vols saber-ne més?',
    'contact.description': 'Si vols unir-te al grup, contractar-nos per a un esdeveniment o simplement saber-ne més sobre el ball de bastons, no dubtis a contactar-nos.',
    'contact.email': 'Correu electrònic',
    'contact.instagram': 'Instagram',
    'contact.location': 'Ubicació',
    'contact.locationValue': 'Olèrdola, Alt Penedès',

    'footer.rights': 'Tots els drets reservats.',
    'footer.tradition': 'Fent vibrar la tradició, cop a cop.',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Quiénes somos',
    'nav.instagram': 'Instagram',
    'nav.contact': 'Contacto',

    'hero.subtitle': 'Ball de Bastons',
    'hero.title': "d'Olèrdola",
    'hero.description': 'Preservando la tradición del ball de bastons en el Penedès desde hace generaciones. Cultura, ritmo y comunidad.',
    'hero.cta': 'Descúbrenos',
    'hero.scroll': 'Desplázate',

    'about.tag': 'Quiénes somos',
    'about.title': 'Una tradición viva',
    'about.p1': 'El Ball de Bastons d\'Olèrdola es una de las expresiones más auténticas de la cultura popular catalana. Con raíces que se remontan a siglos atrás, esta danza tradicional combina la fuerza, la precisión y el ritmo en un espectáculo único.',
    'about.p2': 'Nuestros bastoners y bastoneres mantienen viva la llama de esta tradición, actuando en fiestas mayores, encuentros de cultura popular y eventos en toda Cataluña. Cada golpe de bastón resuena con la historia de nuestro pueblo.',
    'about.p3': 'Somos parte del tejido cultural de Olèrdola y del Penedès, y trabajamos para transmitir esta pasión a las nuevas generaciones. Si quieres formar parte de esta familia, ¡eres bienvenido!',
    'about.stat1.number': '+50',
    'about.stat1.label': 'Años de tradición',
    'about.stat2.number': '+30',
    'about.stat2.label': 'Bastoners y bastoneres',
    'about.stat3.number': '+20',
    'about.stat3.label': 'Actuaciones anuales',

    'instagram.tag': 'Síguenos',
    'instagram.title': 'Nuestro día a día',
    'instagram.description': 'Sigue @eltocdolerdola en Instagram para ver nuestros ensayos, actuaciones y momentos especiales.',
    'instagram.follow': 'Síguenos en Instagram',
    'instagram.post1': 'Ensayo semanal con los bastoners',
    'instagram.post2': 'Actuación en la Fiesta Mayor',
    'instagram.post3': 'Encuentro de cultura popular',
    'instagram.post4': 'Los más pequeños aprenden la tradición',
    'instagram.post5': 'Ball de bastons en la calle',
    'instagram.post6': 'Cercavila por las fiestas',

    'contact.tag': 'Contacto',
    'contact.title': '¿Quieres saber más?',
    'contact.description': 'Si quieres unirte al grupo, contratarnos para un evento o simplemente saber más sobre el ball de bastons, no dudes en contactarnos.',
    'contact.email': 'Correo electrónico',
    'contact.instagram': 'Instagram',
    'contact.location': 'Ubicación',
    'contact.locationValue': 'Olèrdola, Alt Penedès',

    'footer.rights': 'Todos los derechos reservados.',
    'footer.tradition': 'Haciendo vibrar la tradición, golpe a golpe.',
  },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ca');

  const t = (key: string) => translations[lang][key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
