// File: src/components/Home/WhyCloudHoster.tsx
import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import supportIllustration from '../../assets/images/support-ticket-blue.svg';
import performanceIllustration from '../../assets/images/performance.svg';
import './WhyCloudHoster.css';

const WhyCloudHoster: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'support' | 'performance'>('support');
  const { language } = useLanguage();

  return (
    <section className="why-section">
      <h2 className="why-title">
        {language === 'id' ? 'Kenapa CloudHoster?' : 'Why Choose CloudHoster?'}
      </h2>

      <div className="why-tabs">
        <button
          className={`why-tab-button ${activeTab === 'support' ? 'active' : ''}`}
          onClick={() => setActiveTab('support')}
        >
          {language === 'id' ? 'Dukungan Layanan 24 Jam' : '24/7 Award-winning Support'}
        </button>
        <button
          className={`why-tab-button ${activeTab === 'performance' ? 'active' : ''}`}
          onClick={() => setActiveTab('performance')}
        >
          {language === 'id' ? 'Performa & Teknologi' : 'Performance & Technology'}
        </button>
      </div>

      <div className="why-grid">
        {activeTab === 'support' ? (
          <>
            <div className="why-text">
              <h3 className="support-title">
                {language === 'id'
                  ? 'Dukungan Layanan 24 Jam Sehari'
                  : 'Get struggle-free support when you need it'}
              </h3>
              <p className="support-description">
                {language === 'id'
                  ? 'Dengan pengalaman 12 tahun di bidang hosting, layanan pelanggan kami akan selalu tersedia 24 jam sehari'
                  : 'With over 20 years of experience in hosting, our team is here to help 24 hours a day.'}
              </p>

              <div className="support-point">
                <h3>
                  {language === 'id'
                    ? 'Dukungan yang Pro-aktif'
                    : 'Support that cares'}
                </h3>
                <p>
                  {language === 'id'
                    ? 'Layanan pelanggan kami akan membantu setiap permasalahan anda bahkan yang paling kompleks sekalipun'
                    : 'Our skilled and friendly support team will solve even the most complex technical issues that the other guys can’t.'}
                </p>
              </div>

              <div className="support-point">
                <h3>
                  {language === 'id'
                    ? 'Pemecahan masalah yang cepat dan langsung'
                    : 'Get Your Issue Solved Fast'}
                </h3>
                <p>
                  {language === 'id'
                    ? 'Pemecahan masalah langsung pada sumbernya tanpa Waktu menunggu, sehingga anda dapat terus fokus pada bisnis dan pekerjaan anda'
                    : 'Our team will solve your issue the first time around so you can get back to work fast.'}
                </p>
              </div>

              <div className="support-point">
                <h3>
                  {language === 'id'
                    ? 'Tanpa Waktu menunggu'
                    : 'Forget About Wait Times'}
                </h3>
                <p>
                  {language === 'id'
                    ? 'Tersedia Live Chat yang terintegrasi dengan AI Asisten, untuk tiket rata-rata Waktu dibalas adalah 15 menit'
                    : 'With instant live chat and first reply times of 10 minutes for tickets, you won’t have to wait long for answers or help.'}
                </p>
              </div>

              <a href="#" className="support-link group">
                {language === 'id' ? 'Lihat Detail' : 'Learn More'}
                <svg
                  className="inline-block w-[14px] h-[14px] ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 arrow-animate"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="why-image">
              <img src={supportIllustration} alt="Support Illustration" />
            </div>
          </>
        ) : (
          <>
            <div className="why-text">
              <h3 className="support-title">
                {language === 'id'
                  ? 'Infrastruktur & Teknologi Modern'
                  : 'Modern Infrastructure & Technology'}
              </h3>
              <p className="support-description">
                {language === 'id'
                  ? 'CloudHoster menggunakan LiteSpeed, NVMe SSD, server proaktif, dan optimasi WordPress.'
                  : 'CloudHoster uses LiteSpeed, NVMe SSDs, proactive servers, and WordPress optimization.'}
              </p>

              <div className="support-point">
                <h3>LiteSpeed Web Server</h3>
                <p>
                  {language === 'id'
                    ? 'Performa HTTP tercepat untuk website Anda.'
                    : 'Fastest HTTP performance for your website.'}
                </p>
              </div>

              <div className="support-point">
                <h3>NVMe SSD Storage</h3>
                <p>
                  {language === 'id'
                    ? 'Akses data super cepat dengan teknologi storage terbaru.'
                    : 'Ultra-fast access using the latest storage tech.'}
                </p>
              </div>

              <div className="support-point">
                <h3>Server Proaktif</h3>
                <p>
                  {language === 'id'
                    ? 'Monitoring otomatis & mitigasi sebelum terjadi gangguan.'
                    : 'Auto-monitoring & mitigation before problems occur.'}
                </p>
              </div>

              <div className="support-point">
                <h3>Optimasi WordPress</h3>
                <p>
                  {language === 'id'
                    ? 'Konfigurasi khusus untuk kinerja maksimal CMS Anda.'
                    : 'Special config to maximize CMS performance.'}
                </p>
              </div>
            </div>

            <div className="why-image">
              <img src={performanceIllustration} alt="Performance Illustration" />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default WhyCloudHoster;
