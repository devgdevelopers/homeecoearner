'use client'
import React, { useState, useEffect } from 'react';

function Counter({ start, end }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < end) {
        setCount(prevCount => prevCount + 1);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, [count, end]);

  return (
    <div>
      <span>{count}+</span>
    </div>
  );
}

export default Counter;
