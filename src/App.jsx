import "./App.css";
import Stopwatch from "./components/Stopwatch";
import { useState } from "react";
import Timer from "./components/Timer";

function App() {
  const [timer, setTimer] = useState(false);
  return (
    <>
      {timer ? <Timer /> : <Stopwatch />}

      <br />
      <button onClick={() => setTimer(!timer)}>
        {timer ? "Switch to Stopwatch" : "Switch to Timer"}
      </button>
    </>
  );
}

export default App;
