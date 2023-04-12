import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from '../styles/GlobalStyle';
import Search from './Search';
import { AiOutlineStar, AiOutlineHome, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <HeaderContainer>
      <div className="logo">
        <Link to="/">GHMovies</Link>
      </div>
      <div className={`search`}>
        <Search />
      </div>
      <div className="navbar">
        <div className="toggle" onClick={toggleNavbar} >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`contents ${isNavbarVisible ? 'open' : ''}`}>
          <div className="dropdown">
            <Link to="/">홈</Link>
          </div>
          <div className="dropdown">
            <button className="dropdown-btn">카테고리</button>
            <div className="dropdown-content">
              <Link to="/category/movies">전체영화</Link>
              <Link to="/category/animation">애니메이션 (영화)</Link>
              <Link to="/category/drama">드라마</Link>
              <Link to="/category/tv_enter">예능프로그램</Link>
              <Link to="/category/jp_ani">에니메이션</Link>
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
          <div className={`dropdown ${isNavbarVisible ? 'on' : 'off'}`}>
            <button className="dropdown-btn">로그인</button>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
