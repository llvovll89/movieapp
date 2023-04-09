import React from 'react';
import { SideContainer } from '../styles/GlobalStyle';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  AiOutlineStar,
  AiOutlineHome,
  AiOutlineFieldTime,
} from 'react-icons/ai';
import { useState } from 'react';
import { useEffect } from 'react';

const Sidebar = () => {
  const sidebarWidth = useSelector((state) => state.sidebar.sidebarWidth);
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalTime = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(intervalTime);
  }, []);

  return (
    <SideContainer style={{ width: `${sidebarWidth}px` }}>
      <div className={`sidebar_contents${isOpen ? ' close' : ''}`}>
        {!isOpen ? (
          <>
            <div className="side_content">
              <div className="side_bot">
                <div className="link_items">
                  <Link to="/">
                    <span>
                      <AiOutlineHome />
                    </span>
                    <span>홈</span>
                  </Link>
                </div>
                <div className="link_items">
                  <Link to="/favorite">
                    <span>
                      <AiOutlineStar />
                    </span>
                    <span>즐겨찾기</span>
                  </Link>
                </div>
                <div className="link_items">
                  <span>{currentTime.toLocaleTimeString()}</span>
                </div>
              </div>
            </div>
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
                <Link to="/board">자유게시판</Link>
                <span>영화추천</span>
                <span>영화기록</span>
              </div>
            </div>
          </>
        ) : (
          <div className="sidebar_link">
            <Link to="/">
              <AiOutlineHome />
            </Link>
            <Link to="/favorite">
              <AiOutlineStar />
            </Link>
            <Link>
              <AiOutlineFieldTime />
            </Link>
            <span>{currentTime.toLocaleTimeString()}</span>
          </div>
        )}
      </div>
    </SideContainer>
  );
};

export default Sidebar;
