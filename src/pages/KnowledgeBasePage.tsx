import React, { useState } from 'react';
import { Search, Book, FileText, HelpCircle, MessageSquare, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './KnowledgeBasePage.css';

const KnowledgeBasePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { language } = useLanguage();

  const texts = {
    en: {
      title: 'Knowledge Base',
      searchPlaceholder: 'Search for articles...',
      categories: [
        {
          icon: Book,
          title: 'Getting Started',
          description: 'Learn the basics of our hosting services',
          articles: [
            'How to create a hosting account',
            'Setting up your first website',
            'Managing your domains'
          ]
        },
        {
          icon: FileText,
          title: 'Tutorials',
          description: 'Step-by-step guides for common tasks',
          articles: [
            'Installing WordPress',
            'Setting up email accounts',
            'Managing databases'
          ]
        },
        {
          icon: HelpCircle,
          title: 'FAQs',
          description: 'Frequently asked questions',
          articles: [
            'Billing and payments',
            'Account management',
            'Technical issues'
          ]
        }
      ],
      contact: {
        title: 'Need More Help?',
        description: 'Our support team is available 24/7 to assist you',
        channels: [
          {
            icon: MessageSquare,
            title: 'Live Chat',
            description: 'Chat with our support team'
          },
          {
            icon: Phone,
            title: 'Phone Support',
            description: 'Call us anytime'
          }
        ]
      }
    },
    id: {
      title: 'Pusat Bantuan',
      searchPlaceholder: 'Cari artikel...',
      categories: [
        {
          icon: Book,
          title: 'Memulai',
          description: 'Pelajari dasar-dasar layanan hosting kami',
          articles: [
            'Cara membuat akun hosting',
            'Mengatur website pertama Anda',
            'Mengelola domain Anda'
          ]
        },
        {
          icon: FileText,
          title: 'Tutorial',
          description: 'Panduan langkah demi langkah untuk tugas umum',
          articles: [
            'Menginstal WordPress',
            'Mengatur akun email',
            'Mengelola database'
          ]
        },
        {
          icon: HelpCircle,
          title: 'FAQ',
          description: 'Pertanyaan yang sering diajukan',
          articles: [
            'Tagihan dan pembayaran',
            'Manajemen akun',
            'Masalah teknis'
          ]
        }
      ],
      contact: {
        title: 'Butuh Bantuan Lain?',
        description: 'Tim support kami tersedia 24/7 untuk membantu Anda',
        channels: [
          {
            icon: MessageSquare,
            title: 'Live Chat',
            description: 'Chat dengan tim support kami'
          },
          {
            icon: Phone,
            title: 'Dukungan Telepon',
            description: 'Hubungi kami kapan saja'
          }
        ]
      }
    }
  };

  const t = texts[language];

  return (
    <div className="knowledge-base">
      <div className="kb-hero">
        <div className="container mx-auto px-4">
          <h1 className="kb-title">{t.title}</h1>
          
          <div className="kb-search">
            <Search className="search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="search-input"
            />
          </div>
        </div>
      </div>

      <div className="kb-categories">
        <div className="container mx-auto px-4">
          <div className="categories-grid">
            {t.categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">
                  <category.icon size={32} />
                </div>
                <h2 className="category-title">{category.title}</h2>
                <p className="category-description">{category.description}</p>
                <ul className="article-list">
                  {category.articles.map((article, idx) => (
                    <li key={idx}>
                      <a href="#" className="article-link">{article}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="kb-contact">
        <div className="container mx-auto px-4">
          <h2 className="contact-title">{t.contact.title}</h2>
          <p className="contact-description">{t.contact.description}</p>
          
          <div className="contact-channels">
            {t.contact.channels.map((channel, index) => (
              <div key={index} className="channel-card">
                <div className="channel-icon">
                  <channel.icon size={32} />
                </div>
                <h3 className="channel-title">{channel.title}</h3>
                <p className="channel-description">{channel.description}</p>
                <button className="channel-button">Contact Us</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBasePage;