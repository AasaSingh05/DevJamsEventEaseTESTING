import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <div className="content">
        <h1 className="title">Welcome to EventEase</h1>
        <p className="subtitle">Your gateway to all the cool stuff happening around</p>
        <Link to="/events" className="btn go-to-events">Go to Events</Link>
      </div>
    </main>
  );
}

export default Home;
