import React, { useEffect, useState } from 'react';

const SmoothTypewriter = ({ text, delay = 0, letterDelay = 0.1, duration = 0.3 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayedText(text.substring(0, i));
        if (i >= text.length) {
          clearInterval(interval);
        }
      }, letterDelay * 1000);
    }, delay * 1000);

    return () => clearTimeout(startTimer);
  }, [text, delay, letterDelay]);

  return (
    <span style={{ overflow: 'visible' }}>
      {displayedText.split("").map((letter, index) => (
        <span
          key={index}
          style={{
            display: 'inline-block',
            animation: `fadeIn ${duration}s ease forwards`,
            animationDelay: `${index * letterDelay}s`,
          }}
        >
          {letter}
        </span>
      ))}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-1px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </span>
  );
};

export default SmoothTypewriter;
