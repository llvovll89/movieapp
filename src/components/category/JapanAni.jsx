import React from 'react';
import { Card, Section, Results } from '../../styles/GlobalStyle';
import useAxios from '../../hooks/useAxios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const JapanAni = () => {
  const sidebarWidth = useSelector((state) => state.sidebar.sidebarWidth)  
  const { VITE_API_KEY: API_KEY, VITE_BASE_URL: API_BASE_URL } = import.meta
    .env;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

  const NO_IMAGE_URL = "https://via.placeholder.com/500x750.png?text=No+Image";

  const { data, error, isLoading } = useAxios(
    `${API_BASE_URL}/discover/tv?api_key=${API_KEY}&language=ko&sort_by=release_date.desc&with_genres=16&with_original_language=ja&air_date.lte=${new Date()
      .toISOString()
      .slice(0, 10)}
      `
  );

  return (
    <Section style={{ paddingLeft: `${sidebarWidth}px` }}>
      <Results>
        {data &&
          data.results &&
          data.results.map((ani) => (
            <Card key={ani.id}>
              <div className="left">
              {ani.poster_path ? (
                <Link to={`/tv/${ani.id}`}>
                  <img src={`${POSTER_URL}${ani.poster_path}`} alt={ani.name} />
                </Link>
              ) : (
                <Link to={`/tv/${ani.id}`}>
                  <img src="https://via.placeholder.com/300x450.png?text=No+Image" alt="No image available" />
                </Link>
              )}
              </div>
              <div className="right">
                <p className="title">{ani.name}</p>
                <p className="over">
                  {ani.overview.length > 30
                    ? ani.overview.slice(0, 30) + '...'
                    : ani.overview}
                </p>
                <p className="aver">{ani.vote_average}</p>
                <p className="date">{ani.first_air_date}</p>
              </div>
            </Card>
          ))} 
      </Results>
    </Section>
  );
};

export default JapanAni;
