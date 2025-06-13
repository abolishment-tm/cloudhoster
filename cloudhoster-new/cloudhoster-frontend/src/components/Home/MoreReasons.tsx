import React from 'react';
import './MoreReasons.css';
import { useLanguage } from '../../contexts/LanguageContext';

import iconUptime from '../../assets/icons/99.99%uptime.svg';
import iconCloud from '../../assets/icons/cloud-platform.svg';
import iconBackup from '../../assets/icons/daily-backups.svg';
import iconSecurity from '../../assets/icons/enhanced-security.svg';
import iconDomain from '../../assets/icons/free-domain.svg';
import iconMoney from '../../assets/icons/45-moneyback.svg';

const features = [
  {
    icon: iconMoney,
    title: { id: 'Garansi 45 Hari', en: '45-Day Guarantee' },
    desc: {
      id: 'Coba layanan kami tanpa risiko \u2014 uang kembali dalam 45 hari jika tidak puas.',
      en: 'Try us risk-free with a 45-day money-back guarantee.',
    },
  },
  {
    icon: iconBackup,
    title: { id: 'Backup Harian', en: 'Daily Backups' },
    desc: {
      id: 'Data anda aman karena dibackup setiap hari dengan otomatis.',
      en: 'Your data is safe with our automatic daily backups.',
    },
  },
  {
    icon: iconUptime,
    title: { id: '99.99% Uptime', en: '99.99% Uptime Guarantee' },
    desc: {
      id: 'Jaminan uptime tinggi agar website Anda tetap online.',
      en: 'High uptime guarantee to keep your website always online.',
    },
  },
  {
    icon: iconSecurity,
    title: { id: 'Gratis SSL', en: 'Free SSL Certificate' },
    desc: {
      id: 'Semua paket dilengkapi sertifikat SSL gratis dari Let\u2019s Encrypt.',
      en: 'All plans include free SSL from Let’s Encrypt.',
    },
  },
  {
    icon: iconDomain,
    title: { id: 'Gratis Domain', en: 'Free Domain' },
    desc: {
      id: 'Dapatkan domain gratis dengan pembelian paket tahunan tertentu.',
      en: 'Get a free domain with selected annual hosting plans.',
    },
  },
  {
    icon: iconCloud,
    title: { id: '100 Cloud Platform', en: '100% Cloud Platform' },
    desc: {
      id: 'Platform cloud cepat dan aman untuk kebutuhan hosting Anda.',
      en: 'Fast and secure cloud platform for your hosting needs.',
    },
  },
];

const MoreReasons: React.FC = () => {
  const { language } = useLanguage();

  const subtitle = language === 'id'
    ? 'Selain Domain Gratis, Dukungan Pelanggan yang siap membantu anda 24/7, CloudHoster memberikan jaminan 45 hari uang Kembali dan 99.99% garansi uptime, semua itu sudah termasuk dalam semua paket hosting.'
    : 'In addition to Free Domain and 24/7 Support, CloudHoster includes a 45-day money-back guarantee and 99.99% uptime — all included with every hosting plan.';

  return (
    <section className="more-reasons-wrapper">
      <h2 className="more-reasons-title">
        {language === 'id'
          ? 'Lebih Lanjut Kenapa CloudHoster'
          : 'More Reasons to Choose CloudHoster'}
      </h2>
      <p className="more-reasons-subtitle">{subtitle}</p>

      <div className="more-reasons-grid">
        {features.map((item, index) => (
          <div key={index} className="reason-card">
            <img src={item.icon} alt={item.title[language]} className="reason-icon" />
            <h3 className="reason-title">{item.title[language]}</h3>
            <p className="reason-desc">{item.desc[language]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreReasons;
