import React from 'react';

import { Link } from 'react-router-dom';

import { ProductContext } from '../context/products';

export default function Store() {
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
      <section className='section category-section'>
        <h2 className='section-title store'>Categories</h2>
        <div className='products-center'>
          <Link to='products' onClick={setToAncient}>
            <article className='product scroll'>
              <div className='img-container'>
                <img
                  src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1574624417/vx64ovkpz9nu98tqdtzn.png'
                  alt=''
                />
              </div>
              <div className='product-footer'>
                <p className='product-title'>Ancient</p>
              </div>
            </article>
          </Link>

          <Link to='products' onClick={setToMedieval}>
            <article className='product'>
              <div className='img-container'>
                <img
                  src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1574624417/vx64ovkpz9nu98tqdtzn.png'
                  alt=''
                />
              </div>
              <div className='product-footer'>
                <p className='product-title'>Medieval</p>
              </div>
            </article>
          </Link>

          <Link to='products' onClick={setToGolden}>
            <article className='product'>
              <div className='img-container'>
                <img
                  src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1574624417/vx64ovkpz9nu98tqdtzn.png'
                  alt=''
                />
              </div>
              <div className='product-footer'>
                <p className='product-title'>Golden</p>
              </div>
            </article>
          </Link>
          <Link to='products' onClick={setToAncient}>
            <article className='product scroll'>
              <div className='img-container'>
                <img
                  src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1574624417/vx64ovkpz9nu98tqdtzn.png'
                  alt=''
                />
              </div>
              <div className='product-footer'>
                <p className='product-title'>Ancient</p>
              </div>
            </article>
          </Link>
        </div>
      </section>
    </>
  );
}
