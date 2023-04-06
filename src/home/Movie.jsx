import React, { useState, useRef } from 'react';
import useAxios from '../hooks/useAxios';
import { Link } from 'react-router-dom';
import { Container, Error, Loading, Section } from '../styles/GlobalStyle';
import { SliderContainer, SliderWrapper, SliderItem } from '../styles/Sliders';
import { useSelector } from 'react-redux';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Movie = () => {
  const [sliderLoaded, setSliderLoaded] = useState(false);
  const sidebarWidth = useSelector((state) => state.sidebar.sidebarWidth);
  const sliderRef = useRef(null);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_BASE_URL = import.meta.env.VITE_BASE_URL;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

  const { data, isLoading, error } = useAxios(
    `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko`
  );


  if (isLoading)
    return (
      <Loading>
        <h1>Loading...</h1>
      </Loading>
    );
  if (error)
    return (
      <Error>
        <h1>{error}</h1>
      </Error>
    );

  return (
    <Section style={{ paddingLeft: `${sidebarWidth}px` }}>
      <Container>
        <span>현재 인기있는 영화</span>
        <SliderContainer>
          <SliderWrapper ref={sliderRef}>
            {data.results.map((movie) => (
              <SliderItem key={movie.id}>
                {movie.poster_path && (
                  <Link to={`/movies/${movie.id}`}>
                    <img
                      src={`${POSTER_URL}${movie.poster_path}`}
                      alt={movie.title}
                      style={{
                        visibility: sliderLoaded ? 'visible' : 'hidden',
                      }}
                      onLoad={() => setSliderLoaded(true)}
                    />
                  </Link>
                )}
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
              </SliderItem>
            ))}
          </SliderWrapper>
        </SliderContainer>
      </Container>
    </Section>
  );
};

export default Movie;
