import React, { useState, useEffect } from 'react';

const Clock = () => {
  
  const [time, setTime] = useState(new Date());

  
  const updateTime = () => {
    setTime(new Date());
  };

  
  useEffect(() => {
    const interval = setInterval(updateTime, 1000);

    
    return () => clearInterval(interval);
  }, []); 

  
  const timeFormat = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  return (
    <div>
      <h1>Real-Time Clock</h1>
      <p>{time.toLocaleTimeString([], timeFormat)}</p>
    </div>
  );
};

export default Clock;
