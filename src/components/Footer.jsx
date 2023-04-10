import React from 'react';
import { FooterContainer } from '../styles/GlobalStyle';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { mobileSizeOn } from '../redux/mobileSlice';

const Footer = () => {
  const mobile = useSelector((state) => state.mobileApp.isMobile);
  const dispatch = useDispatch();

  const mobileHandler = () => {
    dispatch(mobileSizeOn());
  }
  
  return (
    <FooterContainer>
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
        <button title="mobile버전" onClick={mobileHandler}>{mobile ? "PC버전" : "모바일버전"}</button>
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
