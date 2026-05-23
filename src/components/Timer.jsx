import React from "react";
import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    //in miliseconds
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev - 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);
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
      <div className="controls">
        {isRunning ? (
          <button onClick={() => setIsRunning(false)}>Stop</button>
        ) : (
          <button onClick={() => setIsRunning(true)}>Start</button>
        )}

        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </>
  );
}

export default Timer;
