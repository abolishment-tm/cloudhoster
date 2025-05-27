import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './LegalPages.css';

const GDPRPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'GDPR Compliance',
      lastUpdated: 'Last updated: January 15, 2024',
      content: `
        <div class="legal-text">
          <h2>1. Introduction to GDPR</h2>
          <p>The General Data Protection Regulation (GDPR) is a comprehensive data protection law that protects the personal data of EU residents. At CloudHoster, we are committed to GDPR compliance and protecting your privacy rights.</p>

          <h2>2. Your Rights Under GDPR</h2>
          <p>Under GDPR, you have the following rights:</p>
          <ul>
            <li>Right to access your personal data</li>
            <li>Right to rectification of inaccurate data</li>
            <li>Right to erasure ("right to be forgotten")</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
            <li>Rights related to automated decision making</li>
          </ul>

          <h2>3. Data Processing Principles</h2>
          <p>We process personal data following these principles:</p>
          <ul>
            <li>Lawfulness, fairness, and transparency</li>
            <li>Purpose limitation</li>
            <li>Data minimization</li>
            <li>Accuracy</li>
            <li>Storage limitation</li>
            <li>Integrity and confidentiality</li>
            <li>Accountability</li>
          </ul>

          <h2>4. Legal Basis for Processing</h2>
          <p>We process your data under the following legal bases:</p>
          <ul>
            <li>Consent</li>
            <li>Contractual necessity</li>
            <li>Legal obligation</li>
            <li>Legitimate interests</li>
          </ul>

          <h2>5. Data Protection Measures</h2>
          <p>We implement appropriate technical and organizational measures to ensure data security, including:</p>
          <ul>
            <li>Encryption of personal data</li>
            <li>Regular security assessments</li>
            <li>Staff training on data protection</li>
            <li>Access controls and authentication</li>
          </ul>

          <h2>6. International Data Transfers</h2>
          <p>When transferring data outside the EU/EEA, we ensure appropriate safeguards are in place through:</p>
          <ul>
            <li>Standard Contractual Clauses (SCCs)</li>
            <li>Adequacy decisions</li>
            <li>Binding Corporate Rules</li>
          </ul>

          <h2>7. Data Breach Procedures</h2>
          <p>In the event of a data breach, we will:</p>
          <ul>
            <li>Notify relevant supervisory authorities within 72 hours</li>
            <li>Inform affected individuals without undue delay</li>
            <li>Document all breaches and remedial actions</li>
          </ul>

          <h2>8. Contact Information</h2>
          <p>For any GDPR-related inquiries or to exercise your rights, please contact our Data Protection Officer at:</p>
          <p>Email: dpo@cloudhoster.com</p>
        </div>
      `
    },
    id: {
      title: 'Kepatuhan GDPR',
      lastUpdated: 'Terakhir diperbarui: 15 Januari 2024',
      content: `
        <div class="legal-text">
          <h2>1. Pengenalan GDPR</h2>
          <p>General Data Protection Regulation (GDPR) adalah undang-undang perlindungan data yang komprehensif yang melindungi data pribadi penduduk UE. Di CloudHoster, kami berkomitmen untuk mematuhi GDPR dan melindungi hak privasi Anda.</p>

          <h2>2. Hak Anda Di Bawah GDPR</h2>
          <p>Di bawah GDPR, Anda memiliki hak-hak berikut:</p>
          <ul>
            <li>Hak untuk mengakses data pribadi Anda</li>
            <li>Hak untuk perbaikan data yang tidak akurat</li>
            <li>Hak untuk penghapusan ("hak untuk dilupakan")</li>
            <li>Hak untuk membatasi pemrosesan</li>
            <li>Hak untuk portabilitas data</li>
            <li>Hak untuk menolak pemrosesan</li>
            <li>Hak terkait pembuatan keputusan otomatis</li>
          </ul>

          <h2>3. Prinsip Pemrosesan Data</h2>
          <p>Kami memproses data pribadi mengikuti prinsip-prinsip berikut:</p>
          <ul>
            <li>Legalitas, keadilan, dan transparansi</li>
            <li>Pembatasan tujuan</li>
            <li>Minimalisasi data</li>
            <li>Akurasi</li>
            <li>Pembatasan penyimpanan</li>
            <li>Integritas dan kerahasiaan</li>
            <li>Akuntabilitas</li>
          </ul>

          <h2>4. Dasar Hukum untuk Pemrosesan</h2>
          <p>Kami memproses data Anda berdasarkan dasar hukum berikut:</p>
          <ul>
            <li>Persetujuan</li>
            <li>Kebutuhan kontraktual</li>
            <li>Kewajiban hukum</li>
            <li>Kepentingan yang sah</li>
          </ul>

          <h2>5. Langkah-langkah Perlindungan Data</h2>
          <p>Kami menerapkan langkah-langkah teknis dan organisasi yang tepat untuk memastikan keamanan data, termasuk:</p>
          <ul>
            <li>Enkripsi data pribadi</li>
            <li>Penilaian keamanan rutin</li>
            <li>Pelatihan staf tentang perlindungan data</li>
            <li>Kontrol akses dan autentikasi</li>
          </ul>

          <h2>6. Transfer Data Internasional</h2>
          <p>Saat mentransfer data ke luar UE/EEA, kami memastikan perlindungan yang tepat melalui:</p>
          <ul>
            <li>Klausul Kontraktual Standar (SCC)</li>
            <li>Keputusan kecukupan</li>
            <li>Aturan Perusahaan yang Mengikat</li>
          </ul>

          <h2>7. Prosedur Pelanggaran Data</h2>
          <p>Dalam hal terjadi pelanggaran data, kami akan:</p>
          <ul>
            <li>Memberi tahu otoritas pengawas terkait dalam waktu 72 jam</li>
            <li>Menginformasikan individu yang terkena dampak tanpa penundaan</li>
            <li>Mendokumentasikan semua pelanggaran dan tindakan perbaikan</li>
          </ul>

          <h2>8. Informasi Kontak</h2>
          <p>Untuk pertanyaan terkait GDPR atau untuk menggunakan hak Anda, silakan hubungi Petugas Perlindungan Data kami di:</p>
          <p>Email: dpo@cloudhoster.com</p>
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

export default GDPRPage;