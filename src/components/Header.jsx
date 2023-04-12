import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HeaderContainer } from '../styles/GlobalStyle';
import { toggleSidebar } from '../redux/sideSlice.js';
import { RxHamburgerMenu } from 'react-icons/rx';
import Search from './Search';

const Header = () => {
  const dispatch = useDispatch();

  const toggleOpen = () => {
    dispatch(toggleSidebar());
  };

//   <div className="toggle" onClick={toggleOpen}>
//   <RxHamburgerMenu />
// </div>

  return (
    <HeaderContainer>
      <div className="logo">
        <Link to="/">GHMovies</Link>
      </div>
      <div className="search">
        <Search />
      </div>
    </HeaderContainer>
  );
};

export default Header;
