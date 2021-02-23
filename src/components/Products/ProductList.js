import React, { useEffect } from 'react';
import Product from './Product';

export default function ProductList({ title, products }) {
  return (
    <section className='section'>
      <h2 className='section-title featuredScroll'>{title}</h2>
      <div className='products-center'>
        {products.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
