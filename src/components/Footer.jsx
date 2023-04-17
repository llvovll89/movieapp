import React from 'react';
import { FooterContainer } from '../styles/GlobalStyle';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Footer = () => {
  const darkModeOn = useSelector((state) => state.darkMode.dark);

  return (
    <FooterContainer className={darkModeOn ? "" : "dark"}>
      <div className="top">
        <Link to="/">공지사항</Link>
        <Link to="/">게시판가기</Link>
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
      </div>
      <div className="contents">
        <p>
        블랙타이 서비스는 무료 영화사이트 입니다. 누구든지 오셔서 구경하고 가세요.
        </p>
        <p>본 Web Site는 Chorme에 최적화 되어 진 사이트입니다. 🐤</p>
        <p>Copyright @ 블랙타이 All right reserved.</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
