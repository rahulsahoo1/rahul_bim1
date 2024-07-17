import { useEffect, useState } from "react";

const NumberAnimate = ({ initialValue, targetValue }) => {
  const [count, setCount] = useState(initialValue);
  const duration = 2000; // 4 seconds

  useEffect(() => {
    let startValue = initialValue;
    const interval = Math.floor(duration / (targetValue - initialValue));

    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= targetValue) {
        clearInterval(counter);
      }
    }, interval);

    return () => {
      clearInterval(counter);
    };
  }, [targetValue, initialValue]);

  return count;
};

export default NumberAnimate;
