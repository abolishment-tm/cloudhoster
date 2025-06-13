// File: src/pages/ShareHosting.tsx
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

import Header from '../components/Header/Header';
import PromoBar from '../components/Home/PromoBar';
import PromoDropdown from '../components/Home/PromoDropdown';
import type { PlanData } from '../components/ShareHosting/TableHead';
import TableHead from '../components/ShareHosting/TableHead';
import PricingCards from '../components/ShareHosting/PricingCards';
import FeatureComparison from '../components/ShareHosting/FeatureComparison';
import TooltipModal from '../components/Tooltip/TooltipModal';

import shareHostingHero from '../assets/images/sharehostinghero.svg';
import checkmarkIcon from '../assets/icons/checkmark.svg';
import iconOneClick from '../assets/icons/1-click.svg';
import IconFreeCDN from '../assets/icons/free-cdn.svg';
import iconFreeDomain from '../assets/icons/free-domain.svg';
import iconFreeSSL from '../assets/icons/enhanced-security.svg';
import IconCpanelAkses from '../assets/icons/cpanel-akses.svg';
import IconDailyBackups from '../assets/icons/daily-backups.svg';
import './ShareHosting.css';

const featuresList = [
  { labelID: 'NVMe Disk Storage', labelEN: 'NVMe Disk Storage' },
  { labelID: 'CPU Cores', labelEN: 'CPU Cores' },
  { labelID: 'RAM Memory', labelEN: 'RAM Memory' },
  { labelID: 'Bandwidth', labelEN: 'Bandwidth' },
  { labelID: 'Addon Domain', labelEN: 'Addon Domain' },
  { labelID: 'Subdomains', labelEN: 'Subdomains' },
  { labelID: 'Parked Domains', labelEN: 'Parked Domains' },
  { labelID: 'Gratis Nama Domain', labelEN: 'Free Domain', help: true },
  { labelID: 'Gratis Migrasi Website', labelEN: 'Free Website Migration', help: true },
  { labelID: 'Gratis Backup Harian', labelEN: 'Free Daily Backup' },
  { labelID: 'Gratis SSL', labelEN: 'Free SSL', help: true },
  { labelID: 'iNodes', labelEN: 'iNodes', help: true },
  { labelID: 'Aktivasi Instan', labelEN: 'Instant Activation' },
  { labelID: 'Softaculous 1-Click Install', labelEN: 'Softaculous 1-Click Install' },
  { labelID: '24/7 Support', labelEN: '24/7 Support' },
  { labelID: 'Pilihan Data Center', labelEN: 'Data Center Selection' },
  { labelID: '45 Hari Uang Kembali', labelEN: '45 Day Money Back' },
];

