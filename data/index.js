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

export const dishes = [
  {
    id: 'dish-1',
    imgUrl: '/images/dish-1.jpg',
    label: 'Featured Meal',
    details: 'Served with french fries + drink',
    choice:
      'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...',
    rating: 5,
    link: '/'
  },
  {
    id: 'dish-2',
    imgUrl: '/images/dish-2.jpg',
    label: 'Featured Meal',
    details: 'Served with french fries + drink',
    choice:
      'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...',
    rating: 4,
    link: '/'
  },
  {
    id: 'dish-3',
    imgUrl: '/images/dish-3.jpg',
    label: 'Featured Meal',
    details: 'Served with french fries + drink',
    choice:
      'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...',
    rating: 4.5,
    link: '/'
  },
  {
    id: 'dish-4',
    imgUrl: '/images/dish-4.jpg',
    label: 'Featured Meal',
    details: 'Served with french fries + drink',
    choice:
      'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...',
    rating: 4.7,
    link: '/'
  },
  {
    id: 'dish-5',
    imgUrl: '/images/dish-5.jpg',
    label: 'Featured Meal',
    details: 'Served with french fries + drink',
    choice:
      'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...',
    rating: 2.5,
    link: '/'
  },
  {
    id: 'dish-6',
    imgUrl: '/images/dish-6.jpg',
    label: 'Featured Meal',
    details: 'Served with french fries + drink',
    choice:
      'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...',
    rating: 5,
    link: '/'
  }
];

export const chefs = [
  {
    id: 'gregory-flores',
    name: 'Gregory Flores',
    position: 'Chef of the cold',
    imgUrl: '/images/chef-1.jpg',
    dishes: ['/images/chef-1-dish-1.jpg', '/images/chef-1-dish-2.jpg', '/images/chef-1-dish-3.jpg']
  },
  {
    id: 'annette-cooper',
    name: 'Annette Cooper',
    position: 'Chef of the hot',
    imgUrl: '/images/chef-2.jpg',
    dishes: ['/images/chef-2-dish-1.jpg', '/images/chef-2-dish-2.jpg', '/images/chef-2-dish-3.jpg']
  },
  {
    id: 'greg-fox',
    name: 'Greg Fox',
    position: 'Сhef macro kitchen',
    imgUrl: '/images/chef-3.jpg',
    dishes: ['/images/chef-3-dish-1.jpg', '/images/chef-3-dish-2.jpg', '/images/chef-3-dish-3.jpg']
  }
];
