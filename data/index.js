import { FaClock, FaPhoneAlt, FaLocationArrow } from 'react-icons/fa';

export const navLinks = [
  {
    label: 'menu',
    href: '#menu'
  },
  {
    label: 'recipes',
    href: '#recipes'
  },
  {
    label: 'chefs',
    href: '#chefs'
  },
  {
    label: 'contacts',
    href: '#contacts'
  }
];

export const footerInfoItems = [
  {
    label: 'Today 10:00 am - 7:00 pm',
    icon: FaClock,
    sub: 'Working hours',
    id: 'working-hours',
    type: 'text'
  },
  {
    label: 'Velyka Vasylkivska 100',
    icon: FaLocationArrow,
    sub: 'Get Directions',
    id: 'get-directions',
    type: 'address'
  },
  {
    label: '+38 (063) 833 24 15',
    icon: FaPhoneAlt,
    sub: 'Call Online',
    id: 'call-online',
    type: 'tel'
  }
];
