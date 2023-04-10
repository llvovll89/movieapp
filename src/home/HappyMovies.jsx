import React, { useState, useRef, useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import { Container } from '../styles/GlobalStyle';
import {
  SliderContainer,
  SliderWrapper,
  SliderItem,
  SlickContainer,
} from '../styles/Sliders';
import { Link } from 'react-router-dom';
import { Loading, Spinner } from '../styles/Loading';

// splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// react-icons
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const HappyMovies = ({ url }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_BASE_URL = import.meta.env.VITE_BASE_URL;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

  const {
    data: happyMovies,
    isLoading,
    error,
  } = useAxios(`${API_BASE_URL}${url}&api_key=${API_KEY}`);

  return (
    <Container>
      <div className="top">
        <span>재미와 감동을 느끼고싶을때 😂</span>
      </div>
      {isLoading && (
        <Loading>
          <Spinner />
        </Loading>
      )}
      {error && <h1>Error: {error.message}</h1>}

      <Splide
        options={{
          perPage: 6,
          pagination: false,
          gap: '12px',
          drag: 'free',
          focus: 'center',
          arrows: true,
        }}
      >
        {happyMovies.results &&
          happyMovies.results.map((movie) => (
            <SplideSlide key={movie.id}>
              <SliderItem>
                {movie.poster_path && (
                  <Link to={`/movies/${movie.id}`}>
                    <img
                      src={`${POSTER_URL}${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </Link>
                )}
                <h3>{movie.title}</h3>
                <p>
                  평점 - <span>{movie.vote_average}</span>
                </p>
                <p>{movie.release_date}</p>
              </SliderItem>
            </SplideSlide>
          ))}
      </Splide>
    </Container>
  );
};

export default HappyMovies;
