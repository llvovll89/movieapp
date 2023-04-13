import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { Section, ErrorBox, DetailPage } from '../../styles/GlobalStyle';
import { Loading } from '../../styles/Loading';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const TvDetail = () => {
  const { id } = useParams();
  const [perPage, setPerPage] = useState(6);
  const history = useNavigate();

  const NO_IMAGE_URL = 'https://via.placeholder.com/500x750.png?text=No+Image';
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_BASE_URL = import.meta.env.VITE_BASE_URL;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w300/';
  const BACKDROP_URL = 'https://image.tmdb.org/t/p/w1280/';

  const { data, isLoading, error } = useAxios(
    `${API_BASE_URL}/tv/${id}?api_key=${API_KEY}&language=ko`
  );

  const { data: trailerData } = useAxios(
    `${API_BASE_URL}/tv/${id}/videos?api_key=${API_KEY}&language=ko`
  );
  const { data: castData } = useAxios(
    `${API_BASE_URL}/tv/${id}/credits?api_key=${API_KEY}&language=ko-KR`
  );

  const { data: recommendedTVData } = useAxios(
    `${API_BASE_URL}/tv/${id}/recommendations?api_key=${API_KEY}&language=ko-KR`
  );

  console.log(recommendedTVData);

  const handleResize = () => {
    if (window.innerWidth >= 1280) {
      setPerPage(6);
    } else if (window.innerWidth >= 924) {
      setPerPage(4);
    } else if (window.innerWidth >= 628) {
      setPerPage(3);
    } else {
      setPerPage(2);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const handleClick = () => {
    history('/');
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
    <Section>
      <DetailPage>
        <div className="content">
          <div className="top">
            {trailerData?.results?.length > 0 ? (
              <iframe
                title={`${data.title} trailer`}
                width="100%"
                height="500px"
                src={`https://www.youtube.com/embed/${trailerData.results[0].key}`}
                allowFullScreen
                style={{ border: 'none' }}
              />
            ) : (
              <img
                src={
                  data.backdrop_path
                    ? `${BACKDROP_URL}${data.backdrop_path}`
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
              <div className="pro_name">
                <span>{data.networks[0].name}</span>
              </div>
            </div>

            {castData && castData.cast && (
              <Splide
                options={{
                  perPage,
                  pagination: false,
                  gap: '6px',
                  drag: 'free',
                  focus: 'center',
                  arrows: true,
                }}
              >
                {castData.cast.slice(0, 12).map((c) => (
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
                        <p>{c.name}</p>
                        {c.character ? <p>{c.character}</p> : null}
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            )}

            <div className="contents">
              <div className="top">
                <p>개봉일 {data.first_air_date}</p>
              </div>

              <h3>개요</h3>
              <p>
                {data.overview.length > 400
                  ? data.overview.slice(0, 400) + '...'
                  : data.overview}
              </p>

              <h3>비슷한방송</h3>
              {recommendedTVData && recommendedTVData.results && (
                <Splide
                  options={{
                    perPage,
                    pagination: false,
                    gap: '6px',
                    drag: 'free',
                    focus: 'center',
                    arrows: true,
                  }}
                >
                  {recommendedTVData.results.slice(0, 12).map((c) => (
                    <SplideSlide key={c.id}>
                      <div className="recommended-movies">
                        <Link to={`/tv/${c.id}`}>
                          <img
                            src={
                              c.poster_path
                                ? `${POSTER_URL}${c.poster_path}`
                                : NO_IMAGE_URL
                            }
                            alt={c.title}
                          />
                        </Link>
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
          </div>
          <button onClick={handleClick} onTouchStart={handleClick}>
            X
          </button>
        </div>
      </DetailPage>
    </Section>
  );
};

export default TvDetail;
