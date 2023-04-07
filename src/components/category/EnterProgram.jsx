import React from 'react';
import useAxios from '../../hooks/useAxios';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPage, setCurrentPage } from '../../redux/paginationSlice';
import { Link } from 'react-router-dom';
import {
  Results,
  Section,
  Loading,
  Card,
  PaginationButton,
  PaginationContainer,
} from '../../styles/GlobalStyle';

const EnterProgram = () => {
  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  const { VITE_API_KEY: API_KEY, VITE_BASE_URL: API_BASE_URL } = import.meta
    .env;

  const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

  const { data, isLoading, error } = useAxios(
    `${API_BASE_URL}/discover/tv?api_key=${API_KEY}&language=ko&with_original_language=ko&region=KR&primary_release_date.lte=${new Date()
      .toISOString()
      .slice(0, 10)}&page=${currentPage}`
  );

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <>
      <Section>
        <Results>
          {isLoading && (
            <Loading>
              <h1>Loading...</h1>
            </Loading>
          )}
          {error && <h1>Error: {error.message}</h1>}
          {data &&
            data.results &&
            data.results.slice(0, 12).map((enter) => (
              <Card key={enter.id}>
                <div className="left">
                  {enter.poster_path && (
                    <Link to={`/tv/${enter.id}`}>
                      <img
                        src={`${POSTER_URL}${enter.poster_path}`}
                        alt={enter.name}
                      />
                    </Link>
                  )}
                </div>
                <div className="right">
                  <p className="title">{enter.name}</p>
                  <p className="over">
                    {enter.overview.length > 70
                      ? enter.overview.slice(0, 70) + '...'
                      : enter.overview}
                  </p>
                  <p className="aver">{enter.vote_average}</p>
                  <p className="date">{enter.release_date}</p>
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
    </>
  );
};

export default EnterProgram;
