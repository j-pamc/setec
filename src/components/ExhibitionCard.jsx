import React from 'react';
import '../styles/exhibitionCard.css';

const ExhibitionCard = ({ exhibition }) => {
  return (
    <div className="exhibition-card">
      <div className="exhibition-header">
        <img src={exhibition.logo} alt={exhibition.department} className="exhibition-logo" />
        <h3>{exhibition.department}</h3>
      </div>
      <img src={exhibition.standImage} alt={`Stand ${exhibition.id}`} className="stand-image" />
      <div className="exhibition-info">
        <div className='same-line'>
          <p className="team">{exhibition.name}</p>
          <p className="stand-number"><strong> {exhibition.course} Stand #{exhibition.standNumber}</strong></p>
        </div>
        <p className="description">{exhibition.description}</p>
        <p className="course"><strong>Integrantes | </strong> {exhibition.members}</p>
        <p className="course"><strong>Contacto | </strong> {exhibition.contact}</p>

      </div>
    </div>
  );
};


export default ExhibitionCard;