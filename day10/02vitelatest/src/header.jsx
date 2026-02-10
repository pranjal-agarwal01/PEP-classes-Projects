import React from 'react';
import './Header.css';

const Home = () => {
  return (
    <a href="#home" className="nav-link">
      Home
    </a>
  );
};

const About = () => {
  return (
    <a href="#about" className="nav-link">
      About
    </a>
  );
};

const ContactUs = () => {
  return (
    <a href="#contact" className="nav-link">
      Contact Us
    </a>
  );
};

const Login = () => {
  return (
    <button className="login-btn">
      Login
    </button>
  );
};


const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo">
            MyShop
          </div>
          <nav className="nav">
            <Home />
            <About />
            <ContactUs />
            <Login />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;