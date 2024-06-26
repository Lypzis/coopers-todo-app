import React, { useState } from "react";
import Login from "../components/Auth/Login";
import { useAuth } from "../contexts/AuthContext";
import logo from "../img/logo.png";

function Layout(props) {
  const [showLogin, setShowLogin] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const handleLoginClick = () => {
    if (isAuthenticated) {
      logout();
    } else {
      setShowLogin(true); // Open login modal
    }
  };

  const handleClose = () => {
    setShowLogin(false); // Close login modal
  };

  return (
    <div>
      <header className='header'>
        <div className='header__top-box'>
          <img src={logo} alt='Coopers logo' className='header__logo' />
          <button
            className='btn btn--login paragraph-primary'
            aria-label={isAuthenticated ? "Logout" : "Login"}
            onClick={handleLoginClick}
          >
            {isAuthenticated ? "Logout" : "Login"}
          </button>
        </div>
      </header>

      <main className='main' role='main'>
        {props.children}
      </main>

      <footer className='footer' role='contentinfo'>
        <h2 className='heading-secondary heading-secondary--footer heading-secondary--in-black'>
          Need help?
        </h2>
        <div className='footer-box'>
          <a
            href='mailto:coopers@coopers.pro'
            className='footer-paragraph footer-paragraph--in-black'
          >
            coopers@coopers.pro
          </a>
          <p className='paragraph-secondary paragraph-secondary--copyright'>
            &copy; 2024 Coopers. All rights reserved.
          </p>
        </div>
        <span className='medium-rectangle'></span>
      </footer>

      <Login show={showLogin} onClose={handleClose} />
    </div>
  );
}

export default Layout;
