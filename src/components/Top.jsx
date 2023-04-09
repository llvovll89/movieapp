import React, { useEffect, useState } from 'react';
import { TopArrow } from '../styles/GlobalStyle';
import { AiOutlineArrowUp } from 'react-icons/ai';

const Top = () => {
  const [arrow, setArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 160) {
        setArrow(true);
      } else {
        setArrow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {arrow && (
        <TopArrow onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}>
          <AiOutlineArrowUp />
        </TopArrow>
      )}
    </>
  );
};

export default Top;
