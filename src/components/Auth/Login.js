// src/components/Auth/Login.js
import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext"; // Adjust the path as necessary
import signIn from "../../img/signIn.png";

function Login({ show, onClose }) {
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(null); // Ensure previous errors are cleared each time

    try {
      await login({ email, password });
      onClose(); // Close the modal on successful login
    } catch (error) {
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  // Do not render Login if already authenticated
  if (isAuthenticated) return null;

  return (
    <dialog
      className='modal'
      open={show}
      aria-labelledby='signInModalTitle'
      aria-describedby='signInModalDesc'
    >
      <div className='modal-content' role='dialog' aria-modal='true'>
        <button onClick={onClose} className='btn btn__close' aria-label='Close'>
          Close
        </button>
        <div className='modal-body'>
          <div className='modal-left'>
            <img src={signIn} alt='Sign in' className='modal-image' />
          </div>
          <div className='modal-right'>
            <h1 id='signInModalTitle' className='heading-primary'>
              <span className='heading-primary--main'>Sign in</span>
              <span className='heading-primary--login'>
                to access your list
              </span>
            </h1>
            <form className='modal-form' onSubmit={handleLogin}>
              <div className='modal-form-row'>
                <label htmlFor='email' className='modal-label'>
                  User:
                </label>
                <input
                  id='email'
                  type='email'
                  name='email'
                  value={email}
                  autoFocus
                  autoComplete='true'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='modal-form-row'>
                <label htmlFor='password' className='modal-label'>
                  Password:
                </label>
                <input
                  id='password'
                  type='password'
                  name='password'
                  value={password}
                  autoComplete='true'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className='error-message'>{error}</p>}
              <input
                type='submit'
                className='btn btn__main btn__main--signin heading-tertiary'
                value='Sign in'
              />
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default Login;
