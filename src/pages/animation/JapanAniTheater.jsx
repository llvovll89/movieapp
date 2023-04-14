import React from 'react';
import {
  Card,
  Section,
  Results,
  PaginationButton,
  PaginationContainer,
} from '../../styles/GlobalStyle';
import { Loading } from '../../styles/Loading';
import useAxios from '../../hooks/useAxios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPage, setCurrentPage } from '../../redux/paginationSlice';

// react-icons
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const JapanAni = () => {
  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();
  const history = useNavigate();

  const { VITE_API_KEY: API_KEY, VITE_BASE_URL: API_BASE_URL } = import.meta.env;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
  const NO_IMAGE_URL = 'https://via.placeholder.com/500x750.png?text=No+Image';
  
  const { data, error, isLoading } = useAxios(
    `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko&sort_by=release_date.desc&with_genres=16&with_original_language=ja&release_date.lte=${new Date()
      .toISOString()
      .slice(0, 10)}&page=${currentPage}`
  );


  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handleLinkClick = (ani) => {
    history(`/movies/${ani.id}`);
  };


  return (
    <Section>
      <Results>
        {isLoading && (
          <Loading>
          </Loading>
        )}
          {error && <p>Error: {error.message}</p>}
        {data &&
          data.results &&
          data.results.map((ani) => (
            <Card key={ani.id} onClick={() => handleLinkClick(ani)}>
              <div className="contents">
                <div className="top">
                  {ani.poster_path ? (
                    <Link to={`/movies/${ani.id}`}>
                      <img
                        src={`${POSTER_URL}${ani.poster_path}`}
                        alt={ani.title}
                        loading='lazy'
                      />
                    </Link>
                  ) : (
                    <Link to={`/movies/${ani.id}`}>
                      <img src={NO_IMAGE_URL} alt="No image available" />
                    </Link>
                  )}
                </div>
                <div className="bot">
                  <p className="title">
                    {ani.title.length > 20
                      ? ani.title.slice(0, 20) + '...'
                      : ani.title}
                  </p>
                  <p className="aver">
                    평점 - <span>{ani.vote_average}</span>
                  </p>
                  <p className="date">
                    개봉일 - <span>{ani.release_date}</span>
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
            <FaArrowRight />
          </PaginationButton>
        </PaginationContainer>
      )}
    </Section>
  );
};

export default JapanAni;