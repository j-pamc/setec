// src/components/Activities.jsx
import React from 'react';
import '../styles/activities.css';
import '../styles/activityCard.css';
import ActivityCard from './ActivityCard';

const Activities = ({ activities }) => {
  // Ordena: atividades com link primeiro, depois as sem link (Brevemente)
  const sortedActivities = [
    ...activities.filter(a => a.link),
    ...activities.filter(a => !a.link)
  ];
  return (
    <div className="activities-container">
      {sortedActivities.map((activity) => (
        <ActivityCard
          key={activity.id}
          title={activity.title}
          description={activity.description}
          date={activity.date}
          time={activity.time}
          location={activity.location}
          by={activity.by}
          link={activity.link}
        />
      ))}
    </div>
  );
};

export default Activities;
