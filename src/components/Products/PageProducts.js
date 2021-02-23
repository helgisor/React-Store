import React, { useEffect } from 'react';
import { ProductContext } from '../../context/products';
import ProductList from './ProductList';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function PaginatedProducts() {
  const { sorted, page, changePage } = React.useContext(ProductContext);

  useEffect(() => {
    Aos.init({});
  }, []);

  if (sorted[page]) {
    return (
      <section>
        <ProductList products={sorted[page]}></ProductList>

        <article className='pagination-buttons'>
          {/* prev button */}
          {page > 0 && (
            <button
              onClick={() => changePage(page - 1)}
              className='prev-page-btn'
            >
              <FaAngleDoubleLeft></FaAngleDoubleLeft>
            </button>
          )}
          {sorted.map((_, index) => {
            return (
              <button
                onClick={() => changePage(index)}
                key={index}
                className={`page-btn ${page === index && `page-btn-current`}`}
              >
                {index + 1}
              </button>
            );
          })}

          {page < sorted.length - 1 && (
            <button
              onClick={() => changePage(page + 1)}
              className='next-page-btn'
            >
              <FaAngleDoubleRight></FaAngleDoubleRight>
            </button>
          )}
        </article>
      </section>
    );
  } else {
    return (
      <h3 className='search-errors'>
        unfortunately your search query did not return any products
      </h3>
    );
  }
}
