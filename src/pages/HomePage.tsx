// src/pages/HomePage.tsx

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useContentStore } from '../stores/useContentStore';
import HeroSection from '../components/Hero/HeroSection';
import DataCenterSection from '../components/Sections/DataCenterSection'; // ? gunakan komponen tunggal
import './HomePage.css';

import SecurityIcon from '../assets/icons/enhanced-security.svg?url';
import BackupIcon from '../assets/icons/daily-backups.svg?url';
import PerformanceIcon from '../assets/icons/high-performance.svg?url';
import UptimeIcon from '../assets/icons/uptime.svg';

import SharedSvg from '../assets/icons/shared-hosting.svg?url';
import WPSvg from '../assets/icons/wordpress-hosting.svg?url';
import EmailSvg from '../assets/icons/email-hosting.svg?url';
import DedicatedSvg from '../assets/icons/dedicated-hosting.svg?url';

const HomePage: React.FC = () => {
  const { language } = useLanguage();
  const { contents, fetchContents, loading } = useContentStore();

  useEffect(() => {
    fetchContents();
  }, [fetchContents]);

  const getContent = (type: string, key: string) =>
    contents.find(c => c.type === type && c.key === key && c.language === language)?.value;

  const features = [
    { icon: SecurityIcon, title: getContent('features','security.title') || 'Enhanced Security', description: getContent('features','security.description') || 'Advanced security features to protect your website' },
    { icon: BackupIcon, title: getContent('features','backup.title') || 'Daily Backups', description: getContent('features','backup.description') || 'Automatic daily backups of your website' },
    { icon: PerformanceIcon, title: getContent('features','performance.title') || 'High Performance', description: getContent('features','performance.description') || 'Lightning-fast loading speeds with SSD storage' },
    { icon: UptimeIcon, title: getContent('features','reliability.title') || '99.9% Uptime', description: getContent('features','reliability.description') || 'Guaranteed uptime for your website' },
  ];

  const products = [
    { svg: SharedSvg, title: getContent('products','shared.title') || 'Shared Hosting', desc: getContent('products','shared.description') || 'Solusi hemat untuk memulai dan mengembangkan website Anda.', price: language==='id'?'35.000':'2.49', period: language==='id'?'/bln':'/mo', cta: getContent('products','shared.cta') || 'Mulai Sekarang', link:'/shared-hosting' },
    { svg: WPSvg, title: getContent('products','wordpress.title') || 'WordPress Hosting', desc: getContent('products','wordpress.description') || 'Ditenagai optimasi khusus untuk kecepatan dan keamanan WordPress.', price: language==='id'?'35.000':'2.49', period: language==='id'?'/bln':'/mo', cta: getContent('products','wordpress.cta') || 'Mulai Sekarang', link:'/wordpress-hosting' },
    { svg: DedicatedSvg, title: getContent('products','dedicated.title') || 'Dedicated Hosting', desc: getContent('products','dedicated.description') || 'Kinerja maksimal untuk aplikasi besar & traffic tinggi.', price: language==='id'?'159.000':'9.99', period: language==='id'?'/bln':'/mo', cta: getContent('products','dedicated.cta') || 'Mulai Sekarang', link:'/dedicated-hosting' },
    { svg: EmailSvg, title: getContent('products','email.title') || 'Email Hosting', desc: getContent('products','email.description') || 'Hosting email profesional untuk bisnis Anda dengan fitur canggih.', price: language==='id'?'29.000':'1.99', period: language==='id'?'/bln':'/mo', cta: getContent('products','email.cta') || 'Mulai Sekarang', link:'/email-hosting' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="home-page">
      <HeroSection />

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[50px] leading-[62px] font-extrabold text-[#2B1F51]">
              {getContent('features','section.title') || (language==='id'?'Kenapa Pilih Kami':'Why Choose Us')}
            </h2>
            <p className="text-[24px] leading-[40px] font-light text-[#524972] max-w-3xl mx-auto">
              {getContent('features','section.subtitle') || (language==='id'?'Rasakan keunggulan fitur hosting terbaik':'Experience the best hosting features for your website')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f,i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 mx-auto mb-6">
                  <img src={f.icon} alt={f.title} className="w-full h-full" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-gray-50 font-[AvertaStd]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {getContent('products','section.title') || (language==='id'?'Paket Hosting untuk Semua Kebutuhan':'Hosting Plans for Every Website')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getContent('products','section.subtitle') || (language==='id'?'Mulai dari shared hingga dedicated, semua ada':'From shared to dedicated, we’ve got you covered')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p,idx) => (
              <Link key={idx} to={p.link} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                <img src={p.svg} alt={p.title} className="w-full h-48 object-contain p-4" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
                  <p className="text-gray-600 mb-6 min-h-[60px]">{p.desc}</p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-2xl font-bold text-gray-900">{language==='id'?'Rp.':'$'}</span>
                    <span className="text-4xl font-bold text-gray-900">{p.price}</span>
                    <span className="text-gray-600 ml-2">{p.period}</span>
                  </div>
                  <button className="w-full py-3 px-6 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors duration-200">
                    {p.cta}
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ? Data Center (final version from component only) */}
      <DataCenterSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              {getContent('cta','title') || (language==='id'?'Siap Memulai?':'Ready to Get Started?')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {getContent('cta','description') || (language==='id'?'Luncurkan website Anda hari ini dengan solusi hosting andal kami':'Launch your website today with our reliable hosting solutions')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shared-hosting" className="inline-flex items-center justify-center px-8 py-4 bg-secondary hover:bg-secondary-dark text-white rounded-lg transition-colors duration-200 font-semibold">
                {getContent('cta','primary') || (language==='id'?'Mulai Sekarang':'Get Started Now')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/pricing" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200 font-semibold">
                {getContent('cta','secondary') || (language==='id'?'Lihat Paket':'View Plans')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
