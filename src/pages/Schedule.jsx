// src/pages/Schedule.jsx
import React, { useState, useEffect } from 'react';
import ScheduleDay from '../components/ScheduleDay';
import CourseFilter from '../components/CourseFilter';
import '../styles/schedule.css';
import '../styles/scheduleDay.css';
import scheduleData from '../data/schedule';

// Dados de cursos (pode vir de uma API ou arquivo JSON)
const COURSES = [
  { id: 'all', name: 'Todos', color: '#0A2463' },
  { id: 'einfo', name: 'Eng. Informática', color: '#007EBD' },
  { id: 'epi', name: 'Eng. Produção Industrial', color: '#D72638' },
  { id: 'emc', name: 'Eng. Mecânica', color: '#595A5B' },
  { id: 'ecivil', name: 'Eng. Civil', color: '#0B5589' },
  { id: 'eqm', name: 'Eng. Química', color: '#2E8524' },
  { id: 'electro', name: 'Eng. Electrotécnica', color: '#F9AA0E' }
];

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [filteredSchedule, setFilteredSchedule] = useState([]);
  const [selectedDay, setSelectedDay] = useState('26');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Carrega o cronograma do arquivo de dados
    const data = Array.isArray(scheduleData) ? scheduleData : (scheduleData.default || scheduleData);
    setSchedule(data);
    setFilteredSchedule(data.filter(event => event.day === '26'));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    let filtered = schedule.filter(event => event.day === selectedDay);
    if (selectedCourse !== 'all') {
      filtered = filtered.filter(event => event.course === selectedCourse);
    }
    // Ordena por horário (assume formato HH:MM-HH:MM ou HH:MM)
    filtered = filtered.slice().sort((a, b) => {
      const getStart = (t) => t && t.split('-')[0] ? t.split('-')[0] : '00:00';
      return getStart(a.time).localeCompare(getStart(b.time));
    });
    setFilteredSchedule(filtered);
  }, [selectedDay, selectedCourse, schedule]);

  const days = ['26', '27', '28'];

  return (
    <div className="schedule-page">
      <section className="schedule-hero">
        <div className="container">
          <h1>Cronograma do Evento</h1>
          <p>Confira a programação completa</p>
        </div>
      </section>

      <section className="schedule-content">
        <div className="container">
        <div className="schedule-filters">
        <div className="filters-bar">
            <CourseFilter
              courses={COURSES}
              selectedCourse={selectedCourse}
              onCourseSelect={setSelectedCourse}
            />

            <div className="day-selector day-title">
              {days.map((day) => (

                <button
                  key={day}
                  className={`btn day-button ${selectedDay === day ? 'active' : ''}`}
                  onClick={() => setSelectedDay(day)}
                >
                  Dia {day}
                </button>
              ))}
            </div>
          </div>
        </div>


          {isLoading ? (
            <div className="loading">Carregando cronograma...</div>
          ) : filteredSchedule.length > 0 ? (
            <ScheduleDay 
              day={`Dia ${selectedDay} de Maio`} 
              events={filteredSchedule} 
            />
          ) : (
            <div className="no-events">
              Nenhum evento programado para este dia/filtro.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Schedule;