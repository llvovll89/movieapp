import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useAxios from '../hooks/useAxios';
import { Section, ErrorBox, DetailPage } from '../styles/GlobalStyle';
import { Loading } from '../styles/Loading';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const TvDetail = () => {
  const { id } = useParams();
  const [perPage, setPerPage] = useState(6);
  const sidebarWidth = useSelector((state) => state.sidebar.sidebarWidth);
  const history = useNavigate();

  const NO_IMAGE_URL = 'https://via.placeholder.com/500x750.png?text=No+Image';
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_BASE_URL = import.meta.env.VITE_BASE_URL;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w300/';

  const { data, isLoading, error } = useAxios(
    `${API_BASE_URL}/tv/${id}?api_key=${API_KEY}&language=ko`
  );

  const { data: trailerData } = useAxios(
    `${API_BASE_URL}/tv/${id}/videos?api_key=${API_KEY}&language=ko`
  );
  const { data: castData } = useAxios(
    `${API_BASE_URL}/tv/${id}/credits?api_key=${API_KEY}&language=ko-KR`
  );

  const handleResize = () => {
    if (window.innerWidth >= 1280) {
      setPerPage(6);
    } else if (window.innerWidth >= 924) {
      setPerPage(4);
    } else if (window.innerWidth >= 628) {
      setPerPage(3);
    } else {
      setPerPage(1);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const handleClick = () => {
    history(-1);
  };

  if (isLoading)
    return (
      <Loading>
        <h1>Loading...</h1>
      </Loading>
    );
  if (error)
    return (
      <ErrorBox>
        <h1>Error : {error.message}</h1>
      </ErrorBox>
    );

  return (
    <>
      <Section
        style={{
          paddingLeft: `${window.innerWidth <= 564 ? 80 : sidebarWidth}px`,
        }}
      >
        <DetailPage>
          <div className="content">
            <div className="top">
              {trailerData?.results?.length > 0 ? (
                <iframe
                  title={`${data.title} trailer`}
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${trailerData.results[0].key}`}
                  allowFullScreen
                  style={{ border: 'none' }}
                />
              ) : (
                <img
                  src={
                    data.poster_path
                      ? `${POSTER_URL}${data.poster_path}`
                      : NO_IMAGE_URL
                  }
                  alt={data.name}
                />
              )}
            </div>
            <div className="bot">
              <div className="title">
                <h1>{data.name}</h1>
                <span>{data.genres.map((genre) => genre.name).join(' ')}</span>
              </div>
              <div className="net">
                <span>{data.networks[0].name}</span>
              </div>

              <Splide
                options={{
                  perPage,
                  pagination: false,
                  gap: '12px',
                  drag: 'free',
                  focus: 'center',
                  arrows: true,
                  start: 0,
                }}
              >
                {castData && castData?.cast ? (
                  castData.cast.slice(0, 9).map((c) => (
                    <SplideSlide key={c.id}>
                      <div className="cast_contents">
                        <img src={`${POSTER_URL}${c.profile_path}`} />
                        <div className="cast_name">
                          <p>
                            배우 - <span>{c.name}</span>
                          </p>
                          {c.charater ? (
                            <p>
                              배역 - <span>{c.character}</span>
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </SplideSlide>
                  ))
                ) : (
                  <div className="cast_contents">
                    <h1>{error}</h1>
                  </div>
                )}
              </Splide>

              <div className="contents">
                <p>{data.overview}</p>
                <p>{data.first_air_date}</p>
              </div>
            </div>
            <button onClick={handleClick}>X</button>
          </div>
        </DetailPage>
      </Section>
    </>
  );
};

export default TvDetail;
