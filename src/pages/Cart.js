import React from 'react';
import { CartContext } from '../context/cart';
import { UserContext } from '../context/user';
import EmptyCart from '../components/Cart/EmptyCart';
import CartItem from '../components/Cart/CartItem';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import StripeCheckout from 'react-stripe-checkout';

export default function Cart() {
  const { cart, total, clearCart } = React.useContext(CartContext);
  const [{ user }, dispatch] = useStateValue();

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  function handleToken(token, addresses) {
    clearCart();
  }

  return (
    <section className='cart-items sections'>
      <h2>your cart</h2>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <h2>total : ${total}</h2>
      {user ? (
        <StripeCheckout
          className='btn btn-primary btn-block'
          stripeKey='pk_live_51HSNAxJFWAUlVopfFXVq0AoOZmE1SwbcNetlBKK0KuKSXsB4MDhMR7Pws94Z0ljGU2Nn4xAcvJLZX8gz8Yl2P9xQ004yKaq3dg'
          token={handleToken}
          billingAddress
          shippingAddress
        />
      ) : (
        <Link to='/login' className='btn btn-primary btn-block'>
          login
        </Link>
      )}
    </section>
  );
}