const featuresAccordion = [
  // Fitur Keamanan & Reabilitas
  {
    category: 'Fitur Keamanan & Reabilitas',
    labelID: 'Jaminan Uptime 99.99%',
    labelEN: 'Uptime Guarantee 99.99%',
    help: true,
    merak: '99.99%',
    elang: '99.99%',
    garuda: '99.99%',
  },
  {
    category: 'Fitur Keamanan & Reabilitas',
    labelID: '100% Cloud Platform',
    labelEN: '100% Cloud Platform',
    help: true,
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Keamanan & Reabilitas',
    labelID: 'Web Application Firewall',
    labelEN: 'Web Application Firewall',
    help: true,
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Keamanan & Reabilitas',
    labelID: 'Imunity360 Proactive Defense',
    labelEN: 'Imunity360 Proactive Defense',
    help: true,
    merak: false,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Keamanan & Reabilitas',
    labelID: 'Advanced Firewall Protection',
    labelEN: 'Advanced Firewall Protection',
    help: true,
    merak: false,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Keamanan & Reabilitas',
    labelID: 'Deteksi Malware',
    labelEN: 'Malware Detection',
    help: true,
    merak: false,
    elang: false,
    garuda: true,
  },
  {
    category: 'Fitur Keamanan & Reabilitas',
    labelID: 'Penghapusan Malware',
    labelEN: 'Malware Removal',
    help: true,
    merak: false,
    elang: false,
    garuda: true,
  },
  {
    category: 'Fitur Keamanan & Reabilitas',
    labelID: 'Rebootless Secure Kernel',
    labelEN: 'Rebootless Secure Kernel',
    help: true,
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Keamanan & Reabilitas',
    labelID: 'CloudLinux OS',
    labelEN: 'CloudLinux OS',
    help: true,
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Keamanan & Reabilitas',
    labelID: 'Account Isolation',
    labelEN: 'Account Isolation',
    help: true,
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Keamanan & Reabilitas',
    labelID: 'Proactive Server Monitoring',
    labelEN: 'Proactive Server Monitoring',
    help: true,
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Keamanan & Reabilitas',
    labelID: '24/7 Network Monitoring',
    labelEN: '24/7 Network Monitoring',
    help: true,
    merak: true,
    elang: true,
    garuda: true,
  },

  // Fitur Performa Website
  {
    category: 'Fitur Performa Website',
    labelID: 'LiteSpeed Cache',
    labelEN: 'LiteSpeed Cache',
    help: true,
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Performa Website',
    labelID: 'HTTP/3',
    labelEN: 'HTTP/3',
    merak: false,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Performa Website',
    labelID: 'Gratis Cloudflare CDN',
    labelEN: 'Gratis Cloudflare CDN',
    help: true,
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Performa Website',
    labelID: 'Pilihan Lokasi Server',
    labelEN: 'Multiple Server Locations',
    help: true,
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Performa Website',
    labelID: 'NVMe Storage',
    labelEN: 'NVMe Storage',
    help: true,
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Performa Website',
    labelID: 'APC/OPCache',
    labelEN: 'APC/OPCache',
    merak: false,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Performa Website',
    labelID: 'Redis',
    labelEN: 'Redis',
    help: true,
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Performa Website',
    labelID: 'Leverage Browser Cache',
    labelEN: 'Leverage Browser Cache',
    merak: false,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Performa Website',
    labelID: 'GZIP Compression',
    labelEN: 'GZIP Compression',
    merak: false,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Performa Website',
    labelID: 'Keep-Alive',
    labelEN: 'Keep-Alive',
    merak: false,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Performa Website',
    labelID: 'CSS/JS/HTML Minification',
    labelEN: 'CSS/JS/HTML Minification',
    merak: false,
    elang: true,
    garuda: true,
  },

  // Fitur Email
  {
    category: 'Fitur Email',
    labelID: 'Akun Email',
    labelEN: 'Email Accounts',
    merak: 'Unlimited',
    elang: 'Unlimited',
    garuda: 'Unlimited',
  },
  {
    category: 'Fitur Email',
    labelID: 'Mailbox Storage',
    labelEN: 'Mailbox Storage',
    merak: '1 GB per email account',
    elang: 'Unlimited',
    garuda: 'Unlimited',
  },
  {
    category: 'Fitur Email',
    labelID: 'Email Attachment Size',
    labelEN: 'Email Attachment Size',
    merak: '50 MB',
    elang: '50 MB',
    garuda: '50 MB',
  },
  {
    category: 'Fitur Email',
    labelID: 'Email Forwarders',
    labelEN: 'Email Forwarders',
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Email',
    labelID: 'Email Aliases',
    labelEN: 'Email Aliases',
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Email',
    labelID: 'Email Autoresponder',
    labelEN: 'Email Autoresponder',
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Email',
    labelID: 'Web Mail',
    labelEN: 'Web Mail',
    help: true,
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Email',
    labelID: 'IMAP/POP3/SMTP',
    labelEN: 'IMAP/POP3/SMTP',
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Email',
    labelID: 'Mail Client Setup',
    labelEN: 'Mail Client Setup',
    help: true,
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Email',
    labelID: 'Mail Channel',
    labelEN: 'Mail Channel',
    help: true,
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Email',
    labelID: 'Catch-all Email',
    labelEN: 'Catch-all Email',
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Email',
    labelID: 'SPF and DKIM Support',
    labelEN: 'SPF and DKIM Support',
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Email',
    labelID: 'Spam Filters',
    labelEN: 'Spam Filters',
    merak: true,
    elang: true,
    garuda: true,
  },

  // Fitur Developer
  {
    category: 'Fitur Developer',
    labelID: 'Multiple PHP Version',
    labelEN: 'Multiple PHP Version',
    merak: '8.3, 8.2, 8.1, 8.0, 7.4, 7.3, 7.2, 7.1, 7.0, 5.6',
    elang: '8.3, 8.2, 8.1, 8.0, 7.4, 7.3, 7.2, 7.1, 7.0, 5.6',
    garuda: '8.3, 8.2, 8.1, 8.0, 7.4, 7.3, 7.2, 7.1, 7.0, 5.6',
  },
  {
    category: 'Fitur Developer',
    labelID: 'PHP Selector',
    labelEN: 'PHP Selector',
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Developer',
    labelID: 'Softaculous 1-Click Install',
    labelEN: 'Softaculous 1-Click Install',
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Developer',
    labelID: 'Application Autoupdate',
    labelEN: 'Application Autoupdate',
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Developer',
    labelID: 'MySQL Version',
    labelEN: 'MySQL Version',
    merak: 'MariaDB 10.6',
    elang: 'MariaDB 10.6',
    garuda: 'MariaDB 10.6',
  },
  {
    category: 'Fitur Developer',
    labelID: 'MySQL Database',
    labelEN: 'MySQL Database',
    merak: 'Unlimited',
    elang: 'Unlimited',
    garuda: 'Unlimited',
  },
  {
    category: 'Fitur Developer',
    labelID: 'Remote MySQL Databases',
    labelEN: 'Remote MySQL Databases',
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Developer',
    labelID: 'PostgreSQL Version',
    labelEN: 'PostgreSQL Version',
    merak: 'PostgreSQL 13',
    elang: 'PostgreSQL 13',
    garuda: 'PostgreSQL 13',
  },
  {
    category: 'Fitur Developer',
    labelID: 'PostgreSQL Databases',
    labelEN: 'PostgreSQL Databases',
    merak: 'Unlimited',
    elang: 'Unlimited',
    garuda: 'Unlimited',
  },
  {
    category: 'Fitur Developer',
    labelID: 'phpMyAdmin',
    labelEN: 'phpMyAdmin',
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Developer',
    labelID: 'NodeJS Support',
    labelEN: 'NodeJS Support',
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Developer',
    labelID: 'Python Support',
    labelEN: 'Python Support',
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Developer',
    labelID: 'Bash Support',
    labelEN: 'Bash Support',
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Developer',
    labelID: 'Perl Support',
    labelEN: 'Perl Support',
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Developer',
    labelID: 'Laravel',
    labelEN: 'Laravel',
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Developer',
    labelID: 'Symfony',
    labelEN: 'Symfony',
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Developer',
    labelID: 'SSH and SFTP Access',
    labelEN: 'SSH and SFTP Access',
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Developer',
    labelID: 'Mod_rewrite for SEO URLs',
    labelEN: 'Mod_rewrite for SEO URLs',
    merak: true,
    elang: true,
    garuda: true,
  },
  {
    category: 'Fitur Developer',
    labelID: 'Cron Jobs',
    labelEN: 'Cron Jobs',
    merak: true,
    elang: true,
    garuda: true,
  },
];

