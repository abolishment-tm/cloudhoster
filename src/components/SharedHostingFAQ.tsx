import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { faqSharedHosting } from '../data/faqSharedHosting';

// Import ikon dari /src/assets/icons/
import IconCpanel from '../assets/icons/cpanel-access.svg';
import IconCDN from '../assets/icons/free-cdn.svg';
import IconDomain from '../assets/icons/free-domain.svg';
import IconBackup from '../assets/icons/backups.svg'; // renamed dari daily-backup.svg
import IconOneClick from '../assets/icons/one-click-install.svg';
import IconUptime from '../assets/icons/uptime-99.svg';

const SharedHostingFAQ: React.FC = () => {
  const { language } = useLanguage();
  const faqs = faqSharedHosting[language];

  const features = [
    { icon: IconCpanel, label: language === 'id' ? 'Akses cPanel Terbaru' : 'Latest cPanel Access' },
    { icon: IconCDN, label: language === 'id' ? 'Gratis CDN' : 'Free CDN' },
    { icon: IconDomain, label: language === 'id' ? 'Gratis Domain' : 'Free Domain' },
    { icon: IconBackup, label: language === 'id' ? 'Backup Harian' : 'Daily Backup' },
    { icon: IconOneClick, label: language === 'id' ? '1 Klik Install' : '1-Click Install' },
    { icon: IconUptime, label: language === 'id' ? '99.9% Uptime' : '99.9% Uptime' },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">
        
        {/* KIRI - FAQ */}
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title">
            {language === 'id' ? 'Pertanyaan Umum' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-5 w-full mt-4 text-left">
            {faqs.map((faq, index) => (
              <details key={index} className="group border-b border-gray-200 py-4">
                <summary className="cursor-pointer text-lg font-semibold text-[#2B1F51] flex justify-between items-center group">
                  {faq.question}
                  <span className="w-6 h-6 flex items-center justify-center rounded-sm bg-gray-200 text-[#2B1F51] font-bold transition-all duration-300 group-open:bg-[#F67A3C] group-open:text-white">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">-</span>
                  </span>
                </summary>
                <div className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* KANAN - Fitur Shared Hosting */}
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title">
            {language === 'id' ? 'Fitur Shared Hosting' : 'Shared Hosting Features'}
          </h2>
          <p className="section-subtitle max-w-sm">
            {language === 'id'
              ? 'Manfaat unggulan yang Anda dapatkan dengan setiap paket.'
              : 'Essential benefits included with every plan.'}
          </p>
          <div className="grid grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-[88px] h-[88px] mb-4"
                />
                <p className="text-[#2B1F51] font-semibold text-sm leading-5">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SharedHostingFAQ;
