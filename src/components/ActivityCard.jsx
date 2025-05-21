import React from 'react';
import '../styles/activityCard.css';

const ActivityCard = ({ title, description, date, time, location, by, link }) => {
  return (
    <div className="activity-card">
      <h3>{title}</h3>
      <p className="activity-description">{description}</p>
      <p className="activity-location"><strong>Por:</strong> {by}</p>
      <p className="activity-location"><strong>Dia:</strong> {date} <strong>Horário:</strong> {time}</p>
      {location && (
        <p className="activity-location">
          <strong>Local:</strong> {location}
        </p>
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }}>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="activity-btn">Inscreva-se</button>
          </a>
        ) : (
          <button className="activity-btn activity-btn-disabled" disabled>Brevemente</button>
        )}

      </div>
    </div>
  );
};

export default ActivityCard;

/*
/*import React from 'react';
import ActivityCard from './ActivityCard';

const Activities = () => {
  const activities = [
    { id: 1, title: 'Atividade 1', description: 'Descrição da atividade 1' },
    { id: 2, title: 'Atividade 2', description: 'Descrição da atividade 2' },
  ];

  return (
    <div className="activities">
      {activities.map((activity) => (
        <ActivityCard key={activity.id} title={activity.title} description={activity.description} />
      ))}
    </div>
  );
};

export default Activities; 

/*
Backup
const ActivityCard = ({ activity, course }) => {
  const courseColors = {
    einfo: '#007EBD',
    epi: '#D72638',
    emc: '#595A5B',
    ecivil: '#0B5589',
    eqm: '#2E8524',
    electro: '#F9AA0E'
  };

  return (
    <div className="activity-card" style={{ borderTop: `4px solid ${courseColors[course]}` }}>
      <h3>{activity.name}</h3>
      <p className="activity-time">{activity.date} • {activity.time}</p>
      <p className="activity-description">{activity.description}</p>
      <button className="activity-btn">Inscrever-se</button>
    </div>
  );
};*/