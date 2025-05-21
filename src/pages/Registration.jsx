// src/pages/Registration.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ActivityCard from '../components/ActivityCard';
import Activities from '../components/Activities';
import CourseFilter from '../components/CourseFilter';
import registrations from '../data/registration';
import '../styles/registration.css';

// Dados de cursos (pode vir de uma API ou arquivo JSON)
const COURSES = [
  { id: 'einfo', name: 'Eng. Informática', color: '#007EBD' },
  { id: 'epi', name: 'Eng. Produção Industrial', color: '#D72638' },
  { id: 'emc', name: 'Eng. Mecânica', color: '#595A5B' },
  { id: 'ecivil', name: 'Eng. Civil', color: '#0B5589' },
  { id: 'eqm', name: 'Eng. Química', color: '#2E8524' },
  { id: 'electro', name: 'Eng. Electrotécnica', color: '#F9AA0E' }
];

const Registration = () => {
  const location = useLocation();
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Carrega as atividades do arquivo de dados
    setActivities(registrations);
    setFilteredActivities(registrations);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Ativa filtro via query string se presente
    const params = new URLSearchParams(location.search);
    const typeParam = params.get('type');
    if (typeParam) {
      setSelectedType(typeParam);
    }
  }, [location.search]);

  useEffect(() => {
    let filtered = activities;

    if (selectedCourse !== 'all') {
      filtered = filtered.filter(activity => activity.course === selectedCourse);
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(activity => activity.type === selectedType);
    }

    setFilteredActivities(filtered);
  }, [selectedCourse, selectedType, activities]);

  const activityTypes = [...new Set(activities.map(activity => activity.type))];

  return (
    <div className="registration-page">
      <section className="registration-hero">
        <div className="container">
          <h1>Inscreva-se nas Atividades</h1>
          <h3 style={{ textAlign: 'center' }}>
            Garanta seu lugar nos melhores eventos!
          As vagas são limitadas, depois de realizar a incrição receberá um e-mail de confirmação.
          </h3>
        </div>
      </section>

      <section className="registration-content">
        <div className="container">
          <div className="filters-bar">
            <CourseFilter
              courses={COURSES}
              selectedCourse={selectedCourse}
              onCourseSelect={setSelectedCourse}
              includeAllOption={true}
            />

            <div className="course-filter ">
              <h3>Actividades</h3>
              <div className="course-buttons">
                <button
                  className={`course-button ${selectedType === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedType('all')}
                >
                  Todos
                </button>
                {activityTypes.map((type, index) => (
                  <button
                    key={index}
                    className={`course-button ${selectedType === type ? 'active' : ''}`}
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="loading">Carregando atividades...</div>
          ) : filteredActivities.length > 0 ? (
            <div className="activities-grid">
              {isLoading ? (
                <div className="loading">Carregando atividades...</div>
              ) : filteredActivities.length > 0 ? (
                <div className="activities-grid">
                  <Activities
                    activities={filteredActivities}
                    onRegister={(activityId) => console.log("Inscrição:", activityId)}
                  />
                </div>
              ) : (
                <div className="no-results">
                  Nenhuma atividade encontrada com os filtros selecionados.
                </div>
              )}

            </div>
          ) : (
            <div className="no-results">
              Nenhuma atividade encontrada com os filtros selecionados.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Registration;