import React, { useEffect, useState } from 'react';
import './CountdownTimer.css';

interface CountdownTimerProps {
  targetDate: string | Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div className="countdown-timer">
      {timeLeft.days > 0 && (
        <div className="countdown-item">
          <span className="countdown-value">{formatNumber(timeLeft.days)}</span>
          <span className="countdown-label">d</span>
        </div>
      )}
      <div className="countdown-item">
        <span className="countdown-value">{formatNumber(timeLeft.hours)}</span>
        <span className="countdown-label">h</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-value">{formatNumber(timeLeft.minutes)}</span>
        <span className="countdown-label">m</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-value">{formatNumber(timeLeft.seconds)}</span>
        <span className="countdown-label">s</span>
      </div>
    </div>
  );
};

export default CountdownTimer;