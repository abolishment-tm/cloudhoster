import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './LegalPages.css';

const TermsPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Terms and Conditions',
      lastUpdated: 'Last updated: January 15, 2024',
      content: `
        <div class="legal-text">
          <h2>1. Introduction</h2>
          <p>Welcome to CloudHoster. By accessing our website and using our services, you agree to these terms and conditions. Please read them carefully.</p>

          <h2>2. Services</h2>
          <p>CloudHoster provides web hosting, domain registration, and related services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.</p>

          <h2>3. Account Responsibilities</h2>
          <p>You are responsible for maintaining the security of your account credentials and for all activities that occur under your account.</p>

          <h2>4. Acceptable Use</h2>
          <p>Our services may only be used for lawful purposes. You agree not to use our services to:</p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on intellectual property rights</li>
            <li>Distribute malware or engage in hacking activities</li>
            <li>Send spam or unsolicited bulk email</li>
          </ul>

          <h2>5. Payment Terms</h2>
          <p>Services must be paid for in advance. All fees are non-refundable unless otherwise stated in our refund policy.</p>

          <h2>6. Service Level Agreement</h2>
          <p>We strive to maintain 99.9% uptime for all our hosting services. Details of our SLA and compensation for downtime are available in our Service Level Agreement.</p>

          <h2>7. Termination</h2>
          <p>We reserve the right to terminate services for violation of these terms. You may cancel your services at any time through your control panel.</p>

          <h2>8. Limitation of Liability</h2>
          <p>CloudHoster shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
        </div>
      `
    },
    id: {
      title: 'Syarat dan Ketentuan',
      lastUpdated: 'Terakhir diperbarui: 15 Januari 2024',
      content: `
        <div class="legal-text">
          <h2>1. Pendahuluan</h2>
          <p>Selamat datang di CloudHoster. Dengan mengakses website kami dan menggunakan layanan kami, Anda menyetujui syarat dan ketentuan ini. Harap membacanya dengan seksama.</p>

          <h2>2. Layanan</h2>
          <p>CloudHoster menyediakan web hosting, pendaftaran domain, dan layanan terkait. Kami berhak untuk memodifikasi, menangguhkan, atau menghentikan aspek apa pun dari layanan kami kapan saja.</p>

          <h2>3. Tanggung Jawab Akun</h2>
          <p>Anda bertanggung jawab untuk menjaga keamanan kredensial akun Anda dan untuk semua aktivitas yang terjadi di bawah akun Anda.</p>

          <h2>4. Penggunaan yang Dapat Diterima</h2>
          <p>Layanan kami hanya boleh digunakan untuk tujuan yang sah. Anda setuju untuk tidak menggunakan layanan kami untuk:</p>
          <ul>
            <li>Melanggar hukum atau peraturan yang berlaku</li>
            <li>Melanggar hak kekayaan intelektual</li>
            <li>Mendistribusikan malware atau terlibat dalam aktivitas peretasan</li>
            <li>Mengirim spam atau email massal yang tidak diminta</li>
          </ul>

          <h2>5. Ketentuan Pembayaran</h2>
          <p>Layanan harus dibayar di muka. Semua biaya tidak dapat dikembalikan kecuali dinyatakan lain dalam kebijakan pengembalian dana kami.</p>

          <h2>6. Perjanjian Tingkat Layanan</h2>
          <p>Kami berusaha untuk mempertahankan uptime 99,9% untuk semua layanan hosting kami. Detail SLA kami dan kompensasi untuk downtime tersedia dalam Perjanjian Tingkat Layanan kami.</p>

          <h2>7. Penghentian</h2>
          <p>Kami berhak menghentikan layanan karena pelanggaran terhadap ketentuan ini. Anda dapat membatalkan layanan Anda kapan saja melalui panel kontrol Anda.</p>

          <h2>8. Batasan Tanggung Jawab</h2>
          <p>CloudHoster tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, konsekuensial, atau punitif yang diakibatkan dari penggunaan layanan kami oleh Anda.</p>
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

export default TermsPage;