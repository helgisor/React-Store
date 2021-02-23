import React, { useEffect } from 'react';
import ProductList from './ProductList';
import { ProductContext } from '../../context/products';
import Loading from '../Loading';
import anime from 'animejs/lib/anime.es.js';

export default function FeaturedProducts() {
  const title = (
    <h3 class='ml15'>
      <span class='word wordMargin'>Out</span>
      <span class='word'>now!</span>
    </h3>
  );

  useEffect(() => {
    smallLetters();

    function smallLetters() {
      anime
        .timeline({ loop: true })
        .add({
          targets: '.ml15 .word',
          scale: [2.5, 1],
          opacity: [0, 1],
          easing: 'easeOutCirc',
          duration: 300,
          delay: (el, i) => 800 * i,
        })
        .add({
          targets: '.ml15',
          opacity: 0,
          duration: 1400,
          easing: 'easeOutExpo',
          delay: 1000,
        });
    }
  }, []);

  const { loading, featured } = React.useContext(ProductContext);
  if (loading) {
    return <Loading />;
  }

  return <ProductList title={title} products={featured} />;
}
