import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cart';
export default function CartLink() {
  const { cartItems } = React.useContext(CartContext);

  return (
    <div className='cart-link-container'>
      <Link to='/cart'>
        {' '}
        <div className='animate cartSeven '>
          <span>C</span>
          <span>a</span>
          <span>r</span>
          <span>t</span>
        </div>
      </Link>
      <span className='cart-link-total'>{cartItems}</span>
    </div>
  );
}
