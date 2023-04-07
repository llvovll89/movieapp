import React from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import {
  Section,
  Loading,
  Error,
  DetailPage,
} from '../styles/GlobalStyle';

const TvDetail = () => {
  const { id } = useParams();
  const NO_IMAGE_URL = "https://via.placeholder.com/500x750.png?text=No+Image";
  const history = useNavigate();
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_BASE_URL = import.meta.env.VITE_BASE_URL;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w300/';

  const { data, isLoading, error } = useAxios(
    `${API_BASE_URL}/tv/${id}?api_key=${API_KEY}&language=ko`
  );

  const handleClick = () => {
    history(-1);
  }

  if (isLoading)
    return (
      <Loading>
        <h1>Loading...</h1>
      </Loading>
    );
  if (error)
    return (
      <Error>
        <h1>{error}</h1>
      </Error>
    );

  return (
    <>
      <Section>
          <DetailPage>
            <div className="content">
              <div className="top">
              <img src={data.poster_path ? `${POSTER_URL}${data.poster_path}` : NO_IMAGE_URL} alt={data.name} />
              </div>
              <div className="bot">
                <div className="title">
                  <h1>{data.name}</h1>
                  <span>
                    {data.genres.map((genre) => genre.name).join(' ')}
                  </span>
                </div>
                {data.seasons.map((ses) => (
                  <div key={ses.id} className="contents">
                    <span>시즌명: {ses.name}</span>
                    <span>에피소드: {ses.episode_count}</span>
                    <span>{ses.air_date}</span>
                  </div>
                ))}
              </div>
              <button onClick={handleClick}>X</button>
            </div>
          </DetailPage>
      </Section>
    </>
  );
};

export default TvDetail;
