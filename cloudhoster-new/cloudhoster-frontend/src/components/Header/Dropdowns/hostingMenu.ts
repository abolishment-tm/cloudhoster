import ShareHostingIcon from '../../../assets/icons/share-hosting.svg';
import DedicatedHostingIcon from '../../../assets/icons/dedicated-hosting.svg';
import EmailHostingIcon from '../../../assets/icons/email-hosting.svg';

export const hostingMenu = [
  {
    icon: ShareHostingIcon,
    titleID: 'Share Hosting',
    titleEN: 'Share Hosting',
    descriptionID: 'Cara termudah memulai dan mengembangkan situs anda',
    descriptionEN: 'Easiest way to start and grow your website',
    href: '/sharehosting', 
  },
  {
    icon: DedicatedHostingIcon,
    titleID: 'Dedicated Hosting',
    titleEN: 'Dedicated Hosting',
    descriptionID: 'Performa untuk situs besar, trafik tinggi',
    descriptionEN: 'Best performance for high-traffic or heavy apps',
    href: '/dedicatedhosting', 
  },
  {
    icon: EmailHostingIcon,
    titleID: 'Email Hosting',
    titleEN: 'Email Hosting',
    descriptionID: 'Email dengan nama domain anda sendiri',
    descriptionEN: 'Email identity with your own domain',
    href: '/emailhosting', 
  },
];


