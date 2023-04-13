import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import useDebounce from '../hooks/useDebounce';
import { HeaderContainer } from '../styles/GlobalStyle';
import { Loading, Spinner } from '../styles/Loading';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { updateSearch } from '../redux/searchSlice';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const toggleRef = useRef(null);
  const searchInput = useRef(null);

  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

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
      setIsSearchVisible(false);
      e.target.elements.searchInput && (e.target.elements.searchInput.value = '');
    },
    [data, dispatch, history, searchQuery]
  );

  const toggleNavbar = () => {
    setIsNavbarVisible(true);
  };

  const searchHandler = () => {
    setIsSearchVisible(true);
  };

  const handleClickOutside = useCallback((e) => {
    if (
      !searchRef?.current?.contains(e.target) &&
      !toggleRef?.current?.contains(e.target)
    ) {
      setIsSearchVisible(false);
    }
  
    if (!toggleRef?.current?.contains(e.target)) {
      setIsNavbarVisible(false);
    }
  }, [setIsSearchVisible, setIsNavbarVisible]);

  const closeClickHandler = () => {
    setIsSearchVisible(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch, searchQuery]);

  return (
    <HeaderContainer>
      <div className="logo">
        <Link to="/">GHMovies</Link>
      </div>
      <div className="navbar">
        <div
          className="toggle"
          onClick={toggleNavbar}
          onTouchStart={toggleNavbar}
        >
          {isNavbarVisible ? <AiOutlineClose /> : <RxHamburgerMenu />}
        </div>
        <div
          className={`contents ${isNavbarVisible ? 'open' : ''}`}
          ref={toggleRef}
        >
          <div className="dropdown">
            <Link to="/">홈</Link>
          </div>
          <div className="dropdown">
            <button className="dropdown-btn">카테고리</button>
            <div className="dropdown-content">
              <Link onClick={toggleNavbar} to="/category/movies">
                전체영화
              </Link>
              <Link onClick={toggleNavbar} to="/category/animation">
                애니메이션 (영화)
              </Link>
              <Link onClick={toggleNavbar} to="/category/drama">
                드라마
              </Link>
              <Link onClick={toggleNavbar} to="/category/tv_enter">
                예능프로그램
              </Link>
              <Link onClick={toggleNavbar} to="/category/jp_ani">
                에니메이션
              </Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropdown-btn">게시판</button>
            <div className="dropdown-content">
              <Link to="/board">자유게시판</Link>
              <span>영화추천</span>
              <span>영화기록</span>
            </div>
          </div>
          <div className={`dropdown ${isNavbarVisible ? 'on' : 'off'}`}>
            <button className="dropdown-btn">로그인</button>
          </div>
        </div>

        <div
          className="search"
          onClick={searchHandler}
          onTouchStart={searchHandler}
        >
          <AiOutlineSearch />
        </div>
      </div>

      <div
        className={`search_bar ${isSearchVisible ? 'open' : ''}`}
        ref={searchRef}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="영화제목, TV제목 검색"
            onChange={(e) => dispatch(updateSearch(e.target.value))}
            ref={searchInput}
          />
          <button className="close_btn" onClick={closeClickHandler} onTouchStart={closeClickHandler} >
            <AiOutlineClose />
          </button>
        </form>
      </div>
    </HeaderContainer>
  );
};

export default Header;
