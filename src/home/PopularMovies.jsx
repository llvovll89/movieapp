import React from 'react';
import useAxios from '../hooks/useAxios';
import { Container } from '../styles/GlobalStyle';
import { SliderItem } from '../styles/Sliders';
import { Loading, Spinner } from '../styles/Loading';
import { Link } from 'react-router-dom';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const PopularMovies = ({ url }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_BASE_URL = import.meta.env.VITE_BASE_URL;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

  const {
    data: popularMovies,
    isLoading,
    error,
  } = useAxios(`${API_BASE_URL}${url}?api_key=${API_KEY}&language=ko`);

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
          perPage: 6,
          pagination: false,
          gap: '12px',
          drag: 'free',
          focus: 'center',
          arrows: true,
        }}
      >
        {popularMovies.results &&
          popularMovies.results.map((movie) => (
            <SplideSlide key={movie.id}>
              <SliderItem>
                <Link to={`/movies/${movie.id}`}>
                  <img
                    src={`${POSTER_URL}${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
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

export default PopularMovies;
