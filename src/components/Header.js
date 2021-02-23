import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../assets/sly.png';
import CartLink from './Cart/CartLink';
import { UserContext } from '../context/user';
import { auth } from '../pages/firebase';
import { useStateValue } from '../context/StateProvider';
import { CartContext } from '../context/cart';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { ProductContext } from '../context/products';

export default function Header() {
  const {
    sorted,
    page,
    changePage,
    setToMedieval,
    setToAncient,
    setToGolden,
    setToAll,
  } = React.useContext(ProductContext);

  let { userLogout } = React.useContext(UserContext);
  const { clearCart } = React.useContext(CartContext);
  const [{ user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
      clearCart();
    }
  };

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <header className='header'>
      <nav
        data-aos='fade-out'
        data-aos-delay='250'
        data-aos-duration='1600'
        data-aos-once='true'
      >
        <ul>
          <div>
            <Link className='header_link home' to='/'>
              <div className='animate '>
                <span>H</span>
                <span>o</span>
                <span>m</span>
                <span>e</span>
              </div>
            </Link>

            <Link
              className='header_link home'
              to='/products'
              onClick={setToAll}
            >
              <div className='animate  products'>
                <span>P</span>
                <span>r</span>
                <span>o</span>
                <span>d</span>
                <span>u</span>
                <span>c</span>
                <span>t</span>
                <span>s</span>
              </div>
            </Link>
          </div>
          <div>
            <Link to='/' className='header_link'>
              <img src={logo2} alt='vintage tech logo' className='logo' />
            </Link>
          </div>
          <div>
            <Link to={!user && '/login'} className='header__link header_link'>
              <div onClick={login} className='header__option'>
                <span className='header__optionLineOne'></span>
                <span className='header__optionLineTwo'>
                  {user ? (
                    <div className='animate  signUp'>
                      <span>L</span>
                      <span>o</span>
                      <span>g</span> &nbsp;
                      <span>O</span>
                      <span>u</span>
                      <span>t</span>
                    </div>
                  ) : (
                    <div className='animate  signUp'>
                      <span>S</span>
                      <span>i</span>
                      <span>g</span>
                      <span>n</span> &nbsp;
                      <span>I</span>
                      <span>n</span>
                    </div>
                  )}
                </span>
              </div>
            </Link>

            <CartLink />
          </div>
        </ul>
      </nav>
    </header>
  );
}
