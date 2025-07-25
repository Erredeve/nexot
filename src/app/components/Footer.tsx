'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Nexo Estudos Elétricos</h3>
            <p className="text-blue-100 mb-4">
              Consultoria especializada em estudos elétricos para o setor de energia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/politica-privacidade" className="text-blue-100 hover:text-orange-500 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-servico" className="text-blue-100 hover:text-orange-500 transition-colors">
                  Termos de Serviço
                </Link>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Idiomas</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-blue-100 hover:text-orange-500 transition-colors">
                  Português (BR)
                </button>
              </li>
              <li>
                <button className="text-blue-100 hover:text-orange-500 transition-colors">
                  English
                </button>
              </li>
              <li>
                <button className="text-blue-100 hover:text-orange-500 transition-colors">
                  Español
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Nexo Estudos Elétricos. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-orange-500 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
