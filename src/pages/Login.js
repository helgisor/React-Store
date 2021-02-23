import React from 'react';

import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/user';
import { auth } from './firebase';

export default function Login() {
  const history = useHistory();

  const { userLogin, alert, showAlert } = React.useContext(UserContext);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('default');
  const [isMember, setIsMember] = React.useState(true);

  let isEmpty = !email || !password || !username || alert.show;

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in, redirect to homepage...
        history.push('/');
      })
      .catch((e) => alert(e.message));
  };

  const handleSubmit = async (e) => {
    showAlert({
      msg: 'accessing user data. please wait....',
    });
    e.preventDefault();
    login(e);
    showAlert({
      msg: `you are logged in : ${username}. show away my friend`,
    });
  };

  return (
    <section className='form section'>
      <h2 className='section-title'>{isMember ? 'sign in' : 'register'}</h2>
      <form className='login-form'>
        <div className='form-control'>
          <label htmlFor='email'>email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='password'>password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {!isMember && (
          <div className='form-control'>
            <label htmlFor='username'>username</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}

        {isEmpty && (
          <p className='form-empty'>please fill out all form fields</p>
        )}

        {!isEmpty && (
          <button
            type='submit'
            className='btn btn-block btn-primary'
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}

        <p className='register-link'>
          {isMember ? 'need to register' : 'already a member'}

          <button type='button'>click here</button>
        </p>
      </form>
    </section>
  );
}
