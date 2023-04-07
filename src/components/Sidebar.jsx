import React from 'react';
import { SideContainer } from '../styles/GlobalStyle';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  AiOutlineStar,
  AiOutlineHome,
  AiOutlineFieldTime,
} from 'react-icons/ai';

const Sidebar = () => {
  const sidebarWidth = useSelector((state) => state.sidebar.sidebarWidth);
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <SideContainer style={{ width: `${sidebarWidth}px` }}>
      <div className={`sidebar_contents${isOpen ? ' close' : ''}`}>
        {!isOpen ? (
          <>
            <div className="side_content">
              <div className="side_top">
                <p>Category</p>
              </div>
              <div className="side_bot">
                <Link to="/category/movies">전체영화</Link>
                <Link to="/category/animation">애니메이션 (영화)</Link>
                </div>
                </div>
                <div className="side_content">
                <div className="side_top">
                <p>방송프로그램</p>
                </div>
                <div className="side_bot">
                <Link to="/category/drama">드라마</Link>
                <Link to="/category/tv_enter">예능프로그램</Link>
                <Link to="/category/jp_ani">에니메이션</Link>
              </div>
            </div>
            <div className="side_content">
              <div className="side_top">
                <p>게시판</p>
              </div>
              <div className="side_bot">
                <span>자유게시판</span>
                <span>회원게시판</span>
                <span>영화추천</span>
              </div>
            </div>
          </>
        ) : (
          <div className="sidebar_link">
            <Link to="/">
              <AiOutlineHome />
            </Link>
            <Link to="/">
              <AiOutlineStar />
            </Link>
            <Link to="/">
              <AiOutlineFieldTime />
            </Link>
          </div>
        )}
      </div>
    </SideContainer>
  );
};

export default Sidebar;
