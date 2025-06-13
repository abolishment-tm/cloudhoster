// File: CountdownTimer.tsx
import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
  expiredAt: string; // ISO 8601
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ expiredAt }) => {
  const calculateTimeLeft = () => {
    const diff = new Date(expiredAt).getTime() - new Date().getTime();
    if (diff <= 0) return null;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return {
      days: String(days).padStart(2, '0'),
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [expiredAt]);

  if (!timeLeft) return <span className="promo-timer expired">Promo telah berakhir</span>;

  return (
    <strong className="timer-values">
      {timeLeft.days}<sup>d</sup> {timeLeft.hours}<sup>j</sup> {timeLeft.minutes}<sup>m</sup> {timeLeft.seconds}<sup>d</sup>
    </strong>
  );
};

export default CountdownTimer;
