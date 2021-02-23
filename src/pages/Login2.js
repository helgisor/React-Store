import React, { useState } from 'react';
import { UserContext } from '../context/user';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import styled from 'styled-components';

function Login() {
  let { user2 } = React.useContext(UserContext);

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((e) => alert(e.message));
    user2 = true;
    console.log(user2);
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((e) => alert(e.message));
    user2 = true;
  };

  return (
    <div className='login'>
      <div
        className='login__container'
        data-aos='fade-out'
        data-aos-delay='200'
        data-aos-duration='1600'
        data-aos-once='true'
      >
        <h1>Sign In</h1>
        <form>
          <div class='group'>
            <input
              type='text'
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type='email'
              className='emailInput'
            />
            <span class='highlight'></span>
            <span class='bar'></span>
            <label className='emailLabel'>Email</label>
          </div>

          <div class='group'>
            <input
              type='text'
              required
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              type='password'
              className='emailInput'
            />
            <span class='highlight'></span>
            <span class='bar'></span>
            <label className='emailLabel'>Password</label>
          </div>
        </form>

        <button onClick={login} type='submit' className='login__signInButton'>
          Sign In
        </button>
        <button onClick={register} className='login__registerButton'>
          Create Your Account
        </button>
      </div>
    </div>
  );
}

export default Login;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;
