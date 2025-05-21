import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/navbar.png';
import '../styles/navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="SETEC 2025" className="logo-image" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={show}
          onClick={() => setShow((prev) => !prev)}
        >
          <span className="navbar-toggler-icon">&#9776;</span>
        </button>
        <div className={`navbar-collapse${show ? ' show' : ''}`}
          onClick={() => setShow(false)}
        >
          <Link to="/" className="nav-link">Início</Link>
          <Link to="/cronograma" className="nav-link">Cronograma</Link>
          <Link to="/inscricoes" className="nav-link">Inscrições</Link>
          <Link to="/exposicoes" className="nav-link">Exposições</Link>
          <Link to="/galeria" className="nav-link">Galeria</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;