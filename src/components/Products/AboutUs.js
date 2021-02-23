import React, { useEffect, fragment } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/products';
import Aos from 'aos';
import 'aos/dist/aos.css';
import category1 from '../../assets/category1.jpg';
import category5 from '../../assets/category5.jpg';
import category6 from '../../assets/category6.jpg';
import category9 from '../../assets/category9.jpg';

export default function AboutUs({ title, products }) {
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
      <h2 className='section-title store'>Categories</h2>
      <div className='featured-collections'>
        <Link className='featured-collection' to='products'>
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
          </div>
        </Link>

        <Link className='featured-collection' to='products'>
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
          </div>
        </Link>

        <Link className='featured-collection' to='products'>
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
          </div>
        </Link>

        <Link className='featured-collection' to='products'>
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
          </div>
        </Link>
      </div>
    </div>
  );
}
