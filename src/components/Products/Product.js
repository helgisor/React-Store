import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Product({
  image,
  title,
  id,
  price,
  specific,
  discount,
}) {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <article
      className='sku'
      data-aos='zoom-out'
      data-aos-delay='350'
      data-aos-duration='1000'
    >
      <div className='sku-img'>
        <Link to={`products/${id}`}>
          <img src={image} alt={title} className='imgSku' />
        </Link>
      </div>
      <div className='sku-footer'>
        <p className='product-title'>{title}</p>
        <p className='underLine'></p>
        <p className='product-price'>
          ${price} <span className='discount'>{discount}</span>{' '}
        </p>
      </div>
    </article>
  );
}
