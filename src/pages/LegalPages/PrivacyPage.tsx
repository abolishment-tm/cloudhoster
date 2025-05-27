import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './LegalPages.css';

const PrivacyPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: January 15, 2024',
      content: `
        <div class="legal-text">
          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Name and contact information</li>
            <li>Billing and payment details</li>
            <li>Account credentials</li>
            <li>Communication preferences</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Process your payments</li>
            <li>Send you important updates</li>
            <li>Improve our services</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul>
            <li>Service providers who assist in our operations</li>
            <li>Law enforcement when required by law</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or destruction.</p>

          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </div>
      `
    },
    id: {
      title: 'Kebijakan Privasi',
      lastUpdated: 'Terakhir diperbarui: 15 Januari 2024',
      content: `
        <div class="legal-text">
          <h2>1. Informasi yang Kami Kumpulkan</h2>
          <p>Kami mengumpulkan informasi yang Anda berikan langsung kepada kami, termasuk:</p>
          <ul>
            <li>Nama dan informasi kontak</li>
            <li>Detail penagihan dan pembayaran</li>
            <li>Kredensial akun</li>
            <li>Preferensi komunikasi</li>
          </ul>

          <h2>2. Bagaimana Kami Menggunakan Informasi Anda</h2>
          <p>Kami menggunakan informasi yang kami kumpulkan untuk:</p>
          <ul>
            <li>Menyediakan dan memelihara layanan kami</li>
            <li>Memproses pembayaran Anda</li>
            <li>Mengirim pembaruan penting</li>
            <li>Meningkatkan layanan kami</li>
          </ul>

          <h2>3. Berbagi Informasi</h2>
          <p>Kami tidak menjual informasi pribadi Anda. Kami mungkin membagikan informasi Anda dengan:</p>
          <ul>
            <li>Penyedia layanan yang membantu operasi kami</li>
            <li>Penegak hukum ketika diwajibkan oleh hukum</li>
          </ul>

          <h2>4. Keamanan Data</h2>
          <p>Kami menerapkan langkah-langkah keamanan yang tepat untuk melindungi informasi pribadi Anda dari akses, perubahan, atau penghancuran yang tidak sah.</p>

          <h2>5. Hak Anda</h2>
          <p>Anda memiliki hak untuk:</p>
          <ul>
            <li>Mengakses informasi pribadi Anda</li>
            <li>Mengoreksi informasi yang tidak akurat</li>
            <li>Meminta penghapusan informasi Anda</li>
            <li>Menolak komunikasi pemasaran</li>
          </ul>
        </div>
      `
    }
  };

  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-content">
          <h1 className="legal-title">{content[language].title}</h1>
          <p className="legal-date">{content[language].lastUpdated}</p>
          <div dangerouslySetInnerHTML={{ __html: content[language].content }} />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;