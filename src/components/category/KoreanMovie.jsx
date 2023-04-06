import React from 'react';
import useAxios from '../../hooks/useAxios';
import { Link } from 'react-router-dom';
import { Card, Results, Section } from '../../styles/GlobalStyle';
import { useSelector } from 'react-redux';

const KoreanMovie = () => {
  const sidebarWidth = useSelector((state) => state.sidebar.sidebarWidth)
  const { VITE_API_KEY: API_KEY, VITE_BASE_URL: API_BASE_URL } = import.meta
    .env;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
  const { data, error, isLoading } = useAxios(
    `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko&with_genres=18&region=KR&primary_release_date.lte=${new Date()
      .toISOString()
      .slice(0, 10)}`
  );

  return (
    <Section style={{ paddingLeft: `${sidebarWidth}px` }}>
      <Results>
        {data &&
          data.results &&
          data.results.map((movie) => (
            <Card key={movie.id}>
              <div className="left">
                {movie.poster_path && (
                  <Link to={`/movies/${movie.id}`}>
                    <img
                      src={`${POSTER_URL}${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </Link>
                )}
              </div>
              <div className="right">
                <p className="title">{movie.title}</p>
                <p className="over">
                  {movie.overview.length > 30
                    ? movie.overview.slice(0, 30) + '...'
                    : movie.overview}
                </p>
                <p className="aver">{movie.vote_average}</p>
                <p className="date">{movie.release_date}</p>
              </div>
            </Card>
          ))}
      </Results>
    </Section>
  );
};

export default KoreanMovie;
