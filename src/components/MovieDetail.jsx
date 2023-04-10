import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import { Section, Error, DetailPage } from '../styles/GlobalStyle';
import { Loading, Spinner } from '../styles/Loading';
import { useSelector } from 'react-redux';

// splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const MovieDetail = () => {
  const { id } = useParams();
  const [perPage, setPerPage] = useState(6);
  const sidebarWidth = useSelector((state) => state.sidebar.sidebarWidth);

  const NO_IMAGE_URL = 'https://via.placeholder.com/500x750.png?text=No+Image';
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_BASE_URL = import.meta.env.VITE_BASE_URL;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
  const history = useNavigate();

  const { data, isLoading, error } = useAxios(
    `${API_BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko-KR`
  );

  const { data: trailerData } = useAxios(
    `${API_BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=ko-KR`
  );
  const { data: castData } = useAxios(
    `${API_BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=ko-KR`
  );

  const handleClick = () => {
    history(-1);
  };

  useEffect(() => {
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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isLoading)
    return (
      <Loading>
        <h1>Loading...</h1>
        <Spinner />
      </Loading>
    );
  if (error)
    return (
      <Error>
        <h1>{error}</h1>
      </Error>
    );

  return (
    <Section style={{ paddingLeft: `${window.innerWidth <= 564 ? 80 : sidebarWidth}px` }}>
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
              <h1>{data.title}</h1>
              <span>{data.genres.map((genre) => genre.name).join(' ')}</span>
            </div>

            <div className="net pro">
              <span>
                {data.production_companies.map((pro) => pro.name).join(' ')}
              </span>
            </div>

            <Splide
              options={{
                perPage,
                pagination: false,
                gap: '12px',
                drag: 'free',
                focus: 'center',
                arrows: true,
              }}
            >
              {castData && castData.cast ? (
                castData.cast.slice(0, 12).map((c) => (
                  <SplideSlide key={c.id}>
                    <div className="cast_contents">
                      <img
                        src={
                          c.profile_path
                            ? `${POSTER_URL}${c.profile_path}`
                            : NO_IMAGE_URL
                        }
                      />
                      <div className="cast_name">
                        <p>
                          배우 - <span>{c.name}</span>
                        </p>
                        <p>
                          배역 - <span>{c.character}</span>
                        </p>
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
              <p>{data.release_date}</p>
              <p>
                {data.overview.length > 400
                  ? data.overview.slice(0, 400) + '...'
                  : data.overview}
              </p>
            </div>
          </div>
          <button onClick={handleClick}>X</button>
        </div>
      </DetailPage>
    </Section>
  );
};

export default MovieDetail;
