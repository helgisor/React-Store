import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/products';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Hero({ children }) {
  const {
    sorted,
    page,
    changePage,
    setToMedieval,
    setToAncient,
    setToGolden,
  } = React.useContext(ProductContext);

  const scrollToFeatured = () => {
    let scrollToElement = document.querySelector('.featuredScroll');
    scrollToElement.scrollIntoView();
  };

  const scrollToCategories = () => {
    let scrollToElement = document.querySelector('.store');
    scrollToElement.scrollIntoView();
  };

  const scrollToAbout = () => {
    let scrollToElement = document.querySelector('.wrapper');
    scrollToElement.scrollIntoView();
  };

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className='hero'>
      <div id='stripes'>
        <span
          data-aos='fade-out'
          data-aos-delay='250'
          data-aos-duration='1600'
          data-aos-once='true'
        ></span>

        <span
          data-aos='fade-out'
          data-aos-delay='250'
          data-aos-duration='1600'
          data-aos-once='true'
        ></span>
        <span
          data-aos='fade-out'
          data-aos-delay='250'
          data-aos-duration='1600'
          data-aos-once='true'
        ></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span
          data-aos='fade in'
          data-aos-delay='100'
          data-aos-duration='1300'
        ></span>
        <span></span>
        <span></span>
      </div>

      <div className='banner'>
        <div className='order_information'>
          <div class='container'>
            <div
              className='animate six'
              data-aos='fade in'
              data-aos-delay='10
              0'
              data-aos-duration='1300'
              data-aos-once='true'
            >
              <span>Q</span>
              <span>u</span>
              <span>a</span>
              <span>l</span>
              <span>i</span>
              <span>t</span>
              <span>y</span> &nbsp;
              <span>P</span>
              <span>r</span>
              <span>o</span>
              <span>d</span>
              <span>u</span>
              <span>c</span>
              <span>t</span>
              <span>s</span> <br></br>
              <span>S</span>
              <span>i</span>
              <span>n</span>
              <span>c</span>
              <span>e</span> &nbsp;
              <span>1</span>
              <span>9</span>
              <span>9</span>
              <span>7</span>
            </div>
          </div>
        </div>

        <div
          className='banner_options'
          data-aos='zoom-out-right'
          data-aos-delay='100'
          data-aos-duration='1300'
        >
          <div
            className='banner_product first_object'
            onClick={scrollToFeatured}
          >
            <p className='banner_p'>New Shoes!</p>
          </div>

          <div
            className='banner_product middle_object'
            onClick={scrollToCategories}
          >
            <p className='banner_p'>Our Store!</p>
          </div>

          <div className='banner_product last_object' onClick={scrollToAbout}>
            <p className='banner_p'>About Us!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