const ShareHosting: React.FC = () => {
  const { language, currency } = useLanguage();
  const [period, setPeriod] = useState<'monthly' | 'yearly' | 'triyearly'>('monthly');
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isPromoVisible, setPromoVisible] = useState(true);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const isID = language === 'id';
  const isIDR = currency === 'Rp';

  const title = isID
    ? 'Web Hosting yang dibuat untuk website kamu'
    : 'Web Hosting made for your website';
  const bullets = isID
    ? ['100% Backup Harian Otomatis', '100% Cloud Infrastruktur', 'LiteSpeed Cache + NVMe SSD']
    : ['100% Automatic Daily Backup', '100% Cloud Infrastructure', 'LiteSpeed Cache + NVMe SSD'];

  const ctaLabel = isID ? 'Pilih Paket' : 'Choose Your Plan';
  const guarantee = isID
    ? '45 Hari Jaminan Uang Kembali'
    : '45-Day Money Back Guarantee';
  const priceLabel = isID ? 'Mulai dari' : 'Starts at only';
  const priceValue = isIDR ? 'Rp.35.000' : '$2.49';
  const periodLabel = isIDR ? 'bln' : 'mo';

  const contentID = `CloudHoster selalu memberikan diskon dan promo, serta kupon, dan penawaran khusus kepada pelanggan pada saat pertama kali melakukan order. Sebagai catatan bahwa penawaran tersebut memiliki batasan waktu. Harga yang berlaku untuk pelanggan yang pertama kali melakukan pemesanan hanya berlaku satu kali dan tidak berlaku pada saat melakukan pembaharuan dan/atau perpanjangan.

Harga promo dan diskon berlaku untuk semua paket Shared Hosting, WordPress Hosting, dan Dedicated Hosting, dan akan diperpanjang otomatis dengan harga normal. Harga ini tertera berikut dengan invoice di dashboard pelanggan. Sebagai catatan: Jika Anda mendaftarkan domain gratis dengan CloudHoster dan Anda ingin mengajukan pembatalan dalam masa jaminan garansi uang kembali, maka akan ada pengenaan biaya untuk tetap memiliki domain tersebut.

Jika Anda melakukan order paket hosting dengan domain gratis, dan Anda ingin mengajukan pembatalan paket hosting Anda, maka Anda akan menerima pengembalian dana 100% dikurangi harga normal untuk pendaftaran nama domain.

Jaminan garansi uang kembali tidak berlaku untuk semua produk tambahan dan tidak ada pengembalian dana untuk itu.

Dengan membaca ini pelanggan dianggap menyetujui, dan memberikan izin kepada CloudHoster untuk melakukan penagihan dan mendebit kartu kredit dan/atau debit card atau metode pembayaran lain yang terdaftar pada akun Anda untuk setiap jatuh tempo pembaharuan layanan, kecuali Anda melakukan pembatalan sebelum masa pembaharuan layanan jatuh tempo.`;

  const contentEN = `CloudHoster always offers discounts, promos, coupons, and special offers to customers at the time of first order. Please note these offers are time-limited. The promotional pricing only applies to first-time orders and does not apply on renewals.

Promos apply to Shared Hosting, WordPress Hosting, and Dedicated Hosting, and will renew at normal pricing. If you register a free domain with CloudHoster and cancel during the money-back guarantee period, the normal domain registration price will be deducted from your refund.

If you order hosting with a free domain and request cancellation, you will receive a 100% refund minus the regular domain registration price.

The money-back guarantee does not apply to any add-on products and is non-refundable.

By reading this, the customer agrees and authorizes CloudHoster to charge and debit the registered credit/debit card or other payment methods for every renewal period unless canceled before the renewal date.`;

  const plans: Record<string, PlanData> = {
    merak: {
      name: 'Merak',
      current: {
        monthly: isIDR ? 'Rp.35.000' : '$2.49',
        yearly: isIDR ? 'Rp.350.000' : '$24.99',
        triyearly: isIDR ? 'Rp.900.000' : '$69.99',
      },
      original: {
        monthly: isIDR ? 'Rp.45.000' : '$3.49',
        yearly: isIDR ? 'Rp.450.000' : '$34.99',
        triyearly: isIDR ? 'Rp.1.350.000' : '$99.99',
      },
      discount: isID ? 'Diskon 20%' : '20% Off',
    },
    elang: {
      name: 'Elang',
      current: {
        monthly: isIDR ? 'Rp.55.000' : '$3.49',
        yearly: isIDR ? 'Rp.550.000' : '$34.99',
        triyearly: isIDR ? 'Rp.1.200.000' : '$89.99',
      },
      original: {
        monthly: isIDR ? 'Rp.70.000' : '$4.49',
        yearly: isIDR ? 'Rp.700.000' : '$44.99',
        triyearly: isIDR ? 'Rp.1.800.000' : '$129.99',
      },
      discount: isID ? 'Diskon 25%' : '25% Off',
    },
    garuda: {
      name: 'Garuda',
      current: {
        monthly: isIDR ? 'Rp.75.000' : '$4.99',
        yearly: isIDR ? 'Rp.750.000' : '$49.99',
        triyearly: isIDR ? 'Rp.1.500.000' : '$139.99',
      },
      original: {
        monthly: isIDR ? 'Rp.90.000' : '$6.49',
        yearly: isIDR ? 'Rp.900.000' : '$64.99',
        triyearly: isIDR ? 'Rp.2.100.000' : '$189.99',
      },
      discount: isID ? 'Diskon 30%' : '30% Off',
    },
  };

  const backupTooltips = {
    merak: isID
      ? 'Backup Harian otomatis dengan retensi 7 hari'
      : 'Daily backups with 7-day retention',
    elang: isID
      ? 'Backup Harian otomatis dengan retensi 14 hari'
      : 'Daily backups with 14-day retention',
    garuda: isID
      ? 'Backup Harian otomatis dengan retensi 30 hari'
      : 'Daily backups with 30-day retention',
  };

  const pricingPlans = [
    {
      title: 'Merak',
      features: [
        '5 GB NVMe Storage',
        '2 Core CPU',
        '1 GB RAM',
        'Unlimited Bandwidth',
        isID ? 'Gratis Domain' : 'Free Domain',
        isID ? 'Gratis Migrasi Website' : 'Free Website Migration',
        {
          text: 'Backup Harian',
          tooltip: backupTooltips.merak,
        },
      ],
    },
    {
      title: 'Elang',
      features: [
        '10 GB NVMe Storage',
        '2 Core CPU',
        '1 GB RAM',
        'Unlimited Bandwidth',
        isID ? 'Gratis Domain' : 'Free Domain',
        isID ? 'Gratis Migrasi Website' : 'Free Website Migration',
        {
          text: 'Backup Harian',
          tooltip: backupTooltips.elang,
        },
      ],
    },
    {
      title: 'Garuda',
      features: [
        '20 GB NVMe Storage',
        '2 Core CPU',
        '2 GB RAM',
        'Unlimited Bandwidth',
        isID ? 'Gratis Domain' : 'Free Domain',
        isID ? 'Gratis Migrasi Website' : 'Free Website Migration',
        {
          text: 'Backup Harian',
          tooltip: backupTooltips.garuda,
        },
      ],
    },
  ];

  const comparisonPlans = [
    {
      name: 'Merak',
      price: plans.merak.current[period],
      originalPrice: plans.merak.original[period],
      discount: plans.merak.discount,
      buttonLabel: ctaLabel,
      features: [
        '5 GB NVMe Storage',
        '2 Core CPU',
        '1 GB RAM',
        'Unlimited Bandwidth',
        '0',
        '10',
        '5',
        true,
        true,
        true,
        true,
        '100.000',
        true,
        true,
        true,
        true,
        true,
      ],
    },
    {
      name: 'Elang',
      price: plans.elang.current[period],
      originalPrice: plans.elang.original[period],
      discount: plans.elang.discount,
      buttonLabel: ctaLabel,
      features: [
        '10 GB NVMe Storage',
        '2 Core CPU',
        '1 GB RAM',
        'Unlimited Bandwidth',
        '10',
        '25',
        '10',
        true,
        true,
        true,
        true,
        '250.000',
        true,
        true,
        true,
        true,
        true,
      ],
    },
    {
      name: 'Garuda',
      price: plans.garuda.current[period],
      originalPrice: plans.garuda.original[period],
      discount: plans.garuda.discount,
      buttonLabel: ctaLabel,
      features: [
        '20 GB NVMe Storage',
        '2 Core CPU',
        '2 GB RAM',
        'Unlimited Bandwidth',
        '30',
        'Unlimited',
        'Unlimited',
        true,
        true,
        true,
        true,
        '500.000',
        true,
        true,
        true,
        true,
        true,
      ],
    },
  ];

  return (
    <>
      {isPromoVisible && (
        <PromoBar
          isOpen={isDropdownVisible}
          onToggle={() => setDropdownVisible(prev => !prev)}
          onClose={() => setPromoVisible(false)}
        />
      )}
      {isDropdownVisible && <PromoDropdown isOpen={isDropdownVisible} />}
      {!isDropdownVisible && <Header withPromo={isPromoVisible} />}

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">{title}</h1>
            <ul className="hero-bullets">
              {bullets.map((text, idx) => (
                <li key={idx}>
                  <img src={checkmarkIcon} alt="✓" />
                  {text}
                </li>
              ))}
            </ul>

            <div className="hero-cta-row">
              <button className="hero-cta">{ctaLabel}</button>
              <div className="hero-price-box">
                <div className="hero-price-label">{priceLabel}</div>
                <div className="hero-price-value">
                  {priceValue}
                  <span className="hero-price-unit">/{periodLabel}</span>
                </div>
              </div>
            </div>

            <p className="hero-guarantee">{guarantee}</p>
          </div>

          <div className="hero-right">
            <img src={shareHostingHero} alt="Share Hosting" className="hero-image" />
          </div>
        </div>

        <div className="hero-period-tabs">
          <span
            className={period === 'monthly' ? 'active' : ''}
            onClick={() => setPeriod('monthly')}
          >
            {isID ? 'Bulanan' : 'Monthly'}
          </span>
          <span
            className={period === 'yearly' ? 'active' : ''}
            onClick={() => setPeriod('yearly')}
          >
            {isID ? 'Tahunan' : 'Yearly'}
          </span>
          <span
            className={period === 'triyearly' ? 'active' : ''}
            onClick={() => setPeriod('triyearly')}
          >
            {isID ? '3 Tahunan' : '3 Years'}
          </span>
        </div>

        <div className="wave-bottom">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path className="shape-fill" d="M0,40 C360,120 1080,-40 1440,60 L1440,100 L0,100 Z" />
          </svg>
        </div>

        <div className="pricing-table-head-wrapper">
          <TableHead
            selectedPeriod={period}
            plans={plans}
            onShowTooltip={() => setTooltipVisible(true)}
          />
        </div>
      </section>

      <section className="pricing-section">
        <PricingCards plans={pricingPlans} />
      </section>

      <div className="see-all-wrapper">
        <button
          className="see-all-button"
          onClick={() => {
            const target = document.getElementById('compare-features');
            target?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {isID ? 'Lihat semua fitur' : 'See all features'}
        </button>
      </div>

      {/* === FITUR SHARED HOSTING === */}
<section className="shared-feature-section">
  <h2 className="shared-feature-title">
    {isID ? 'Fitur Shared Hosting' : 'Shared Hosting Features'}
  </h2>
  <div className="shared-feature-grid">
    <div className="shared-feature-box">
      <img src={iconOneClick} alt="1 Click Install" />
      <h3>Softaculous 1-Click Install</h3>
      <p>{isID ? 'Install aplikasi populer hanya dengan satu klik.' : 'Install popular apps with one click.'}</p>
    </div>
    <div className="shared-feature-box">
      <img src={IconFreeCDN} alt="CDN" />
      <h3>Gratis Global CDN</h3>
      <p>{isID ? 'Akses situs lebih cepat di seluruh dunia.' : 'Faster global access to your site.'}</p>
    </div>
    <div className="shared-feature-box">
      <img src={iconFreeDomain} alt="Free Domain" />
      <h3>Gratis Domain</h3>
      <p>{isID ? 'Dapatkan domain gratis dengan semua paket.' : 'Get a free domain with all plans.'}</p>
    </div>
    <div className="shared-feature-box">
      <img src={iconFreeSSL} alt="Free SSL" />
      <h3>Gratis SSL</h3>
      <p>{isID ? 'Amankan website kamu tanpa biaya tambahan.' : 'Secure your website at no extra cost.'}</p>
    </div>
    <div className="shared-feature-box">
      <img src={IconCpanelAkses} alt="cPanel Access" />
      <h3>cPanel Akses</h3>
      <p>{isID ? 'Kelola hosting dengan panel kontrol cPanel.' : 'Manage hosting with cPanel control panel.'}</p>
    </div>
    <div className="shared-feature-box">
      <img src={IconDailyBackups} alt="Daily Backups" />
      <h3>Cadangan Harian</h3>
      <p>{isID ? 'Backup otomatis setiap hari untuk keamanan.' : 'Daily automated backups for safety.'}</p>
    </div>
  </div>
</section>

      <div style={{ width: '100%', background: '#ffffff' }}>
        <section id="compare-features" className="feature-compare-section">
          <FeatureComparison features={featuresList} categorizedFeatures={featuresAccordion} plans={comparisonPlans} />
        </section>
      </div>

      {tooltipVisible && (
        <TooltipModal
          onClose={() => setTooltipVisible(false)}
          title={isID ? 'Diskon berlaku hanya untuk Invoice pertama' : 'Discounts rates only valid for first invoice only'}
          content={isID ? contentID : contentEN}
          positionMode="modal"
        />
      )}
    </>
  );
};

export default ShareHosting;
