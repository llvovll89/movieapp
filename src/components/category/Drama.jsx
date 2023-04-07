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

const Drama = () => {
  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  const { VITE_API_KEY: API_KEY, VITE_BASE_URL: API_BASE_URL } = import.meta
    .env;

  const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

  const { data, isLoading, error } = useAxios(
    `${API_BASE_URL}/discover/tv?api_key=${API_KEY}&language=ko&with_original_language=ko&region=KRprimary_release_date.lte=${new Date()
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
            data.results.slice(0, 12).map((drama) => (
              <Card key={drama.id}>
                <div className="left">
                  {drama.poster_path && (
                    <Link to={`/tv/${drama.id}`}>
                      <img
                        src={`${POSTER_URL}${drama.poster_path}`}
                        alt={drama.name}
                      />
                    </Link>
                  )}
                </div>
                <div className="right">
                  <p className="title">{drama.name}</p>
                  <p className="over">
                    {drama.overview.length > 70
                      ? drama.overview.slice(0, 70) + '...'
                      : drama.overview}
                  </p>
                  <p className="aver">{drama.vote_average}</p>
                  <p className="date">{drama.release_date}</p>
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

export default Drama;
