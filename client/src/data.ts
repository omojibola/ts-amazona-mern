import { Product } from './types/Product';

let testImage =
  'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';
export const sampleProducts: Product[] = [
  {
    name: 'Nike slim shirt',
    slug: 'nike-slim-shirt',
    category: 'shirts',
    image: testImage,
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
    image: testImage,
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
    image: testImage,
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
    image: testImage,
    price: 110,
    countInStock: 15,
    brand: 'Nike',
    rating: 4.0,
    numReviews: 7,
    description: 'High quality pant',
  },
];
