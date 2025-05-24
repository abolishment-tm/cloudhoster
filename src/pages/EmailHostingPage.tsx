import React from 'react';
import { Mail, Shield, Cloud, Users, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './EmailHostingPage.css';

const EmailHostingPage: React.FC = () => {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: 'Professional Email Hosting',
      plans: [
        {
          name: 'Basic Email',
          price: '15.000',
          priceUsd: '0.99',
          period: '/month',
          features: [
            '2 Email Accounts',
            '10 GB Storage',
            'Webmail Access',
            'Spam Protection',
            'Mobile Support'
          ]
        },
        {
          name: 'Business Email',
          price: '45.000',
          priceUsd: '2.99',
          period: '/month',
          popular: true,
          features: [
            '10 Email Accounts',
            '50 GB Storage',
            'Webmail Access',
            'Advanced Spam Protection',
            'Mobile Support',
            'Custom Domain',
            'Priority Support'
          ]
        },
        {
          name: 'Enterprise Email',
          price: '75.000',
          priceUsd: '4.99',
          period: '/month',
          features: [
            'Unlimited Email Accounts',
            '100 GB Storage',
            'Webmail Access',
            'Advanced Spam Protection',
            'Mobile Support',
            'Custom Domain',
            '24/7 Priority Support',
            'Email Archiving'
          ]
        }
      ],
      features: [
        {
          icon: Mail,
          title: 'Professional Email',
          description: 'Get a professional email address with your domain name'
        },
        {
          icon: Shield,
          title: 'Advanced Security',
          description: 'Protect your emails with advanced spam and virus protection'
        },
        {
          icon: Cloud,
          title: 'Cloud Storage',
          description: 'Access your emails anywhere with cloud storage'
        },
        {
          icon: Users,
          title: 'Team Collaboration',
          description: 'Collaborate with your team using shared calendars and contacts'
        },
        {
          icon: Clock,
          title: '24/7 Support',
          description: 'Get help anytime with our 24/7 support team'
        }
      ],
      cta: 'Get Started'
    },
    id: {
      title: 'Email Hosting Profesional',
      plans: [
        {
          name: 'Email Basic',
          price: '15.000',
          priceUsd: '0.99',
          period: '/bulan',
          features: [
            '2 Akun Email',
            '10 GB Penyimpanan',
            'Akses Webmail',
            'Proteksi Spam',
            'Dukungan Mobile'
          ]
        },
        {
          name: 'Email Bisnis',
          price: '45.000',
          priceUsd: '2.99',
          period: '/bulan',
          popular: true,
          features: [
            '10 Akun Email',
            '50 GB Penyimpanan',
            'Akses Webmail',
            'Proteksi Spam Lanjutan',
            'Dukungan Mobile',
            'Domain Kustom',
            'Dukungan Prioritas'
          ]
        },
        {
          name: 'Email Enterprise',
          price: '75.000',
          priceUsd: '4.99',
          period: '/bulan',
          features: [
            'Akun Email Tanpa Batas',
            '100 GB Penyimpanan',
            'Akses Webmail',
            'Proteksi Spam Lanjutan',
            'Dukungan Mobile',
            'Domain Kustom',
            'Dukungan Prioritas 24/7',
            'Pengarsipan Email'
          ]
        }
      ],
      features: [
        {
          icon: Mail,
          title: 'Email Profesional',
          description: 'Dapatkan alamat email profesional dengan nama domain Anda'
        },
        {
          icon: Shield,
          title: 'Keamanan Lanjutan',
          description: 'Lindungi email Anda dengan proteksi spam dan virus lanjutan'
        },
        {
          icon: Cloud,
          title: 'Penyimpanan Cloud',
          description: 'Akses email Anda di mana saja dengan penyimpanan cloud'
        },
        {
          icon: Users,
          title: 'Kolaborasi Tim',
          description: 'Berkolaborasi dengan tim menggunakan kalender dan kontak bersama'
        },
        {
          icon: Clock,
          title: 'Dukungan 24/7',
          description: 'Dapatkan bantuan kapan saja dengan tim dukungan 24/7 kami'
        }
      ],
      cta: 'Mulai Sekarang'
    }
  };

  const t = texts[language];

  return (
    <div className="email-hosting-page">
      <div className="email-hero">
        <div className="container mx-auto px-4">
          <h1 className="email-title">{t.title}</h1>
        </div>
      </div>

      <div className="email-plans">
        <div className="container mx-auto px-4">
          <div className="plans-grid">
            {t.plans.map((plan, index) => (
              <div key={index} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="currency">{language === 'id' ? 'Rp.' : 'USD'}</span>
                  <span className="amount">{language === 'id' ? plan.price : plan.priceUsd}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <ArrowRight size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="plan-cta">{t.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="email-features">
        <div className="container mx-auto px-4">
          <div className="features-grid">
            {t.features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <feature.icon size={32} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailHostingPage;