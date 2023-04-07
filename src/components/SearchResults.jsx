import React, { useState } from 'react';
import {
  Card,
  Loading,
  Section,
  Error,
  SearchContainer,
  Results,
} from '../styles/GlobalStyle';
import { Link, useParams } from 'react-router-dom';
import useAxios from '../hooks/useAxios';

function SearchResults() {
  const { query } = useParams();
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_BASE_URL = import.meta.env.VITE_BASE_URL;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
  const [filter, setFilter] = useState('all');

  const { data, isLoading, error } = useAxios(
    `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=ko`
  );
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredData =
    filter === 'all'
      ? data.results
      : data.results.filter((movie) => {
          if (!movie.production_countries) {
            return false;
          }
          return filter === 'korean'
            ? movie.production_countries.some(
                (country) => country.iso_3166_1 === 'KR'
              )
            : movie.production_countries.every(
                (country) => country.iso_3166_1 !== 'KR'
              );
        });

  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }

  if (error) {
    return <Error>Error: {error.message}</Error>;
  }

  return (
    <Section>
      <SearchContainer>
        <div className="top">
          <p>
            <span>" {query} "</span> (으)로 검색하신 결과 입니다. 
            <span> 총 {data.total_results}개</span>
          </p>
          <div className="filter">
            <select name="filter" value={filter} onChange={handleFilterChange}>
              <option value="all">전체</option>
              <option value="korean">한국영화</option>
              <option value="foreign">외국영화</option>
            </select>
          </div>
        </div>
        <Results>
          {data &&
            (filteredData.length > 0 ? (
              filteredData.map((movie) => (
                <Card key={movie.id}>
                  <div className="left">
                    <Link to={`/movies/${movie.id}`}>
                      <img src={`${POSTER_URL}${movie.poster_path}`} alt="" />
                    </Link>
                  </div>
                  <div className="right">
                    <p className="title">{movie.title}</p>
                    <p className="over">
                      {movie.overview.length > 30
                        ? movie.overview.slice(0, 30) + '...'
                        : movie.overview}
                    </p>
                    <p className="aver">{movie.vote_average}</p>
                    <p className="date">{movie.release_date}</p>
                  </div>
                </Card>
              ))
            ) : (
              <div className="non_page">
                <h1>404 NOT FOUND</h1>
                <p>검색 결과가 없습니다.</p>
                <p>다른 검색어로 다시 시도해주세요.</p>
              </div>
            ))}
        </Results>
      </SearchContainer>
    </Section>
  );
}

export default SearchResults;
