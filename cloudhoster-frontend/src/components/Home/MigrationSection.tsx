// File: src/components/Home/MigrationSection.tsx
import React from 'react';
import './MigrationSection.css';
import { useLanguage } from '../../contexts/LanguageContext';
import MigrationIllustration from '../../assets/images/migration.svg';
import Step1Icon from '../../assets/icons/step1_outline.svg';
import Step2Icon from '../../assets/icons/step2_outline.svg';
import Step3Icon from '../../assets/icons/step3_outline.svg';
import Step4Icon from '../../assets/icons/step4_outline.svg';

const MigrationSection: React.FC = () => {
  const { language } = useLanguage();

  const texts = {
    id: {
      title: 'Migrasi yang Mudah dan Zero Downtime',
      description: 'Migrasi hosting tidak lagi menakutkan. Tim ahli CloudHoster akan memastikan semuanya berjalan lancar tanpa gangguan.',
      steps: [
        {
          title: 'Pilih Paket dan Konfirmasi Order',
          desc: 'Pilih paket hosting sesuai kebutuhan Anda dan lakukan konfirmasi pembayaran.',
        },
        {
          title: 'Kirim Tiket untuk Permintaan Migrasi',
          desc: 'Ajukan permintaan migrasi melalui tiket ke tim dukungan kami.',
        },
        {
          title: 'Kami akan Mengurus Semuanya',
          desc: 'Tim kami akan menangani semua proses migrasi secara profesional.',
        },
        {
          title: 'Selamat, Migrasi Anda Selesai',
          desc: 'Proses migrasi selesai tanpa downtime, website Anda langsung aktif.',
        },
      ],
    },
    en: {
      title: 'Easy Migration with Zero Downtime',
      description: 'Migrating your hosting is no longer scary. CloudHoster’s expert team will make sure everything goes smoothly with zero interruption.',
      steps: [
        {
          title: 'Choose a Plan and Confirm Order',
          desc: 'Pick the right hosting plan for your needs and complete your payment.',
        },
        {
          title: 'Submit a Migration Request Ticket',
          desc: 'Request migration easily by submitting a support ticket.',
        },
        {
          title: 'Our Team Will Handle Everything',
          desc: 'Our team will handle the entire migration process professionally.',
        },
        {
          title: 'Congrats! Your Migration is Complete',
          desc: 'Migration completed with zero downtime. Your site is live.',
        },
      ],
    },
  };

  const t = texts[language];
  const stepIcons = [Step1Icon, Step2Icon, Step3Icon, Step4Icon];

  return (
    <section className="migration-section">
      <h2 className="migration-title-centered">{t.title}</h2>
      <div className="migration-container">
        <div className="migration-text">
          <p className="migration-description">{t.description}</p>

          <div className="migration-steps-grid">
            {t.steps.map((step, index) => (
              <div className="migration-step-box" key={index}>
                <img src={stepIcons[index]} alt={`Step ${index + 1}`} className="migration-step-icon" />
                <h3 className="migration-step-title">{step.title}</h3>
                <p className="migration-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="migration-image-wrapper">
          <img src={MigrationIllustration} alt="Migration" className="migration-image" />
        </div>
      </div>
    </section>
  );
};

export default MigrationSection;
