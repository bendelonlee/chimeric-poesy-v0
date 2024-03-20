import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Decrease the seconds by 1

      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {seconds === 0 && (
        <p>
          Qomolangma, the tallest mountain on our planet has been forming for 60
          million years
        </p>
      )}
      {seconds !== 0 && <p>{seconds} million years ago</p>}
    </div>
  );
}

export default CountdownTimer;
