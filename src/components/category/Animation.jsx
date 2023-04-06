import React , {useState} from 'react';
import useAxios from '../../hooks/useAxios';
import { Section, Results, Card } from '../../styles/GlobalStyle';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from '../Modal';

const Animation = () => {
  const sidebarWidth = useSelector((state) => state.sidebar.sidebarWidth);
  const { VITE_API_KEY: API_KEY, VITE_BASE_URL: API_BASE_URL } = import.meta
    .env;

  const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, error, isLoading } = useAxios(
    `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko&with_genres=16&region=KR&primary_release_date.lte=${new Date()
      .toISOString()
      .slice(0, 10)}`
  );


  return (
    <Section style={{ paddingLeft: `${sidebarWidth}px` }}>
      <Results>
        {data &&
          data.results &&
          data.results.map((ani) => (
            <Card key={ani.id}>
              <div className="left">
                {ani.poster_path && (
                  <Link to={`/movies/${ani.id}`}>
                  <img
                  src={`${POSTER_URL}${ani.poster_path}`}
                  alt={ani.title}
                  />
                  </Link>
                )}
              </div>
              <div className="right">
                <p className="title">{ani.title}</p>
                <p className="over">
                  {ani.overview.length > 30
                    ? ani.overview.slice(0, 30) + '...'
                    : ani.overview}
                </p>
                <p className="aver">{ani.vote_average}</p>
                <p className="date">{ani.release_date}</p>
              </div>
            </Card>
          ))}
      </Results>
    </Section>
  );
};

export default Animation;
