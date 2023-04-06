import React from 'react';
import { FooterContainer } from '../styles/GlobalStyle';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Footer = () => {
  const sidebarWidth = useSelector((state) => state.sidebar.sidebarWidth);

  return (
    <FooterContainer style={{ paddingLeft: `${sidebarWidth}px` }}>
      <div className="top">
        <Link to="/">공지사항</Link>
        <Link to="/board">게시판 가기</Link>
      </div>
      <div className="links">
        <a href="#" target="_blank">
          Velog
        </a>
        <a href="#" target="_blank">
          이용약관
        </a>
        <a href="#" target="_blank">
          저작권보호
        </a>
        <Link to="/mobile">모바일 버전</Link>
      </div>
      <div className="contents">
        <p>
          HOHO 서비스는 무료 영화사이트 입니다. 누구든지 오셔서 구경하고 가세요.
        </p>
        <p>본 Web Site는 Chorme에 최적화 되어 진 사이트입니다. 🐤</p>
        <p>Copyright @ HOHO All right reserved.</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
