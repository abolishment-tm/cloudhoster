import React from 'react';
import { useParams } from 'react-router-dom';
import { useContentStore } from '../stores/useContentStore';
import { useLanguage } from '../contexts/LanguageContext';

const LegalPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const { language } = useLanguage();
  const { contents } = useContentStore();

  const getContent = (key: string) => {
    return contents.find(
      content => 
        content.type === 'legal' && 
        content.key === key && 
        content.language === language
    )?.value || '';
  };

  const titles = {
    terms: {
      en: 'Terms and Conditions',
      id: 'Syarat dan Ketentuan'
    },
    privacy: {
      en: 'Privacy Policy',
      id: 'Kebijakan Privasi'
    },
    service: {
      en: 'Service Policy',
      id: 'Kebijakan Layanan'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-900">
            {titles[type as keyof typeof titles]?.[language]}
          </h1>
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: getContent(type || '') }}
          />
        </div>
      </div>
    </div>
  );
};

export default LegalPage;