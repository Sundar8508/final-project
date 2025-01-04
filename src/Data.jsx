import certified from './assets/certified.svg';
import coffeeBeans from './assets/coffee-beans.svg';
import coffee from './assets/coffee.svg';
import freeDelivery from './assets/free-delivery.svg';

import menu1 from './assets/01.jpg';
import menu2 from './assets/02.jpg';
import menu3 from './assets/03.jpg';
import menu4 from './assets/04.jpg';
import menu5 from './assets/05.jpg';
import menu6 from './assets/06.jpg';
import menu7 from './assets/07.jpg';
import menu8 from './assets/08.jpg';

import gallery1 from './assets/gallery-1.jpg';
import gallery2 from './assets/gallery-2.jpg';
import gallery3 from './assets/gallery-3.jpg';
import gallery4 from './assets/gallery-4.jpg';
import gallery5 from './assets/gallery-5.jpg';

import offer1 from './assets/offer-1.jpg';
import offer2 from './assets/offer-2.jpg';

import testimonial1 from './assets/testimonial-1.jpg';
import testimonial2 from './assets/testimonial-2.jpg';
import testimonial3 from './assets/testimonial-3.jpg';
import testimonial4 from './assets/testimonial-4.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'About',
    path: 'about',
  },
  {
    name: 'Features',
    path: 'features',
  },
  {
    name: 'Menu',
    path: 'menu',
  },
  {
    name: 'Gallery',
    path: 'gallery',
  },
  // {
  //   name: 'Chefs',
  //   path: 'team',
  // },
  {
    name: 'Testimonials',
    path: 'testimonials',
  },
];

export const features = [
  {
    id: 1,
    img: freeDelivery,
    title: 'Free Shipping',
    description:
      'Enjoy the convenience of free shipping with no minimum required.  we’ll deliver it right to your door—free of charge. Order today and sip away!',
  },
  {
    id: 2,
    img: certified,
    title: 'Organic Certified',
    description:
      'Enjoy 100% organic certified coffee, sourced sustainably for a pure, chemical-free experience in every cup.',
  },
  {
    id: 3,
    img: coffee,
    title: 'High Quality',
    description:
      'It is high quality coffees we provide in hygenic way  you dont worry about anything you blindly trust us!',
  },
  {
    id: 4,
    img: coffeeBeans,
    title: 'Proper Roasting',
    description:
      'At Coffero, we carefully roast our beans to perfection,  bold flavors while preserving their natural aroma. balanced cup every time..',
  },
];

export const menu = [
  {
    id: 1,
    img: menu1,
    title: 'Classic Americano',
    description: 'Rich, bold coffee without milk, perfect for coffee lovers.',
    price: '₹149',
  },
  {
    id: 2,
    img: menu2,
    title: 'Cappuccino Arabica Blend',
    description: 'Smooth espresso with velvety steamed milk and a light froth.',
    price: '₹199',
  },
  {
    id: 3,
    img: menu3,
    title: 'Velvety Milk Cream Coffee',
    description: 'A creamy, indulgent coffee made with milk and a hint of sweetness.',
    price: '₹199',
  },
  {
    id: 4,
    img: menu4,
    title: 'Premium Raw Coffee',
    description: 'Bold and flavorful coffee made from raw, unroasted beans.',
    price: '₹219',
  },
  {
    id: 5,
    img: menu5,
    title: 'Fresh Almond Coffee',
    description: 'Pure, freshly brewed coffee served without any milk or additives.',
    price: '₹119',
  },
  {
    id: 6,
    img: menu6,
    title: 'Arabica Cappuccino',
    description: 'A rich Arabica espresso with silky milk foam for a smooth taste.',
    price: '₹189',
  },
  {
    id: 7,
    img: menu7,
    title: 'Decadent Milk Cream Coffee',
    description: 'A luxurious coffee experience with cream, milk, and a touch of sweetness.',
    price: '₹190',
  },
  {
    id: 8,
    img: menu8,
    title: 'Chilled Iced Coffee',
    description: 'Refreshing iced coffee served with a splash of milk and flavoring.',
    price: '₹219',
  },
];


export const gallery = [
  {
    id: 1,
    img: gallery1,
    title: 'Cappuccino Charm',
  },
  {
    id: 2,
    img: gallery2,
    title: 'Coffero Classic Roast',
  },
  {
    id: 3,
    img: gallery3,
    title: 'Pure Gold Brew',
  },
  {
    id: 4,
    img: gallery4,
    title: 'Morning Bliss Brew',
  },
  {
    id: 5,
    img: gallery5,
    title: 'Vanilla Velvet',
  },
];

export const offer = [
  {
    id: 1,
    img: offer1,
    title: 'Espresso Bliss',
    discount: 'Get 40% Offer',
    description:
      'A bold, rich shot of pure coffee, crafted from premium beans for an intense, smooth flavor. Perfect for a quick pick-me-up or the base of your favorite coffee drinks..',
  },
  {
    id: 2,
    img: offer2,
    title: 'Mocha Magic',
    discount: 'Get 40% Offer',
    description:
      'A delightful blend of espresso, steamed milk, and rich chocolate, topped with whipped cream for a sweet, indulgent treat. Perfect for coffee lovers with a sweet tooth.'
  },
];

export const testimonials = [
  {
    id: 1,
    img: testimonial1,
    title: '– Jessica M.',
    service: 'Customer',
    description:
      'Coffero is my favorite coffee spot! The moment I walk in, the amazing aroma fills the air, and I know I’m in for a treat. The quality of their coffee is unparalleled – always fresh, always delicious.',
  },
  {
    id: 2,
    img: testimonial2,
    title: '– Sarah W.',
    service: 'Customer',
    description:
      'If you haven’t tried Coffero yet, you’re missing out. Their signature blends are amazing, and the atmosphere is second to none. You really can taste the difference with their pure-grade coffee beans',
  },
  {
    id: 3,
    img: testimonial3,
    title: '– James K.',
    service: 'Customer',
    description:
      'It’s hard to find a place that gets the balance of coffee and ambiance right, but Coffero has nailed it. Whether I’m grabbing a quick espresso or relaxing with a latte, it’s always perfect.',
  },
  {
    id: 4,
    img: testimonial4,
    title: '– Emma R.',
    service: 'Customer',
    description:
      'I’m so glad I found Coffero! The coffee is rich and flavorful, and the staff is always friendly. I also appreciate their commitment to sustainability and healthy options. My favorite is the Cold Brew!',
  },
];
