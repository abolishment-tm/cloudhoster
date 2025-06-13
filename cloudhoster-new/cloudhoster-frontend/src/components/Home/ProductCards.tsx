import React from 'react';
import './ProductCards.css';

import ShareHostingIcon from '../../assets/icons/share-hosting.svg';
import WordPressIcon from '../../assets/icons/wordpress-hosting.svg';
import DedicatedIcon from '../../assets/icons/dedicated-hosting.svg';
import EmailIcon from '../../assets/icons/email-hosting.svg';

import { useLanguage } from '../../contexts/LanguageContext';

const products = [
  {
    icon: ShareHostingIcon,
    title: {
      id: 'Shared Hosting',
      en: 'Shared Hosting',
    },
    description: {
      id: 'Solusi hemat untuk memulai dan mengembangkan website Anda.',
      en: 'Affordable solution to launch and grow your website.',
    },
    priceIDR: '35.000',
    priceUSD: '2.45',
    link: '#',
  },
  {
    icon: WordPressIcon,
    title: {
      id: 'WordPress Hosting',
      en: 'WordPress Hosting',
    },
    description: {
      id: 'Ditenagai optimasi khusus untuk kecepatan dan keamanan WordPress.',
      en: 'Powered by special optimization for speed and security.',
    },
    priceIDR: '35.000',
    priceUSD: '2.45',
    link: '#',
  },
  {
    icon: DedicatedIcon,
    title: {
      id: 'Dedicated Hosting',
      en: 'Dedicated Hosting',
    },
    description: {
      id: 'Hosting untuk Kinerja maksimal untuk aplikasi besar & traffic tinggi.',
      en: 'Maximum performance hosting for high-traffic applications.',
    },
    priceIDR: '159.000',
    priceUSD: '10.50',
    link: '#',
  },
  {
    icon: EmailIcon,
    title: {
      id: 'Email Hosting',
      en: 'Email Hosting',
    },
    description: {
      id: 'Hosting email untuk personal dan profesional untuk bisnis Anda dengan fitur canggih.',
      en: 'Email hosting for personal & business with advanced features.',
    },
    priceIDR: '40.000',
    priceUSD: '3.25',
    link: '#',
  },
];

const ProductCards: React.FC = () => {
  const { language } = useLanguage();

  const headline = {
    id: 'Butuh Web Hosting? Cloudhoster Aja, Paket Hosting untuk semua',
    en: 'Need Web Hosting? Cloudhoster is here \u2014 all hosting types available.',
  };

  const subtitle = {
    id: 'Mulai dari Shared, WordPress, Email sampai Dedicated, semuanya ada',
    en: 'From Shared, WordPress, Email to Dedicated \u2014 all available.',
  };

  return (
    <section className="product-section py-20 px-4">
      <div className="text-center mb-16">
        <h2 className="font-averta-extrabold text-[50px] leading-[62px] text-[#2B1F51]">
          {headline[language]}
        </h2>
        <p className="font-averta-light text-[24px] leading-[40px] text-[#524972] mt-4">
          {subtitle[language]}
        </p>
      </div>

      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="text-center">
            <img src={product.icon} alt={product.title[language]} className="mx-auto" />
            <h3 className="font-averta-bold text-[26px] leading-[34px] text-[#2B1F51] mt-2">
              {product.title[language]}
            </h3>
            <p className="font-averta-light text-[16px] leading-[26px] text-[#524972] mt-2 mb-4">
              {product.description[language]}
            </p>

            <div className="card-bottom">
              <div className="price-line">
                <span className="amount">
                  {language === 'id' ? `Rp.${product.priceIDR}` : `$${product.priceUSD}`}
                </span>
                <span className="per">{language === 'id' ? '/bln' : '/mo'}</span>
              </div>
              <a href={product.link} className="product-link">
                {language === 'id' ? 'Lihat Detail' : 'View Details'}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCards;
