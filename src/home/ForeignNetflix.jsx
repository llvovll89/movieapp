import React, { useState, useEffect, useCallback } from 'react';
import useAxios from '../hooks/useAxios';
import { Container } from '../styles/GlobalStyle';
import { SliderItem } from '../styles/Sliders';
import { Loading, Spinner } from '../styles/Loading';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const ForeignNetflix = ({ url }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_BASE_URL = import.meta.env.VITE_BASE_URL;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

  const dark = useSelector((state) => state.darkMode.dark);
  const history = useNavigate();

  const [perPage, setPerPage] = useState(6);
  const [gap, setGap] = useState('6px');

  const {
    data: foreignNetflix,
    isLoading,
    error,
  } = useAxios(`${API_BASE_URL}${url}&api_key=${API_KEY}&language=ko`);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1280) {
      setPerPage(6);
    } else if (window.innerWidth >= 924) {
      setPerPage(5);
      setGap('8px');
    } else if (window.innerWidth >= 628) {
      setPerPage(4);
      setGap('10px');
    } else {
      setPerPage(3);
      setGap('12px');
    }
  }, []);

  const handleLinkClick = (tv) => {
    history(`/tv/${tv.id}`);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <Container>
      <div className="top">
      <h2>현재 외국에서 인기있는 Netflix </h2>
      </div>
      {isLoading && (
        <Loading>
          <Spinner />
        </Loading>
      )}
      {error && <h1>Error: {error.message}</h1>}
      <Splide
        options={{
          pagination: false,
          perPage,
          gap,
          drag: 'free',
          focus: 'center',
          arrows: true,
        }}
      >
        {foreignNetflix.results &&
          foreignNetflix.results.map((tv) => (
            <SplideSlide key={tv.id}>
              <SliderItem onClick={() => handleLinkClick(tv)}>
                <img src={`${POSTER_URL}${tv.poster_path}`} alt={tv.title} loading='lazy' />
                <div className="slider_contents">
                  <h3>{tv.name}</h3>
                  <p>
                    평점 - <span>{tv.vote_average}</span>
                  </p>
                  <p>{tv.first_air_date}</p>
                </div>
              </SliderItem>
            </SplideSlide>
          ))}
      </Splide>
    </Container>
  );
};

export default ForeignNetflix;
