import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>SETEC 2025</h3>
            <p>Semana Tecnológica de Engenharias</p>
            <p>26 a 28 de Maio</p>
            <p>ISPTEC - Luanda, Angola</p>
          </div>

          <div className="footer-section links">
            <h3>Links Rápidos</h3>
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="/inscricoes">Inscrições</a></li>
              <li><a href="/galeria">Galeria</a></li>
              <li><a href="/cronograma">Cronograma</a></li>
              <li><a href="/exposicoes">Exposições</a></li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contactos</h3>
            <p><i className="fas fa-envelope"></i> det@isptec.co.ao</p>
            <p><i className="fas fa-phone"></i> +244 943 010 475</p>
            <p><i className="fas fa-map-marker-alt"></i> ISPTEC, Talatona, Luanda</p>
            <p><i id="Slink" className="fas fa-map-marker-alt"></i>
              <a
                href="https://www.instagram.com/setec.ao"
              >
                Instagram @setec.ao
              </a></p>

          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SETEC - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;