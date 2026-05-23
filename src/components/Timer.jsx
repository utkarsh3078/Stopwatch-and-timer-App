import React from "react";
import { useState, useEffect } from "react";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const next = Math.max(prev - 10, 0);
        if (next === 0) {
          clearInterval(interval);
          setIsRunning(false);
        }
        return next;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [isRunning]);

  const hours = Math.floor(timeLeft / 3600000);
  const minutes = Math.floor((timeLeft % 3600000) / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);
  const milliseconds = Math.floor((timeLeft % 1000) / 10);
  return (
    <>
      <h1>Timer</h1>
      <section className="dial">
        <h2 className="dial-time">
          <span>{String(hours).padStart(2, "0")}</span>
          <span className="sep">:</span>
          <span>{String(minutes).padStart(2, "0")}</span>
          <span className="sep">:</span>
          <span>{String(seconds).padStart(2, "0")}</span>
          <span className="sep">:</span>
          <span>{String(milliseconds).padStart(2, "0")}</span>
        </h2>
      </section>
      <section className="input">
        <input
          type="number"
          placeholder="Enter Hour"
          value={hours}
          disabled={isRunning}
          onChange={(e) => {
            const h = parseInt(e.target.value, 10) || 0;
            setTimeLeft(h * 3600000 + (timeLeft % 3600000));
          }}
        />
        <input
          type="number"
          placeholder="Enter Minute"
          value={minutes}
          disabled={isRunning}
          onChange={(e) => {
            const m = parseInt(e.target.value, 10) || 0;
            const hoursPart = Math.floor(timeLeft / 3600000) * 3600000;
            setTimeLeft(hoursPart + m * 60000 + (timeLeft % 60000));
          }}
        />
        <input
          type="number"
          placeholder="Enter Second"
          value={seconds}
          disabled={isRunning}
          onChange={(e) => {
            const s = parseInt(e.target.value, 10) || 0;
            const hoursAndMinutes = Math.floor(timeLeft / 60000) * 60000;
            setTimeLeft(hoursAndMinutes + s * 1000 + (timeLeft % 1000));
          }}
        />
      </section>
      <div className="controls">
        {isRunning ? (
          <button onClick={() => setIsRunning(false)}>Stop</button>
        ) : (
          <button onClick={() => setIsRunning(true)}>Start</button>
        )}

        <button onClick={() => setTimeLeft(0)}>Reset</button>
      </div>
    </>
  );
}

export default Timer;
