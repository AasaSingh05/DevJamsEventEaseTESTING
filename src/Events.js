import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Events() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // In a real app, you would fetch events from your API here
    const fetchEvents = async () => {
      // Simulating API call with setTimeout
      setTimeout(() => {
        const dummyEvents = [
          { id: 1, name: 'Tech Talk', club: 'Computer Science Club', date: '2023-06-15', category: 'academic' },
          { id: 2, name: 'Annual Sports Meet', club: 'Sports Club', date: '2023-07-01', category: 'sports' },
          { id: 3, name: 'Art Exhibition', club: 'Fine Arts Society', date: '2023-06-20', category: 'cultural' },
          { id: 4, name: 'Debate Competition', club: 'Debating Society', date: '2023-06-25', category: 'academic' },
        ];
        setEvents(dummyEvents);
      }, 1000);
    };

    fetchEvents();
  }, []);

  const filteredEvents = filter === 'all' ? events : events.filter(event => event.category === filter);

  return (
    <div className="events-page">
      <h1>Upcoming Events</h1>
      <div className="filter-options">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('academic')} className={filter === 'academic' ? 'active' : ''}>Academic</button>
        <button onClick={() => setFilter('sports')} className={filter === 'sports' ? 'active' : ''}>Sports</button>
        <button onClick={() => setFilter('cultural')} className={filter === 'cultural' ? 'active' : ''}>Cultural</button>
      </div>
      <div className="events-list">
        {filteredEvents.map(event => (
          <div key={event.id} className="event-card">
            <h2>{event.name}</h2>
            <p>Organized by: {event.club}</p>
            <p>Date: {event.date}</p>
            <Link to={`/events/${event.id}`} className="btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;