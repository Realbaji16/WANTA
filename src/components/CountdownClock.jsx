import { useState, useEffect } from "react";

const CountdownClock = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${secs}`;
  };

  return (
    <div className="inline-block text-white bg-gray-800 p-6 rounded-[40px] w-full max-w-xs md:max-w-sm lg:max-w-md">
      <p className="text-4xl md:text-8xl font-bold text-center">{formatTime(timeLeft)}</p>
    </div>
  );
};

export default CountdownClock;
