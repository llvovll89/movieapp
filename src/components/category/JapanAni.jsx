import React from 'react';
import {
  Card,
  Section,
  Results,
  PaginationButton,
  PaginationContainer,
  Loading,
} from '../../styles/GlobalStyle';
import useAxios from '../../hooks/useAxios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPage, setCurrentPage } from '../../redux/paginationSlice';

const JapanAni = () => {
  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  const { VITE_API_KEY: API_KEY, VITE_BASE_URL: API_BASE_URL } = import.meta
    .env;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
  const NO_IMAGE_URL = 'https://via.placeholder.com/500x750.png?text=No+Image';

  const { data, error, isLoading } = useAxios(
    `${API_BASE_URL}/discover/tv?api_key=${API_KEY}&language=ko&sort_by=release_date.desc&with_genres=16&with_original_language=ja&air_date.lte=${new Date()
      .toISOString()
      .slice(0, 10)}&page=${currentPage}`
  );

  console.log(data);

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
                {ani.poster_path ? (
                  <Link to={`/tv/${ani.id}`}>
                    <img
                      src={`${POSTER_URL}${ani.poster_path}`}
                      alt={ani.name}
                    />
                  </Link>
                ) : (
                  <Link to={`/tv/${ani.id}`}>
                    <img src={NO_IMAGE_URL} alt="No image available" />
                  </Link>
                )}
              </div>
              <div className="right">
                <p className="title">
                  {ani.name.length > 20
                    ? ani.name.slice(0, 20) + '...'
                    : ani.name}
                </p>
                <p className="over">
                  {ani.overview.length > 40
                    ? ani.overview.slice(0, 40) + '...'
                    : ani.overview}
                </p>
                <p className="aver">{ani.vote_average}</p>
                <p className="date">{ani.first_air_date}</p>
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

export default JapanAni;
