import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const stopper = setInterval(() => {
      setTime(new Date());
    }, 1000);


    return function cleanup() {
      clearInterval(stopper)
    }
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
