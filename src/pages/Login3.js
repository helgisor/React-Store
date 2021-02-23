import React, { useState, useEffect } from 'react';
import './Login2.css';
import { UserContext } from '../context/user';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login3() {
  let { user2 } = React.useContext(UserContext);

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch(e => alert(e.message));
      user2 = true;
      console.log(user2);
  };

  const register = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then(auth => {
      history.push("/");
    })
    .catch(e => alert(e.message));
    user2 = true;
  };








  return (
    // <div className='login'>
    //   <Link to='/'>
    //     <img
    //       className='login__logo'
    //       src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
    //       alt=''
    //     />
    //   </Link>

    //   <div className='login__container'>
    //     <h1>Sign In</h1>
    //     <form>
    //       <h5>Email</h5>
    //       <input
    //         value={email}
    //         onChange={(event) => setEmail(event.target.value)}
    //         type='email'
    //       />
    //       <h5>Password</h5>
    //       <input
    //         onChange={(event) => setPassword(event.target.value)}
    //         value={password}
    //         type='password'
    //       />
    //       <button onClick={login} type='submit' className='login__signInButton'>
    //         Sign In
    //       </button>
    //     </form>

    //     <p>
    //       By signing-in you agree to Amazon's Conditions. Please see our Privacy
    //       Notice.
    //     </p>
    //     <button onClick={register} className='login__registerButton'>
    //       Create your Amazon Account
    //     </button>
    //   </div>
    // </div>


<div class="container">
  
  
  
  <form>
    
    <div class="group">      
      <input type="text" required/>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Name</label>
    </div>
      
    <div class="group">      
      <input type="text" required/>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Email</label>
    </div>
    
  </form>
      
 
  
</div>

  );
}

export default Login3;
