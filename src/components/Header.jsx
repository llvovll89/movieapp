import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HeaderContainer, LoginLink } from '../styles/GlobalStyle';
import { toggleSidebar } from '../redux/sideSlice.js';
import { RxHamburgerMenu } from 'react-icons/rx';
import Search from './Search';

const Header = () => {
  const dispatch = useDispatch();

  const toggleOpen = () => {
    dispatch(toggleSidebar());
  };

  return (
    <HeaderContainer>
      <div className="logo">
        <div className="toggle" onClick={toggleOpen}>
          <RxHamburgerMenu />
        </div>
        <Link to="/">HOHO</Link>
      </div>
      <div className="search">
        <Search />
      </div>
      {/*      <div className="auth">
        <LoginLink to="/login">로그인</LoginLink>
      </div> */}
    </HeaderContainer>
  );
};

export default Header;
