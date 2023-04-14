import React, { useState, useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import { Container } from '../styles/GlobalStyle';
import { SliderItem } from '../styles/Sliders';
import { Loading, Spinner } from '../styles/Loading';
import { Link, useNavigate } from 'react-router-dom';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';

const PopularMovies = ({ url }) => {
  const darkModeOn = useSelector((state) => state.darkMode.dark);
  const [perPage, setPerPage] = useState(6);
  const [gap, setGap] = useState('6px');

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_BASE_URL = import.meta.env.VITE_BASE_URL;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

  const history = useNavigate();

  const {
    data: popularMovies,
    isLoading,
    error,
  } = useAxios(`${API_BASE_URL}${url}?api_key=${API_KEY}&language=ko`);

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

  const handleLinkClick = (movie) => {
    history(`/movies/${movie.id}`);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <Container>
      <span>현재 가장 인기있는 🤩</span>
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
        {popularMovies.results &&
          popularMovies.results.map((movie) => (
            <SplideSlide key={movie.id}>
              <SliderItem
                className={darkModeOn ? '' : 'dark'}
                onClick={() => handleLinkClick(movie)}
              >

                  <img
                    src={`${POSTER_URL}${movie.poster_path}`}
                    alt={movie.title}
                    loading="lazy"
                  />
                  
                <div className="slider_contents">
                  <h3>{movie.title}</h3>
                  <p>
                    평점 - <span>{movie.vote_average}</span>
                  </p>
                  <p>{movie.release_date}</p>
                </div>
              </SliderItem>
            </SplideSlide>
          ))}
      </Splide>
    </Container>
  );
};

export default PopularMovies;
