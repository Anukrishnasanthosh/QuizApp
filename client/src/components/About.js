import React from 'react';
import '../styles/style.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const nav = useNavigate()
  const handleGetStartedClick = () => {
    nav('/login');
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to the Future of Quizzes</h1>
        <p>Engage and learn your knowledge with our interactive quizzes.</p>
        <button className="cta-button" onClick={handleGetStartedClick}>Get Started</button>
      </div>
      <div className="features-section">
        <div className="feature">
          <h2>Feature One</h2>
          <p>Discover our unique, handcrafted quizzes designed to test your skills.</p>
        </div>
        <div className="feature">
          <h2>Feature Two</h2>
          <p> Track your progress over time.</p>
        </div>
        <div className="feature">
          <h2>Feature Three</h2>
          <p>Learn something new every day with our topics.</p>
        </div>
      </div>
    </div>
  )
}
export default About
