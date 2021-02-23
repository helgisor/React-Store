import React, { useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Home from './pages/Home';
import Login2 from './pages/Login2';
import Login3 from './pages/Login3';
import Products from './pages/Products';
import MedievalProducts from './pages/MedievalProducts';
import ProductDetails from './pages/ProductDetails';

import Header from './components/Header';
import Alert from './components/Alert';
import ScrollButton from './components/ScrollButton';
import { auth } from './pages/firebase';
import { useStateValue } from './context/StateProvider';

export default function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth > 500) {
      document.querySelector('.animate').classList.remove('seven');
      document.querySelector('.animate').classList.add('eight');

      document.querySelector('.products').classList.remove('seven');
      document.querySelector('.products').classList.add('eight');

      document.querySelector('.signUp').classList.remove('seven');
      document.querySelector('.signUp').classList.add('eight');

      document.querySelector('.cartSeven').classList.remove('seven');
      document.querySelector('.cartSeven').classList.add('eight');
    } else {
      document.querySelector('.animate').classList.remove('eight');

      document.querySelector('.products').classList.remove('eight');

      document.querySelector('.signUp').classList.remove('eight');

      document.querySelector('.cartSeven').classList.remove('eight');
    }
  }, []);

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.querySelector('.logo').classList.add('pop_out');
        document.querySelector('.logo').classList.remove('pop_in');

        if (window.innerWidth > 500) {
          document.querySelector('.animate').classList.remove('eight');

          document.querySelector('.products').classList.remove('eight');

          document.querySelector('.signUp').classList.remove('eight');

          document.querySelector('.cartSeven').classList.remove('eight');
        }
      } else {
        document.querySelector('.logo').classList.remove('pop_out');
        document.querySelector('.logo').classList.add('pop_in');

        if (window.innerWidth > 500) {
          document.querySelector('.animate').classList.remove('seven');
          document.querySelector('.animate').classList.add('eight');

          document.querySelector('.products').classList.remove('seven');
          document.querySelector('.products').classList.add('eight');

          document.querySelector('.signUp').classList.remove('seven');
          document.querySelector('.signUp').classList.add('eight');

          document.querySelector('.cartSeven').classList.remove('seven');
          document.querySelector('.cartSeven').classList.add('eight');
        }
      }
    }
  }, []);

  function handleToken(token, addresses) {
    console.log(token, addresses);
  }

  return (
    <Router>
      <Header />
      <Alert />
      <ScrollButton />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        {/* <PrivateRoute path='/checkout' name="john" msg="hello">
          <Checkout />
        </PrivateRoute> */}
        {/* <StripeCheckout 
          stripeKey="pk_test_51HSNAxJFWAUlVopfm772GD9LdY2oshNlHKYQdIaj8Z4PZgZf318RniehyBpdHxMhbi8v7cCotUBzScvURRMWGStT009O7Xx8ch"
          token={handleToken}
        /> */}
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route path='/login'>
          <Login2 />
        </Route>
        <Route path='/login3'>
          <Login3 />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route
          path='/products/:id'
          children={<ProductDetails></ProductDetails>}
        >
          {/* <Login /> */}
        </Route>
        <Route exact path='/medieval'>
          <MedievalProducts />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
