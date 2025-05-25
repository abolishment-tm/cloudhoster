// src/pages/HomePage.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useContentStore } from '../stores/useContentStore';
import HeroSection from '../components/Hero/HeroSection';
import './HomePage.css';

// Feature icons (Kenapa Pilih Kami)
import SecurityIcon    from '../assets/icons/enhanced-security.svg?url';
import BackupIcon      from '../assets/icons/daily-backups.svg?url';
import PerformanceIcon from '../assets/icons/high-performance.svg?url';
import UptimeIcon      from '../assets/icons/uptime.svg?url';

// Product icons (Paket Hosting)
import SharedSvg    from '../assets/icons/shared-hosting.svg?url';
import WPSvg        from '../assets/icons/wordpress-hosting.svg?url';
import EmailSvg     from '../assets/icons/email-hosting.svg?url';
import DedicatedSvg from '../assets/icons/dedicated-hosting.svg?url';

const HomePage: React.FC = () => {
  const { language } = useLanguage();
  const { contents, fetchContents, loading } = useContentStore();

  useEffect(() => {
    fetchContents();
  }, [fetchContents]);

  const getContent = (type: string, key: string) =>
    contents.find(c => c.type === type && c.key === key && c.language === language)?.value;

  // ---- Kenapa Pilih Kami ----
  const features = [
    {
      icon: SecurityIcon,
      title: getContent('features','security.title') ||
             (language==='id' ? 'Keamanan Ditingkatkan' : 'Enhanced Security'),
      description: getContent('features','security.description') ||
             (language==='id'
               ? 'Fitur keamanan canggih untuk melindungi situs web Anda'
               : 'Advanced security features to protect your website'),
    },
    {
      icon: BackupIcon,
      title: getContent('features','backup.title') ||
             (language==='id' ? 'Cadangan Harian' : 'Daily Backups'),
      description: getContent('features','backup.description') ||
             (language==='id'
               ? 'Cadangan otomatis harian untuk situs web Anda'
               : 'Automatic daily backups of your website'),
    },
    {
      icon: PerformanceIcon,
      title: getContent('features','performance.title') ||
             (language==='id' ? 'Kinerja Tinggi' : 'High Performance'),
      description: getContent('features','performance.description') ||
             (language==='id'
               ? 'Kecepatan muat super cepat dengan penyimpanan SSD'
               : 'Lightning-fast loading speeds with SSD storage'),
    },
    {
      icon: UptimeIcon,
      title: getContent('features','reliability.title') ||
             (language==='id' ? '99,9% Waktu Aktif' : '99.9% Uptime'),
      description: getContent('features','reliability.description') ||
             (language==='id'
               ? 'Jaminan uptime untuk situs web Anda'
               : 'Guaranteed uptime for your website'),
    },
  ];

  // ---- Paket Hosting ----
  const products = [
    {
      svg: SharedSvg,
      title: getContent('products','shared.title') ||
             (language==='id' ? 'Shared Hosting' : 'Shared Hosting'),
      desc: getContent('products','shared.description') ||
            (language==='id'
              ? 'Solusi hemat untuk memulai dan mengembangkan website Anda.'
              : 'Cost-effective solution to start and grow your website.'),
      price: getContent('products','shared.price') ||
             (language==='id' ? '35.000' : '2.49'),
      period: language==='id' ? '/bln' : '/mo',
      cta: getContent('products','shared.cta') ||
           (language==='id' ? 'Mulai Sekarang' : 'Get Started'),
      link: '/shared-hosting',
    },
    {
      svg: WPSvg,
      title: getContent('products','wordpress.title') ||
             (language==='id' ? 'WordPress Hosting' : 'WordPress Hosting'),
      desc: getContent('products','wordpress.description') ||
            (language==='id'
              ? 'Ditenagai optimasi khusus untuk kecepatan dan keamanan WordPress.'
              : 'Optimized for lightning-fast and secure WordPress performance.'),
      price: getContent('products','wordpress.price') ||
             (language==='id' ? '35.000' : '2.49'),
      period: language==='id' ? '/bln' : '/mo',
      cta: getContent('products','wordpress.cta') ||
           (language==='id' ? 'Mulai Sekarang' : 'Get Started'),
      link: '/wordpress-hosting',
    },
    {
      svg: DedicatedSvg,
      title: getContent('products','dedicated.title') ||
             (language==='id' ? 'Dedicated Hosting' : 'Dedicated Hosting'),
      desc: getContent('products','dedicated.description') ||
            (language==='id'
              ? 'Kinerja maksimal untuk aplikasi besar & traffic tinggi.'
              : 'Maximum performance for large apps & high traffic.'),
      price: getContent('products','dedicated.price') ||
             (language==='id' ? '159.000' : '9.99'),
      period: language==='id' ? '/bln' : '/mo',
      cta: getContent('products','dedicated.cta') ||
           (language==='id' ? 'Mulai Sekarang' : 'Get Started'),
      link: '/dedicated-hosting',
    },
    {
      svg: EmailSvg,
      title: getContent('products','email.title') ||
             (language==='id' ? 'Email Hosting' : 'Email Hosting'),
      desc: getContent('products','email.description') ||
            (language==='id'
              ? 'Hosting email profesional untuk bisnis Anda dengan fitur canggih.'
              : 'Professional email hosting for your business with advanced features.'),
      price: getContent('products','email.price') ||
             (language==='id' ? '29.000' : '1.99'),
      period: language==='id' ? '/bln' : '/mo',
      cta: getContent('products','email.cta') ||
           (language==='id' ? 'Mulai Sekarang' : 'Get Started'),
      link: '/email-hosting',
    },
  ];

  // ---- Data Center Setup ----
  const markerColors: Record<string,string> = {
    jakarta:    'from-red-500 to-red-300',
    singapore:  'from-green-500 to-green-300',
    london:     'from-blue-500 to-blue-300',
    washington: 'from-yellow-500 to-yellow-300',
    newyork:    'from-purple-500 to-purple-300',
    silicon:    'from-indigo-500 to-indigo-300',
    dallas:     'from-pink-500 to-pink-300',
  };

  const dataCenters = [
    { key: 'jakarta',    label: language==='id' ? 'Jakarta'        : 'Jakarta' },
    { key: 'singapore',  label: language==='id' ? 'Singapura'      : 'Singapore' },
    { key: 'london',     label: language==='id' ? 'London'         : 'London' },
    { key: 'washington', label: language==='id' ? 'Washington'     : 'Washington' },
    { key: 'newyork',    label: language==='id' ? 'New York'       : 'New York' },
    { key: 'silicon',    label: language==='id' ? 'Silicon Valley' : 'Silicon Valley' },
    { key: 'dallas',     label: language==='id' ? 'Dallas'         : 'Dallas' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="home-page font-[AvertaStd]">
      <HeroSection />

      {/* Kenapa Pilih Kami */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-[50px] leading-[62px] font-extrabold text-[#2B1F51]">
            {getContent('features','section.title') ||
              (language==='id' ? 'Kenapa Pilih Kami' : 'Why Choose Us')}
          </h2>
          <p className="text-[24px] leading-[40px] font-light text-[#524972] max-w-3xl mx-auto">
            {getContent('features','section.subtitle') ||
              (language==='id'
                ? 'Rasakan keunggulan fitur hosting terbaik'
                : 'Experience the best hosting features for your website')}
          </p>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <img src={f.icon} alt="" className="w-full h-48 object-contain mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Paket Hosting */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {getContent('products','section.title') ||
              (language==='id'
                ? 'Paket Hosting untuk Semua Kebutuhan'
                : 'Hosting Plans for Every Website')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {getContent('products','section.subtitle') ||
              (language==='id'
                ? 'Mulai dari shared hingga dedicated, semua ada'
                : "From shared to dedicated, we've got you covered")}
          </p>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <img src={p.svg} alt={p.title} className="w-full h-48 object-contain p-4" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-gray-600 mb-6 min-h-[60px]">{p.desc}</p>
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-2xl font-bold text-gray-900">{language==='id'?'Rp.':'$'}</span>
                  <span className="text-4xl font-bold text-gray-900">{p.price}</span>
                  <span className="text-gray-600 ml-2">{p.period}</span>
                </div>
                <Link to={p.link} className="w-full inline-flex items-center justify-center py-3 px-6 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors duration-200 gap-2">
                  {p.cta}<ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lokasi Data Center Kami */}
      <section className="datacenter-section">
        <div className="organic-shape shape-1"></div>
        <div className="organic-shape shape-2"></div>
        <div className="organic-shape shape-3"></div>
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="ripple ripple-1"></div>
        <div className="ripple ripple-2"></div>

        <div className="datacenter-container">
          <h2 className="datacenter-title">
            {language==='id' ? 'Lokasi Data Center Kami' : 'Our Data Center Locations'}
          </h2>
          <p className="datacenter-subtitle">
            {language==='id'
              ? 'Jaringan server global untuk performa maksimal'
              : 'Global server network for peak performance'}
          </p>
          <div className="datacenter-map">
            {dataCenters.map(dc => (
              <div key={dc.key} className={`datacenter-marker marker-${dc.key}`}>
                <div className="marker-dot"></div>
                <div className="marker-label">{dc.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">
            {getContent('cta','title') || (language==='id'?'Siap Memulai?':'Ready to Get Started?')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {getContent('cta','description') ||
              (language==='id'
                ? 'Luncurkan website Anda hari ini dengan solusi hosting andal kami'
                : 'Launch your website today with our reliable hosting solutions')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shared-hosting" className="inline-flex items-center justify-center px-8 py-4 bg-secondary hover:bg-secondary-dark text-white rounded-lg transition-colors duration-200 font-semibold gap-2">
              {getContent('cta','primary') || (language==='id'?'Mulai Sekarang':'Get Started Now')}<ArrowRight className="w-5 h-5"/>
            </Link>
            <Link to="/pricing" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200 font-semibold gap-2">
              {getContent('cta','secondary') || (language==='id'?'Lihat Paket':'View Plans')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
