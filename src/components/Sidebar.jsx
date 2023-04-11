import React, { useCallback, useState, useEffect } from 'react';
import { SideContainer, ErrorBox } from '../styles/GlobalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  AiOutlineStar,
  AiOutlineHome,
} from 'react-icons/ai';
import { toggleSidebar } from '../redux/sideSlice';

const Sidebar = () => {
  const { sidebarWidth, isOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  const [currentTime, setCurrentTime] = useState(new Date());
  const [mobile, setMobile] = useState(false);

  const toggleHandler = useCallback(() => {
    if (window.innerWidth <= 768) {
      if (!isOpen) {
        dispatch(toggleSidebar());

        setMobile(true);
      }
    } else {
      if (isOpen) {
        dispatch(toggleSidebar());
        setMobile(false);
      }
    }
  }, [dispatch, isOpen]);

  useEffect(() => {

    const intervalTime = setInterval(() => setCurrentTime(new Date()), 1000);
    window.addEventListener('resize', toggleHandler);
    return () => {
      clearInterval(intervalTime);
      window.removeEventListener('resize', toggleHandler);
    };
  }, [toggleHandler, isOpen]);

  return (
    <SideContainer
      style={{ width: `${sidebarWidth}px` }}
    >
      <div className={`sidebar_contents${!isOpen ? ' ' : ' close'}`}>
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
          null
        )}
      </div>
    </SideContainer>
  );
};

export default Sidebar;
