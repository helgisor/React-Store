import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import "./sass.scss";
import App from './App';
import ProductProvider from './context/products';
import { CartProvider } from './context/cart';
import { UserProvider } from './context/user';
import { StateProvider } from './context/StateProvider';
import reducer, { initialState } from './context/reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
