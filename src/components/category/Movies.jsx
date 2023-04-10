import React, { useState, useEffect } from 'react';
import useAxios from '../../hooks/useAxios';
import { Link } from 'react-router-dom';
import {
  Card,
  Results,
  Section,
  PaginationButton,
  PaginationContainer,
} from '../../styles/GlobalStyle';
import { Loading, Spinner } from '../../styles/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPage, setCurrentPage } from '../../redux/paginationSlice';

// react-icons
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Movies = () => {
  const currentPage = useSelector(selectCurrentPage);
  const sidebarWidth = useSelector((state) => state.sidebar.sidebarWidth);
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
    <Section style={{ paddingLeft: `${window.innerWidth <= 564 ? 80 : sidebarWidth}px` }}>
      <Results>
        {isLoading && (
          <Loading>
            <Spinner />
          </Loading>
        )}
        {error && <p>Error: {error.message}</p>}
        {data &&
          data.results &&
          data.results.slice(0, 12).map((ani) => (
            <Card key={ani.id}>
              <div className="contents">
                <div className="top">
                  {ani.poster_path && (
                    <Link to={`/movies/${ani.id}`}>
                      <img
                        src={`${POSTER_URL}${ani.poster_path}`}
                        alt={ani.title}
                      />
                    </Link>
                  )}
                </div>
                <div className="bot">
                  <p className="title">{ani.title}</p>
                  <p className="aver">
                    평점 - <span>{ani.vote_average}</span>
                  </p>
                  <p className="date">
                    개봉일 - <span>{ani.vote_average}</span>
                  </p>
                </div>
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
            <FaArrowLeft />
          </PaginationButton>
          <PaginationButton onClick={() => handlePageChange(currentPage + 1)}>
            <FaArrowRight / >
          </PaginationButton>
        </PaginationContainer>
      )}
    </Section>
  );
};

export default Movies;
