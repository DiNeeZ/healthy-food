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

export const info = [
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

export const slider = [
  {
    id: 'slider-image-1',
    src: '/images/slider-1.jpg'
  },
  {
    id: 'slider-image-2',
    src: '/images/slider-2.jpg'
  },
  {
    id: 'slider-image-3',
    src: '/images/slider-3.jpg'
  },
  {
    id: 'slider-image-4',
    src: '/images/slider-4.jpg'
  },
  {
    id: 'slider-image-5',
    src: '/images/slider-5.jpg'
  },
  {
    id: 'slider-image-6',
    src: '/images/slider-6.jpg'
  }
];

export const workflow = [
  {
    id: 'pick-meals',
    label: 'Pick Meals',
    text: 'Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options.'
  },
  {
    id: 'choose-how-often',
    label: 'Choose How Often',
    text: 'Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!'
  },
  {
    id: 'fast-deliveries',
    label: 'Fast Deliveries',
    text: 'Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box.'
  },
  {
    id: 'tasty-meals',
    label: 'Tasty Meals',
    text: 'Gobble makes cooking fast, so you have more time to unwind and be with family.'
  }
];
