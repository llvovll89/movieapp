import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [width, setWidth] = useState(null);

  const scrolling = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (height > 0) {
      setWidth(`${scrolled}%`);
    } else {
      setWidth(null);
    }
  };

  useEffect(() => {
    try {
      window.addEventListener('scroll', scrolling);
    } catch (oError) {
      console.log(oError);
    }

    return () => {
      try {
        window.removeEventListener('scroll', scrolling);
      } catch (oError) {
        console.log(oError);
      }
    };
  }, []);

  const topStyle = width && parseInt(width, 10) < 768 ? '56px' : '76px';

  return (
    <div
      className="progressbar"
      style={{
        height: '3.5px',
        backgroundColor: '#08f',
        transitionDuration: '0.5s',
        width: width,
        margin: 0,
        padding: 0,
        position: 'fixed',
        top: topStyle,
        zIndex: '1000',
        transitionProperty: 'width',
        transitionTimingFunction: `ease-out`,
      }}
    />
  );
};

export default ProgressBar;