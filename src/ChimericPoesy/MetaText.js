import React, { useState, useEffect } from "react";

const MetaText = ({ onFinish, texts, interval, isRepeating = true, replaceRule, isFrozen, endElement, isPlaying }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasEnded, setHasEnded] = useState(false);


  const createMarkup = (text) => {
    return { __html: text.replace(/ /g, "&nbsp;") };
  };

  useEffect(() => {
    if(isFrozen){
      return
    }
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= texts.length - 1) {
          if(isRepeating){
            return 0;
          } else {
            setHasEnded(true);
            onFinish && onFinish();
            clearInterval(intervalId);
            return prevIndex
          }
        }
        return prevIndex + 1;
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, [texts, interval, isRepeating, isFrozen, isPlaying, onFinish]);

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
  if (endElement && hasEnded){
    return endElement;
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
