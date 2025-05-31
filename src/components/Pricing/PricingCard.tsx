import React, { useState, useEffect } from 'react';
import './SharedPricingTable.css';
import idFlag from '../../assets/icons/flag-id.svg?url';
import TooltipModal from '../../components/TooltipModal';
import { useLanguage } from '../../contexts/LanguageContext';
import questionIcon from '../../assets/icons/question-mark.svg?url';

interface PricingCardProps {
  name: string;
  price: {
    monthly: string;
    annually: string;
    triennially: string;
  };
  originalPrice: {
    monthly: string;
    annually: string;
    triennially: string;
  };
  discount: string;
  isFeatured?: boolean;
  location: string;
  period: 'monthly' | 'annually' | 'triennially';
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  originalPrice,
  discount,
  isFeatured = false,
  location,
  period,
}) => {
  const { language } = useLanguage();
  const isIDR = language === 'id';
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => setShowTooltip(false);
    if (showTooltip) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showTooltip]);

  const formatPrice = (val: string) => {
    const num = Number(val);
    if (isNaN(num)) return '0';
    return isIDR
      ? num.toLocaleString('id-ID', { minimumFractionDigits: 0 })
      : `$${num.toFixed(2)}`;
  };

  const periodLabel = isIDR
    ? period === 'monthly' ? '/bln' : period === 'annually' ? '/thn' : '/3 thn'
    : period === 'monthly' ? '/mo' : period === 'annually' ? '/yr' : '/3 yr';

  return (
    <div
      className={`pricing-card ${isFeatured ? 'popular' : ''} relative flex flex-col justify-between`}
    >
      {isFeatured && <div className="ribbon">Paling Populer</div>}

      {/* Konten utama dengan center penuh */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 py-6">
        <div className="plan-name text-[30px] font-black text-center mb-2 tracking-tight">
          {name}
        </div>

        <div className="price text-center text-4xl font-bold text-black mb-1">
          <sup className="text-base align-top">{isIDR ? 'Rp' : '$'}</sup>
          {formatPrice(price[period])}
          <span className="per text-base font-normal">{periodLabel}</span>
        </div>

        <div className="text-center text-sm text-gray-500 line-through">
          {isIDR ? 'Rp' : '$'}{formatPrice(originalPrice[period])}
        </div>

        <div className="relative flex justify-center items-center mt-1 z-[2] mb-3">
          <div className="text-sm text-orange-500 font-medium flex items-center gap-2">
            {isIDR ? `Hemat ${discount}%` : `Save ${discount}%`}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip((prev) => !prev);
              }}
              className="relative z-[10]"
            >
              <img src={questionIcon} alt="?" className="w-4 h-4 hover:opacity-80" />
            </button>
          </div>

          {/* Tooltip */}
          {showTooltip && (
            <div
              className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-[99] w-72"
              onClick={(e) => e.stopPropagation()}
            >
              <TooltipModal
                visible={true}
                title={
                  isIDR
                    ? 'Harga Promo Berlaku Hanya di Tagihan Pertama'
                    : 'Promotional Price for First Invoice Only'
                }
                content={
                  isIDR
                    ? 'CloudHoster memberikan harga promo terbatas hanya untuk pembayaran pertama. Setelah itu, harga akan kembali normal sesuai dashboard Anda.'
                    : 'CloudHoster offers limited-time promotional pricing only for the first invoice. Renewals are at standard rates.'
                }
                onClose={() => setShowTooltip(false)}
              />
            </div>
          )}
        </div>

        <button className="cta-button px-4 py-1.5 text-sm font-medium bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
          {isIDR ? 'Pesan Sekarang' : 'Order Now'}
        </button>
      </div>

      {/* Lokasi tetap di bawah */}
      <div className="location text-[15px] leading-tight text-center mt-4 mb-2 flex justify-center items-center space-x-2">
        <span>{isIDR ? 'Data Center Terdekat:' : 'Nearest Datacenter:'}</span>
        <strong>{location}</strong>
        <img src={idFlag} alt="flag" className="w-4 h-3 inline-block" />
      </div>
    </div>
  );
};

export default PricingCard;
