import daftarDomainIcon from '../../../assets/icons/daftar-domain.svg';
import transferDomainIcon from '../../../assets/icons/transfer-domain.svg';
import cekWhoisIcon from '../../../assets/icons/cek-whois.svg';

export const domainMenu = [
  {
    icon: daftarDomainIcon,
    titleID: 'Daftar Nama Domain',
    titleEN: 'Register Domain',
    descriptionID: 'Cari nama domain yang anda inginkan dan daftarkan',
    descriptionEN: 'Find and register the domain name you want',
    href: '/domain/register',
  },
  {
    icon: transferDomainIcon,
    titleID: 'Transfer Domain',
    titleEN: 'Transfer Domain',
    descriptionID: 'Transfer domain anda kepada kami',
    descriptionEN: 'Transfer your domain to us easily',
    href: '/domain/transfer',
  },
  {
    icon: cekWhoisIcon,
    titleID: 'Cek WHOIS',
    titleEN: 'WHOIS Lookup',
    descriptionID: 'WHOIS untuk pencarian nama domain',
    descriptionEN: 'WHOIS for checking domain details',
    href: '/domain/whois',
  },
];
