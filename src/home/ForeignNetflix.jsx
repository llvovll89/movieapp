import React from 'react';
import useAxios from '../hooks/useAxios';
import { Container } from '../styles/GlobalStyle';
import { SliderItem } from '../styles/Sliders';
import { Loading, Spinner } from '../styles/Loading';
import { Link } from 'react-router-dom';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const ForeignNetflix = ({ url }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_BASE_URL = import.meta.env.VITE_BASE_URL;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

  const {
    data: foreignNetflix,
    isLoading,
    error,
  } = useAxios(`${API_BASE_URL}${url}&api_key=${API_KEY}&language=ko`);

  return (
    <Container>
      <span>현재 외국에서 인기있는 Netflix 😎</span>
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
        {foreignNetflix.results &&
          foreignNetflix.results.map((tv) => (
            <SplideSlide key={tv.id}>
              <SliderItem>
                <Link to={`/tv/${tv.id}`}>
                  <img src={`${POSTER_URL}${tv.poster_path}`} alt={tv.title} />
                </Link>
                <h3>{tv.name}</h3>
                <p>
                  평점 - <span>{tv.vote_average}</span>
                </p>
                <p>{tv.first_air_date}</p>
              </SliderItem>
            </SplideSlide>
          ))}
      </Splide>
    </Container>
  );
};

export default ForeignNetflix;
