import React from 'react'
import { ProductContext } from "../../context/products";
import Product from './Product';
import { Link } from 'react-router-dom';

function MedievalCoins() {
  const { sorted, page, changePage, medieval } = React.useContext(ProductContext);
  return (
    <section className='section'>
    <h2 className='section-title'></h2>
    <div className='products-center'>
      <Link to="/medieval"></Link>
    </div>
  </section>
  )
}

export default MedievalCoins
