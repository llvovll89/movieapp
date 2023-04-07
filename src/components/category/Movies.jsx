import React, { useState, useEffect } from 'react';
import useAxios from '../../hooks/useAxios';
import { Link } from 'react-router-dom';
import {
  Card,
  Results,
  Section,
  PaginationButton,
  PaginationContainer,
  Loading,
} from '../../styles/GlobalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPage, setCurrentPage } from '../../redux/paginationSlice';

const Movies = () => {
  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();
  const { VITE_API_KEY: API_KEY, VITE_BASE_URL: API_BASE_URL } = import.meta
    .env;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

  const { data, error, isLoading } = useAxios(
    `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko&with_genres=18&region=KR&primary_release_date.lte=${new Date()
      .toISOString()
      .slice(0, 10)}&page=${currentPage}`
  );

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <Section>
      <Results>
        {isLoading && (
          <Loading>
            <h1>Loading...</h1>
          </Loading>
        )}
        {error && <p>Error: {error.message}</p>}
        {data &&
          data.results &&
          data.results.slice(0, 12).map((ani) => (
            <Card key={ani.id}>
              <div className="left">
                {ani.poster_path && (
                  <Link to={`/movies/${ani.id}`}>
                    <img
                      src={`${POSTER_URL}${ani.poster_path}`}
                      alt={ani.title}
                    />
                  </Link>
                )}
              </div>
              <div className="right">
                <p className="title">{ani.title}</p>
                <p className="over">
                  {ani.overview.length > 30
                    ? ani.overview.slice(0, 30) + '...'
                    : ani.overview}
                </p>
                <p className="aver">{ani.vote_average}</p>
                <p className="date">{ani.release_date}</p>
              </div>
            </Card>
          ))}
      </Results>
      {data && (
        <PaginationContainer>
          <PaginationButton
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            PREV
          </PaginationButton>
          <PaginationButton onClick={() => handlePageChange(currentPage + 1)}>
            NEXT
          </PaginationButton>
        </PaginationContainer>
      )}
    </Section>
  );
};

export default Movies;
