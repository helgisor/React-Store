import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import FeaturedProducts from '../components/Products/FeaturedProducts';
import Video from '../components/Products/Video';

import Store2 from '../components/Products/Store2';

import { ProductContext } from '../context/products';
import Stories from '../components/Products/Stories';
import Footer from '../components/Products/Footer';

export default function Home() {
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
      <Hero>
        <Link to='/products' className='btn btn-primary btn-hero'>
          our products
        </Link>
      </Hero>

      <Video />
      <Store2 />
      <FeaturedProducts />

      <section className='section category-section'>
        <Stories />

        <Footer />
      </section>
    </>
  );
}
