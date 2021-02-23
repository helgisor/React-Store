import React, { useEffect, fragment } from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/products';

export default function Store({ title, products }) {
  const {
    sorted,
    page,
    changePage,
    setToMedieval,
    setToAncient,
    setToGolden,
  } = React.useContext(ProductContext);

  return (
    <>
      <section className='section2 category-section'>
        <h2 className='section-title store'>Categories</h2>
        <div className='products-center2'>
          <Link to='products' onClick={setToAncient}>
            <article className='product2 scroll'>
              <div className='img-container'>
                <img
                  src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1574624417/vx64ovkpz9nu98tqdtzn.png'
                  alt=''
                />
              </div>
              <div className='product-footer2'>
                <p className='product-title2'>Ancient</p>
              </div>
            </article>
          </Link>

          <Link to='products' onClick={setToMedieval}>
            <article className='product2'>
              <div className='img-container'>
                <img
                  src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1574624417/vx64ovkpz9nu98tqdtzn.png'
                  alt=''
                />
              </div>
              <div className='product-footer2'>
                <p className='product-title2'>Medieval</p>
              </div>
            </article>
          </Link>

          <Link to='products' onClick={setToGolden}>
            <article className='product2'>
              <div className='img-container'>
                <img
                  src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1574624417/vx64ovkpz9nu98tqdtzn.png'
                  alt=''
                />
              </div>
              <div className='product-footer2'>
                <p className='product-title2'>Golden</p>
              </div>
            </article>
          </Link>
          <Link to='products' onClick={setToAncient}>
            <article className='product2 scroll'>
              <div className='img-container'>
                <img
                  src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1574624417/vx64ovkpz9nu98tqdtzn.png'
                  alt=''
                />
              </div>
              <div className='product-footer2'>
                <p className='product-title2'>Ancient</p>
              </div>
            </article>
          </Link>
        </div>
      </section>
    </>
  );
}
