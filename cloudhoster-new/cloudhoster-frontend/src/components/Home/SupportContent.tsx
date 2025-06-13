// File: src/components/Home/SupportContent.tsx
import React from 'react';
import illustration from '../../assets/images/support-ticket-blue.svg'; // pastikan file ini sesuai

const SupportContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Text Kiri */}
      <div>
        <h2 className="text-[36px] leading-[44px] text-[#2B1F51] font-extrabold font-averta">
          Dukungan Layanan 24 Jam Sehari
        </h2>
        <p className="text-[16px] leading-[26px] text-[#524972] font-light font-averta mt-4">
          Dengan pengalaman 12 tahun di bidang hosting, layanan pelanggan kami akan selalu tersedia 24 jam sehari
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-[22px] leading-[30px] text-[#2B1F51] font-semibold font-averta">
              Dukungan yang Pro-aktif
            </h3>
            <p className="text-[16px] leading-[26px] text-[#524972] font-light font-averta">
              Layanan pelanggan kami akan membantu setiap permasalahan anda bahkan yang paling kompleks sekalipun
            </p>
          </div>
          <div>
            <h3 className="text-[22px] leading-[30px] text-[#2B1F51] font-semibold font-averta">
              Pemecahan masalah yang cepat dan langsung
            </h3>
            <p className="text-[16px] leading-[26px] text-[#524972] font-light font-averta">
              Pemecahan masalah langsung pada sumbernya tanpa Waktu menunggu, sehingga anda dapat terus fokus pada bisnis dan pekerjaan anda
            </p>
          </div>
          <div>
            <h3 className="text-[22px] leading-[30px] text-[#2B1F51] font-semibold font-averta">
              Tanpa Waktu menunggu
            </h3>
            <p className="text-[16px] leading-[26px] text-[#524972] font-light font-averta">
              Tersedia Live Chat yang terintegrasi dengan AI Asisten, untuk tiket rata-rata Waktu dibalas adalah 15 menit
            </p>
          </div>
        </div>

        <a
          href="#"
          className="mt-6 inline-block text-[#3a539b] font-semibold text-sm underline hover:text-[#2b3d7d] transition"
        >
          Lihat Detail
        </a>
      </div>

      {/* Ilustrasi Kanan */}
      <div className="w-full">
        <img
          src={illustration}
          alt="Ilustrasi Dashboard Kirim Tiket"
          className="w-full h-auto max-w-md mx-auto"
        />
      </div>
    </div>
  );
};

export default SupportContent;
