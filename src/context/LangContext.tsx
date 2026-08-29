import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { content, type Lang, type Dict } from '../data/content';

interface LangContextValue {
  lang: Lang;
  dict: Dict;
  toggle: () => void;
  isRtl: boolean;
}

const LangContext = createContext<LangContextValue | null>(null);

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const saved = window.localStorage.getItem('lang');
  if (saved === 'ar' || saved === 'en') return saved;
  return window.navigator.language?.toLowerCase().startsWith('ar') ? 'ar' : 'en';
}

const titles: Record<Lang, string> = {
  en: 'Mohammed Almomani — Full-Stack Developer & FiveM Engineer',
  ar: 'محمد المومني — مطور ويب متكامل ومهندس FiveM',
};

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);
  const isRtl = lang === 'ar';

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.title = titles[lang];
    window.localStorage.setItem('lang', lang);
  }, [lang, isRtl]);

  const toggle = () => setLang((l) => (l === 'en' ? 'ar' : 'en'));

  return (
    <LangContext.Provider value={{ lang, dict: content[lang], toggle, isRtl }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
