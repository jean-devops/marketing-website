import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <Phone size={18} />
                <span>(+55) 0800 9696-9898</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Mail size={18} />
                  epic.figure.studio@gmail.com
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <MapPin size={18} />
                <span>Curitiba, PR - Brasil</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="/marketing-website"
                //target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="/marketing-website"
                //target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Horário de Atendimento</h3>
            <p className="text-gray-600 mb-2">Segunda a Segunda: 8h às 22h</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Epic Figure Studio. Todos os direitos reservados.
          </p>

          <div className="text-center mt-4">
            <Link to="/marketing-website/policies" className="text-blue-500 hover:underline">
              Políticas de Privacidade e Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
