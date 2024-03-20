import React, { useState, useEffect } from "react";

const MetaText = ({ texts, interval, isRepeating = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const createMarkup = (text) => {
    return { __html: text.replace(/ /g, "&nbsp;") };
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= texts.length - 1) {
          if(isRepeating){
            return 0;
          } else {
            clearInterval(intervalId);
            return prevIndex
          }
        }
        return prevIndex + 1;
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, [texts, interval, isRepeating]);

  return (
    <div className="fading-text-container">
      {texts.map((text, index) => (
        <div
          key={index}
          className={`fading-text ${index === currentIndex ? "active" : ""}`}
          dangerouslySetInnerHTML={createMarkup(text)}
        ></div>
      ))}
    </div>
  );
};

export default MetaText;
