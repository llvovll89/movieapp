import React, { useEffect, useCallback } from 'react';
import useAxios from '../hooks/useAxios';
import useDebounce from '../hooks/useDebounce';
import { SearchForm, ErrorBox } from '../styles/GlobalStyle';
import { Loading, Spinner } from '../styles/Loading';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearch } from '../redux/searchSlice';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => String(state.search.query));

  const history = useNavigate();

  const { VITE_API_KEY: API_KEY, VITE_BASE_URL: API_BASE_URL } = import.meta
    .env;

  const debounceSearchQuery = useDebounce(searchQuery, 500);

  const { data, isLoading, error } = useAxios(
    `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${debounceSearchQuery}&language=ko`
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (searchQuery.trim().length < 1) {
        return;
      }

      if (data && data.results) {
        history(`/search/${searchQuery}`, { state: { results: data.results } });
      }
      dispatch(updateSearch(''));
    },
    [data, dispatch, history, searchQuery]
  );

  useEffect(() => {
    if (!searchQuery) {
      dispatch(updateSearch(''));
      return;
    }
  }, [dispatch, searchQuery]);

  return (
    <>
      {isLoading ? (
        <Loading>
          <Spinner />
        </Loading>
      ) : (
        <SearchForm onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => dispatch(updateSearch(e.target.value))}
          />
          <button type="submit">
            <AiOutlineSearch />
          </button>
        </SearchForm>
      )}
      {error && <ErrorBox>Error: {error.message}</ErrorBox>}
    </>
  );
};

export default Search;
