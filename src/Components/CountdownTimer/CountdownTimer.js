import { useState, useEffect } from "react";
import "./CountdownTimer.css";
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimeUtils';



const CountdownTimer = ({countdownTimestamp}) => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTimeUntilMsTimestamp(countdownTimestamp));

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestamp);
    }, 1000);
    return () => clearTimeout(intervalId);
  }, [countdownTimestamp]);

  function updateRemainingTime(time) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(time))
  }

  return (
    <div className="countdown-timer">
      <span>{remainingTime.days}</span>
      <span>days</span>
      <span>{remainingTime.hours}</span>
      <span>hours</span>
      <span>{remainingTime.minutes}</span>
      <span>minutes</span>
      <span>{remainingTime.seconds}</span>
      <span>seconds</span>
    </div>
  );
};

export default CountdownTimer;
