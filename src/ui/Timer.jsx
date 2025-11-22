import { useState, useEffect } from "react"


function Timer() {
  const [time, setTime] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer__item">
      Осталось: {time} сек
    </div>
  );
}

export default Timer;