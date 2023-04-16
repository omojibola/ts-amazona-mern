import { Product } from './types/Product';

export const sampleProducts: Product[] = [
  {
    name: 'Nike slim shirt',
    slug: 'nike-slim-shirt',
    category: 'shirts',
    image: '../images/p1.jpg',
    price: 120,
    countInStock: 10,
    brand: 'Nike',
    rating: 4.5,
    numReviews: 10,
    description: 'High quality shirt',
  },

  {
    name: 'Adidad fit shirt',
    slug: 'adidas-fit-shirt',
    category: 'shirts',
    image: '../images/p2.jpg',
    price: 100,
    countInStock: 10,
    brand: 'Adidas',
    rating: 4.0,
    numReviews: 10,
    description: 'High quality shirt',
  },

  {
    name: 'Lacoste free pants',
    slug: 'lacoste-free-pants',
    category: 'pants',
    image: '../images/p3.jpg',
    price: 220,
    countInStock: 0,
    brand: 'Lacoste',
    rating: 4.5,
    numReviews: 10,
    description: 'High quality shirt',
  },

  {
    name: 'Nike slim pant',
    slug: 'nike-slim-pant',
    category: 'shirts',
    image: '../images/p4.jpg',
    price: 110,
    countInStock: 15,
    brand: 'Nike',
    rating: 4.0,
    numReviews: 7,
    description: 'High quality pant',
  },
];
