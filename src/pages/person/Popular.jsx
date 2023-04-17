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
import { useState } from 'react';

const Popular = () => {
  const [actorOnly , setActorOnly] = useState(false);
  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();
  const history = useNavigate();

  const dark = useSelector((state) => state.darkMode.dark);

  const { VITE_API_KEY: API_KEY, VITE_BASE_URL: API_BASE_URL } = import.meta
    .env;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
  const NO_IMAGE_URL = 'https://via.placeholder.com/500x750.png?text=No+Image';

  const { data, error, isLoading } = useAxios(
    `${API_BASE_URL}/person/popular?api_key=${API_KEY}&language=ko&page=${currentPage}`
  );

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handleLinkClick = (cha) => {
    history(`/character/${cha.id}`);
  };

  const filterActors = (results) => {
    return results.filter((person) => person.known_for_department === "Acting");
  };
  

  return (
    <Section className={dark ? '' : 'dark'}>

    <div className="person_filter">
    <button className='filter_btn' onClick={() => setActorOnly(true)}>배우만 보기</button>
    <button className='filter_btn' onClick={() => setActorOnly(false)}>모두보기</button>
    </div>

      <Results>
        {isLoading && <Loading></Loading>}
        {error && <p>Error: {error.message}</p>}

          {data && (actorOnly ? (
            filterActors(data.results).map((person) => (
              <Card key={person.id}>
              <div className="contents" onClick={() => handleLinkClick(person)}>
                <div className="top">
                  <Link to={`/character/${person.id}`}>
                    <img
                      src={
                        person.profile_path
                          ? `${POSTER_URL}${person.profile_path}`
                          : NO_IMAGE_URL
                      }
                      alt={person.name}
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="bot">
                  <p className="title">
                    {person.name.length > 20
                      ? person.name.slice(0, 20) + '...'
                      : person.name}
                  </p>
                  <p className='pop'>
                  Popularity  <span>{person.popularity && person.popularity.toFixed(2)}</span> 
                  </p>
                </div>
              </div>
            </Card>
            ))
          ) : 
              data.results && data.results.map((person) => (
                <Card key={person.id}>
              <div className="contents" onClick={() => handleLinkClick(person)}>
                <div className="top">
                  <Link to={`/character/${person.id}`}>
                    <img
                      src={
                        person.profile_path
                          ? `${POSTER_URL}${person.profile_path}`
                          : NO_IMAGE_URL
                      }
                      alt={person.name}
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="bot">
                  <p className="title">
                    {person.name.length > 20
                      ? person.name.slice(0, 20) + '...'
                      : person.name}
                  </p>
                  <p className='pop'>
                  Popularity  <span>{person.popularity && person.popularity.toFixed(2)}</span> 
                  </p>
                </div>
              </div>
            </Card>
              ))
          )}
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

export default Popular;
