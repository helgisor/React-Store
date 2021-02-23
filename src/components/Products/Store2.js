import React, { useEffect, fragment } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/products';
import Aos from 'aos';
import 'aos/dist/aos.css';
import category1 from '../../assets/category1.jpg';
import category5 from '../../assets/category5.jpg';
import category6 from '../../assets/category6.jpg';
import category9 from '../../assets/category9.jpg';

export default function Store2({ title, products }) {
  const {
    sorted,
    page,
    changePage,
    setToMedieval,
    setToAncient,
    setToGolden,
  } = React.useContext(ProductContext);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div id='shopify-section-home-collections'>
      <h2
        className='section-title store'
        data-aos='fade-up'
        data-aos-delay='130'
        data-aos-duration='1400'
      >
        Categories
      </h2>
      <div className='featured-collections'>
        <Link
          className='featured-collection'
          to='products'
          onClick={setToMedieval}
          data-aos='fade-down-right'
          data-aos-delay='130'
          data-aos-duration='1400'
        >
          <div className='featured-collection__bg imageOne'>
            <figure className='snip1104 red'>
              <img src={category1} alt='sample33' />

              <figcaption>
                <h2>
                  Men's <span> Shoes</span>
                </h2>
              </figcaption>

              <a href='#'></a>
            </figure>

            <figure className='redSmall'>
              <figcaption>
                <h2>
                  Men's <span> Shoes</span>
                </h2>
              </figcaption>
            </figure>
          </div>
        </Link>

        <Link
          className='featured-collection'
          to='products'
          onClick={setToAncient}
          data-aos='fade-down-left'
          data-aos-delay='130'
          data-aos-duration='1400'
        >
          <div className='featured-collection__bg imageTwo'>
            <figure className='snip1104 red'>
              <img src={category5} alt='sample33' />

              <figcaption>
                <h2>
                  Women's <span> Shoes</span>
                </h2>
              </figcaption>

              <a href='#'></a>
            </figure>

            <figure className='redSmall'>
              <figcaption>
                <h2>
                  Women's <span> Shoes</span>
                </h2>
              </figcaption>
            </figure>
          </div>
        </Link>

        <Link
          className='featured-collection'
          to='products'
          onClick={setToGolden}
          data-aos='fade-up-right'
          data-aos-delay='130'
          data-aos-duration='1400'
        >
          <div className='featured-collection__bg imageThree'>
            <figure className='snip1104 red'>
              <img src={category9} alt='sample33' />

              <figcaption>
                <h2>
                  <span> Socks</span>
                </h2>
              </figcaption>

              <a href='#'></a>
            </figure>

            <figure className='redSmall'>
              <figcaption>
                <h2>Socks</h2>
              </figcaption>
            </figure>
          </div>
        </Link>

        <Link
          className='featured-collection'
          to='products'
          onClick={setToGolden}
          data-aos='fade-up-left'
          data-aos-delay='130'
          data-aos-duration='1400'
        >
          <div className='featured-collection__bg imageFour'>
            <figure className='snip1104 red'>
              <img src={category6} alt='sample33' />

              <figcaption>
                <h2>
                  <span> Accessories</span>
                </h2>
              </figcaption>

              <a href='#'></a>
            </figure>

            <figure className='redSmall'>
              <figcaption>
                <h2>Accessories</h2>
              </figcaption>
            </figure>
          </div>
        </Link>
      </div>
    </div>
  );
}
