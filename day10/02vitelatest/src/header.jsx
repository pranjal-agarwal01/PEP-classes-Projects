import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';  

const Home = () => <a href="#home" className="nav-link">Home</a>;
const About = () => <a href="#about" className="nav-link">About</a>;
const ContactUs = () => <a href="#contact" className="nav-link">Contact Us</a>;
const Login = () => <button className="login-btn">Login</button>;

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo">MyShop</div>
          <nav className="nav">
            <Link to="/">Home</Link>           
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/login">Login</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;