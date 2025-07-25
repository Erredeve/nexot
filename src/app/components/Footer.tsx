'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { translations, setLanguage } = useLanguage();
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">{translations.footer.company.name}</h3>
            <p className="text-blue-100 mb-4">
              {translations.footer.company.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{translations.footer.links.title}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/politica-privacidade" className="text-blue-100 hover:text-orange-500 transition-colors">
                  {translations.footer.links.privacy}
                </Link>
              </li>
              <li>
                <Link href="/termos-servico" className="text-blue-100 hover:text-orange-500 transition-colors">
                  {translations.footer.links.terms}
                </Link>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{translations.footer.languages.title}</h4>
            <ul className="space-y-2">
              {[
                { code: 'PT-BR', name: 'Português (BR)', flag: '🇧🇷' },
                { code: 'EN', name: 'English', flag: '🇺🇸' },
                { code: 'ES', name: 'Español', flag: '🇪🇸' }
              ].map((lang) => (
                <li key={lang.code}>
                  <button
                    onClick={() => setLanguage(lang.code)}
                    className="text-blue-100 hover:text-orange-500 transition-colors flex items-center space-x-2"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {translations.footer.company.name}. {translations.footer.copyright}
          </p>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-orange-500 transition-colors"
            >
              {translations.footer.social}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
