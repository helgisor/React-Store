import React, { Fragment, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductContext } from '../context/products';
import { CartContext } from '../context/cart';
import { useHistory } from 'react-router-dom';
import Loading from '../components/Loading';
import Aos from 'aos';

import ModalImage from 'react-modal-image';

export default function ProductDetails() {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    Aos.init({});
  }, []);

  const { products } = React.useContext(ProductContext);
  const { addToCart } = React.useContext(CartContext);
  const product = products.find((item) => item.id === parseInt(id));
  if (products.length === 0) {
    return <Loading />;
  } else {
    const {
      image,
      image2,
      image3,
      title,
      price,
      description,
      description2,
      discount,
      specific,
      shoe,
    } = product;

    return (
      <section
        className='single-product'
        data-aos='fade-out'
        data-aos-delay='70'
        data-aos-duration='1600'
        data-aos-once='true'
      >
        <article
          data-aos='fade-out'
          data-aos-delay='70'
          data-aos-duration='1600'
          data-aos-once='true'
        >
          <h1>{title}</h1>
          <h2>${price}</h2>

          {product.discount ? (
            <h2>
              ON SALE! <span className='discount'>${discount}</span>
            </h2>
          ) : (
            ''
          )}

          {product.shoe ? (
            <>
              <label className='searchLabel'>
                <input
                  type='radio'
                  name='price'
                  value='650'
                  data-aos='fade-right'
                  data-aos-delay='70'
                  data-aos-duration='1600'
                  data-aos-once='true'
                ></input>
                <span
                  className='sizeSpan'
                  data-aos='fade-right'
                  data-aos-delay='70'
                  data-aos-duration='1600'
                  data-aos-once='true'
                >
                  40
                </span>
              </label>

              <label className='searchLabel'>
                <input
                  type='radio'
                  name='price'
                  value='650'
                  data-aos='fade-right'
                  data-aos-delay='70'
                  data-aos-duration='1600'
                  data-aos-once='true'
                ></input>
                <span
                  className='sizeSpan'
                  data-aos='fade-right'
                  data-aos-delay='70'
                  data-aos-duration='1600'
                  data-aos-once='true'
                >
                  41
                </span>
              </label>

              <label className='searchLabel'>
                <input
                  type='radio'
                  name='price'
                  value='650'
                  data-aos='fade-right'
                  data-aos-delay='70'
                  data-aos-duration='1600'
                  data-aos-once='true'
                ></input>
                <span
                  className='sizeSpan'
                  data-aos='fade-right'
                  data-aos-delay='70'
                  data-aos-duration='1600'
                  data-aos-once='true'
                >
                  42
                </span>
              </label>

              <label className='searchLabel'>
                <input
                  type='radio'
                  name='price'
                  value='650'
                  data-aos='fade-right'
                  data-aos-delay='70'
                  data-aos-duration='1600'
                  data-aos-once='true'
                ></input>
                <span
                  className='sizeSpan'
                  data-aos='fade-right'
                  data-aos-delay='70'
                  data-aos-duration='1600'
                  data-aos-once='true'
                >
                  43
                </span>
              </label>

              <label className='searchLabel'>
                <input
                  type='radio'
                  name='price'
                  value='650'
                  data-aos='fade-right'
                  data-aos-delay='70'
                  data-aos-duration='1600'
                  data-aos-once='true'
                ></input>
                <span
                  className='sizeSpan'
                  data-aos='fade-right'
                  data-aos-delay='70'
                  data-aos-duration='1600'
                  data-aos-once='true'
                >
                  44
                </span>
              </label>

              <label className='searchLabel'>
                <input
                  type='radio'
                  name='price'
                  value='650'
                  data-aos='fade-right'
                  data-aos-delay='70'
                  data-aos-duration='1600'
                  data-aos-once='true'
                ></input>
                <span
                  className='sizeSpan'
                  data-aos='fade-right'
                  data-aos-delay='70'
                  data-aos-duration='1600'
                  data-aos-once='true'
                >
                  45
                </span>
              </label>

              <label className='searchLabel'>
                <input
                  type='radio'
                  name='price'
                  value='650'
                  data-aos='fade-right'
                  data-aos-delay='70'
                  data-aos-duration='1600'
                  data-aos-once='true'
                ></input>
                <span
                  className='sizeSpan'
                  data-aos='fade-right'
                  data-aos-delay='70'
                  data-aos-duration='1600'
                  data-aos-once='true'
                >
                  46
                </span>
              </label>
            </>
          ) : (
            ''
          )}

          {product.sock ? (
            <>
              <label className='searchLabel'>
                <input
                  type='radio'
                  name='price'
                  value='650'
                  data-aos='fade-right'
                  data-aos-delay='70'
                  data-aos-duration='1600'
                  data-aos-once='true'
                ></input>
                <span
                  className='sizeSpan'
                  data-aos='fade-right'
                  data-aos-delay='70'
                  data-aos-duration='1600'
                  data-aos-once='true'
                >
                  45
                </span>
              </label>

              <label className='searchLabel'>
                <input
                  type='radio'
                  name='price'
                  value='650'
                  data-aos='fade-right'
                  data-aos-delay='70'
                  data-aos-duration='1600'
                  data-aos-once='true'
                ></input>
                <span
                  className='sizeSpan'
                  data-aos='fade-right'
                  data-aos-delay='70'
                  data-aos-duration='1600'
                  data-aos-once='true'
                >
                  46
                </span>
              </label>
            </>
          ) : (
            ''
          )}

          <button
            className='btn btn-primary btn-block cartBtn'
            onClick={() => {
              const sizes = document.querySelector(
                'input[name="price"]:checked'
              );

              if ((sizes && sizes != null) || product.accessory) {
                addToCart(product);
                history.push('/cart');
              } else {
                console.log('add size');

                const btnText = document.querySelector('.cartBtn');

                btnText.innerHTML = 'Choose size';

                setTimeout(function () {
                  btnText.innerHTML = 'Add to cart';
                }, 1700);
              }
            }}
          >
            add to cart
          </button>
        </article>

        <article
          data-aos='fade-out'
          data-aos-delay='70'
          data-aos-duration='1600'
          data-aos-once='true'
          className='descriptionArticle'
        >
          <p>{description}</p>
        </article>

        <article
          data-aos='fade-out'
          data-aos-delay='70'
          data-aos-duration='1600'
          data-aos-once='true'
          className='descriptionArticle'
        >
          <p>{description2}</p>
        </article>

        <img src={image} alt={title} className='single-product-image' />

        {!product.sock ? (
          <>
            <img src={image2} alt={title} className='single-product-image' />

            <img src={image3} alt={title} className='single-product-image' />
          </>
        ) : (
          ''
        )}
      </section>
    );
  }
}
