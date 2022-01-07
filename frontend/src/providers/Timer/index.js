import { createContext, useState, useContext, useEffect } from "react";

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [time, setTime] = useState(0);
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    let interval = null;

    if (startTimer) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!startTimer) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [startTimer]);

  return (
    <TimerContext.Provider value={{ time, setStartTimer, setTime }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => useContext(TimerContext);
