import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = ({ description, timer, link, visible }) => {
  const [countdown, setCountdown] = useState(timer);

  useEffect(() => {
    if (visible && countdown > 0) {
      const interval = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [countdown, visible]);

  if (!visible || countdown <= 0) return null;

  return (
    <div className="banner">
      <p>{description}</p>
      <p>Time left: {countdown}s</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Learn More</a>
    </div>
  );
};

export default Banner;
