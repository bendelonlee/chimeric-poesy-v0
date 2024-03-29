import React, { useState, useEffect } from "react";

const MetaText = ({ closingText, texts, interval, isRepeating = true, replaceRule }) => {
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

  const replacedText = (text) => {
    return <span>
      {text.split('').map((t) => {
        return replaceRule(t);
      })}
    </span>
  }

  const textProps = (text, index) => {
    const baseProps = {
      key: index,
      className: `fading-text ${index === currentIndex ? "active" : ""}`,
    }
    if(replaceRule){
      return baseProps
    } else {
      return {
        ...baseProps,
        dangerouslySetInnerHTML: createMarkup(text),
      }
    }
  }
  return (
    <div className="fading-text-container">
      {texts.map((text, index) => (
        <div
          {...textProps(text, index)}
        >{replaceRule && replacedText(text)}</div>
      ))}
    </div>
  );
};

export default MetaText;
