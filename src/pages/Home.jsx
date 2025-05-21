import React from 'react';
import Countdown from '../components/Countdown';
import Map from '../components/Map';
import '../styles/home.css';
import info from "../assets/images/index.png";
import last from "../assets/images/gallery-1.jpg";

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <img
            src={info}
            alt="Calendário e título do evento"
            className="hero-img"
          />
          <Countdown targetDate="2025-05-26T10:00:00" />
          <a href="/inscricoes" className="cta-button">Inscreva-se Agora</a>
        </div>
      </section>

      <section className="about">
        <div className="home-container">
          <h2 className="section-title">Sobre a SETEC</h2>
          <div className="about-content">
            <div className="about-text">
              <p>A <strong>Semana Tecnológica de Engenharias (SETEC)</strong> é o principal evento académico e tecnológico promovido pelo ISPTEC. Reúne estudantes, professores, investigadores e profissionais da área das engenharias num ambiente dinâmico de aprendizagem, partilha de experiências e exploração de novas tecnologias.</p>
              <p>Durante três dias intensos, a SETEC 2025 oferecerá uma programação diversificada com <strong>palestras temáticas, mesas redondas, workshops práticos, competições académicas e uma feira de projetos</strong> aberta ao público. É uma oportunidade única para aprender com especialistas, apresentar soluções inovadoras e criar conexões relevantes para o futuro profissional.</p>
              <p>Em 2025, o evento decorre sob o lema <em>“Engenharias, Transformando Ideias do Presente em Soluções para o Futuro”</em>, reforçando o papel fundamental da engenharia no desenvolvimento da sociedade e na resolução de desafios globais.</p>
              <p>A SETEC é mais do que um evento — é um espaço de inspiração, colaboração e descoberta para todos os que acreditam na tecnologia como motor de mudança.</p>
            </div>
            <div className="about-image">
              <img
                src={last}
                alt="Calendário e título do evento"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="home-container">
          <h2 className="section-title">Mapa SETEC</h2>
          <Map />
          <p>Talatona, Luanda, Angola</p>
        </div>
      </section>
    </div>
  );
};

export default Home;