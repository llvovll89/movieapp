import React  from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import {
  Section,
  Loading,
  Error,
  DetailPage,
} from '../styles/GlobalStyle';
import { useSelector } from 'react-redux';

const MovieDetail = () => {
  const { id } = useParams();
  const sidebarWidth = useSelector((state) => state.sidebar.sidebarWidth);

  const NO_IMAGE_URL = "https://via.placeholder.com/500x750.png?text=No+Image";
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_BASE_URL = import.meta.env.VITE_BASE_URL;
  const POSTER_API_URL = `${API_BASE_URL}/movie/${id}/images?api_key=${API_KEY}&language=ko`;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
  const history = useNavigate();

  const { data, isLoading, error } = useAxios(
    `${API_BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko`
  );

  const handleClick = () => {
    history(-1);
  }

  console.log(data);

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
    <Section style={{ paddingLeft: `${sidebarWidth}px` }}>
        <DetailPage>
          <div className="content">
            <div className="top">
            <img src={data.poster_path ? `${POSTER_URL}${data.poster_path}` : NO_IMAGE_URL} alt={data.title} />
            </div>
            <div className="bot">
              <div className="title">
                <h1>{data.title}</h1>
                <span>{data.genres.map((genre) => genre.name).join(' ')}</span>
              </div>
              <p>{data.release_date}</p>
              <p>{data.overview}</p>
              </div>
              <button onClick={handleClick}>X</button>
          </div>
        </DetailPage>
    </Section>
  );
};

export default MovieDetail;
