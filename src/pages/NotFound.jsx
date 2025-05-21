import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/notfound.css';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate(location.pathname, { replace: true });
  };
  const goHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2 className="notfound-subtitle">Página não encontrada</h2>
      <p className="notfound-message">
        O endereço <span className="notfound-path">{location.pathname}</span> não foi encontrado.<br />
        Verifique se o link está correto ou tente novamente.
      </p>
      <div>
        <button onClick={handleRetry} className="notfound-btn">
          Tentar novamente
        </button>
        <button onClick={goHome} className="notfound-btn">
          Página Inicial
        </button>
      </div>
    </div>
  );
};

export default NotFound;
