import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Jashan',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'john',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim Shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 1599,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: `<div>• <b>Care Instructions:</b> Machine Wash</div>
      <div>• <b>Fit Type:</b> Regular Fit</div>
      <div>• <b>Fabrics:</b> 100% High-grade Cotton </div>
      <div>• <b>Suitable for:</b> Sports, Casual</div>
      <div>• <b>Wash Instruction:</b> Handwash</div>
      <div>• <b>Fit Type:</b> Regular Fit</div>
  `,
    },
    {
      // _id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 1499,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.6,
      numReviews: 10,
      description: `<div>• <b>Care Instructions:</b> Machine Wash</div>
      <div>• <b>Fit Type:</b> Regular Fit</div>
      <div>• <b>Fabrics:</b> 100% High-grade Cotton </div>
      <div>• <b>Suitable for:</b> Sports, Casual</div>
      <div>• <b>Wash Instruction:</b> Handwash</div>
      <div>• <b>Fit Type:</b> Regular Fit</div>
  `,
    },
    {
      // _id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 1699,
      countInStock: 12,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: `<div>• <b>Care Instructions:</b> Machine Wash</div>
      <div>• <b>Fit Type:</b> Regular Fit</div>
      <div>• <b>Fabrics:</b> 100% High-grade Cotton </div>
      <div>• <b>Suitable for:</b> Sports, Casual</div>
      <div>• <b>Wash Instruction:</b> Handwash</div>
      <div>• <b>Fit Type:</b> Regular Fit</div>
  `,
    },
    {
      // _id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 1699,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.6,
      numReviews: 10,
      description: `<div>• <b>Care Instructions:</b> Machine Wash</div>
      <div>• <b>Fit Type:</b> Regular Fit</div>
      <div>• <b>Fabrics:</b> 100% High-grade Cotton </div>
      <div>• <b>Suitable for:</b> Sports, Casual</div>
      <div>• <b>Wash Instruction:</b> Handwash</div>
      <div>• <b>Fit Type:</b> Regular Fit</div>
  `,
    },
  ],
};
export default data;
