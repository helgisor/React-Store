import React from 'react';
import { CartContext } from '../context/cart';
import { UserContext } from '../context/user';
import { useHistory } from 'react-router-dom';
import EmptyCart from '../components/Cart/EmptyCart';
import {
  CardElement,
  StripeProvider,
  Elements,
  injectStripe,
} from 'react-stripe-elements';

function Checkout(props) {
  const { cart, total, clearCart } = React.useContext(CartContext);
  const { user, showAlert, hideAlert, alert } = React.useContext(UserContext);
  const history = useHistory();

  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [error, setError] = React.useState('');
  const isEmpty = !name || alert.show;

  function handleSubmit(e) {
    e.preventDefault();
    showAlert({ msg: 'submitting order... please wait' });
    setTimeout(() => {
      showAlert({ msg: 'order processed... thank you' });
    }, 800);
  }
  if (cart.length < 1) return <EmptyCart />;
  return (
    <section className='section form'>
      <h2 className='section-title'>checkout</h2>
      <form className='checkout-form'>
        <h3>
          order total : <span>${total}</span>
        </h3>

        <div className='form-control'>
          <label htmlFor='name'>name</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className='stripe-input'>
          <label htmlFor='card-element'>Credit or Debit Card</label>
          <p className='stripe-info'>
            Test using this credit card : <span>4242 4242 4242 4242</span>
            <br />
            enter any 5 digits for the zip code
            <br />
            enter any 3 digits for the CVC
          </p>
        </div>

        <CardElement className='card-element'></CardElement>
        <input type='text' value='Address' />

        {error && <p className='form-empty'>{error}</p>}

        {isEmpty ? (
          <p className='form-empty'>please fill out name field</p>
        ) : (
          <button
            type='submit'
            onClick={handleSubmit}
            className='btn btn-primary btn-block'
          >
            submit
          </button>
        )}
      </form>
    </section>
  );
}

const CardForm = injectStripe(Checkout);

const StripeWrapper = () => {
  return (
    <StripeProvider apiKey='pk_test_51HSNAxJFWAUlVopfm772GD9LdY2oshNlHKYQdIaj8Z4PZgZf318RniehyBpdHxMhbi8v7cCotUBzScvURRMWGStT009O7Xx8ch'>
      <Elements>
        <CardForm></CardForm>
      </Elements>
    </StripeProvider>
  );
};

export default StripeWrapper;
