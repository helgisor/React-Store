import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/user';
import { CartContext } from '../context/cart';
import { auth } from '../pages/firebase';

export default function LoginLink({}) {
  let { user, user2, userLogout } = React.useContext(UserContext);
  const { clearCart } = React.useContext(CartContext);

  if (!user2) {
    user2 = true;
    return <Link to='/login'>Login</Link>;
  }

  if (user2) {
    return (
      <button
        className='login-btn'
        onClick={() => {
          auth.signOut();
          user2 = true;
          clearCart();
        }}
      >
        logout
      </button>
    );
  }
}
