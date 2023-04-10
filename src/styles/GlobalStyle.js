import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const LogoAnimation = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rotate(360deg);
  }
`;

const GlobalWrap = styled.div`
  width: 100%;
  background: #050306;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ErrorBox = styled.div`
  display: block;
  width: 100%;
  font-size: 30px;
  color: salmon;
`;

const Container = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 12px;
  width: 100%;
  height: 100%;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);

  .slick-slide {
    margin-right: 20px;
  }

  .splide__arrow {
    height: 3em;
    width: 3em;
    background: #181818;
    opacity: 1;

    svg {
      fill: #fff;
    }
  }

  .splide__slide {
    min-width: 200px;
  }

  span {
    display: block;
    font-size: 20px;
    padding: 36px 0;
    font-weight: 700;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btnBox {
      display: flex;
      gap: 12px;

      button {
        width: 36px;
        height: 36px;
        font-size: 16px;
        color: #fff;
        background: rgba(255, 255, 255, 0.14);
        border-radius: 50%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    /* padding: 60px 16px 0px 16px; */

    span {
      font-size: 18px;
    }
  }
`;

const DetailPage = styled.div`
  margin: 0 auto;
  max-width: 964px;
  color: #b1b1b1;
  padding: 60px 12px;

  .content {
    position: relative;
    background-color: #1d1d1d;
    display: block;
    gap: 12px;
    width: 100%;
    height: 100%;

    .splide__arrow {
      height: 2.5em;
      width: 2.5em;
      background: #181818;
      opacity: 1;
      top: 50%;
      transform: translateY(-50%);

      .splide__arrow.splide__arrow--prev {
        left: 0.5em;
      }

      svg {
        width: 1em;
        height: 1em;
        fill: #fff;
      }
    }

    .slide-wrapper {
      overflow-x: auto;
    }

    .net {
      text-align: center;
      color: salmon;
      padding: 6px 0;
    }

    .cast_contents {
      display: flex;
      flex-flow: column wrap;
    }

    button {
      position: absolute;
      right: 12px;
      top: 12px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #181818;
      color: #fff;
      transition: 0.25s all ease;

      &:hover {
        background: #fff;
        color: #181818;
      }
    }

    .top {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 500px;
      overflow: hidden;
      /* background: #fff; */
      img {
        padding: 24px 0;
        max-width: 100%;
        max-height: 100%;
      }
    }

    .bot {
      padding: 36px 20px;
      display: flex;
      flex-flow: column;
      gap: 12px;

      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 6px;

        h1 {
          font-size: 22px;
          font-weight: bold;
        }
        span {
          font-size: 16px;
        }
      }

      .contents {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 16px;
      }
      p {
        font-size: 16px;
        line-height: 1.5;
        margin-top: 16px;
        color: #d2d2d2;
        padding-bottom: 6px;
        border-bottom: 1px solid rgba(255,255,255,0.12);
      }

      .cast_contents {
        display: flex;
        flex-flow: column;
        gap: 12px;

        img {
          width: 100%;
          height: 180px;
        }

        .cast_name {
          display: flex;
          flex-flow: column;

          p {
            font-size: 14px;
            border-bottom: 0;
            line-height: inherit;
            margin-top: 0;
            color: rgb(210, 210, 210);
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 30px 16px;
    .content {
      padding: 0;
      gap: 6px;

      button {
        right: 4px;
        top: 4px;
      }

      .bot {
        padding: 20px 9px;
        gap: 6px;
        .title {
          h1 {
            font-size: 18px;
          }
          span {
            font-size: 13.5px;
          }
        }

        .net {
          font-size: 14px;
        }

        p {
          font-size: 16px;
          line-height: 1.5;
        }
        
        .contents {
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          margin-top: 12px;
          
          p {
            font-size: 15px;
          }
        }
      }
    }
  }
`;

const Content = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: middle;
    transition: transform 0.2s ease;
  }
  h2 {
    font-size: 14px;
  }
  p {
    font-size: 12px;
  }
`;

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 76px;
  background: #202123;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  z-index: 1000;
  .logo {
    display: flex;
    gap: 12px;
    align-items: center;

    a {
      font-size: 26px;
      color: skyblue;
      letter-spacing: 0.2rem;
      text-shadow: 0 0 15px skyblue 0 0 25px;
      cursor: pointer;
      animation: ${LogoAnimation} 3s linear infinite;
    }

    .toggle {
      width: 26px;
      display: flex;
      justify-content: center;
      position: relative;
      cursor: pointer;
      color: #fff;

      svg {
        width: 100%;
        height: 100%;
      }

      &:focus,
      &:active {
        color: #1de9b6;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .logo  { 
      gap: 7.5px;
      a {
      font-size: 22px;
      letter-spacing: 0.15rem;
    }
  }
  }
`;

const SideContainer = styled.div`
  position: fixed;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 60px 12px 0px 12px;
  height: calc(100% - 76px);
  top: 76px;
  left: 0;
  z-index: 1200;
  background: #202123;

  .sidebar_contents {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    gap: 6px;

    &.close {
      .sidebar_link {
        display: flex;
        flex-flow: column wrap;

        a,
        span {
          margin: 12px auto;
          color: #b1aab1;
          font-size: 22px;
          transition: color 0.2s ease;
          &:hover,
          &:focus {
            color: #09f;
          }
        }

        span {
          display: inline-block;
          text-align: center;
          font-size: 14px;
          letter-spacing: 0.1rem;
        }
      }
    }

    .side_content {
      display: flex;
      flex-flow: column wrap;
      width: 100%;
      gap: 12px;
      padding: 12px 0px 10px 0px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.16);
      &:hover {
        background: rgba(255, 255, 255, 0.12);
      }

      .side_top {
        color: #fff;
        p {
          padding-left: 20px;
          font-size: 17px;
        }
      }

      .side_bot {
        display: flex;
        flex-flow: column wrap;
        gap: 3px;

        .link_items {
          padding: 6px;
          padding-left: 12px;
          span {
            font-size: 17px;
            color: #fff;
            padding: 0;
          }
          a {
            display: flex;
            padding: 0;
            align-items: center;
            gap: 16px;
          }
        }

        a,
        span {
          color: #b1aab1;
          display: block;
          padding: 2px 0px 2px 22px;
          font-size: 13px;
        }

        a:hover,
        a:focus,
        span:hover {
          color: #09fe;
        }
      }
    }
  }
`;

const Section = styled.section`
  position: relative;
  padding-top: 76px;
  min-height: 100vh;
  transition: padding-left 0.15s ease;
  #page-numbers {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    color: #fff;
    padding: 12px;
    width: 100%;

    li {
      padding: 6px 20px;
      background: #08f;
      cursor: pointer;
    }
  }
`;

const SearchForm = styled.form`
  width: 400px;
  max-width: 100%;
  padding: 6px;
  display: flex;
  justify-content: space-between;

  input {
    flex: 1 1 90%;
    width: 100%;
    height: 38px;
    background: #141414;
    font-size: 14px;
    padding: 0 12px;
    color: #fff;
  }

  button {
    flex: 1 1 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background: #141414;
    cursor: pointer;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    button {
      flex: 1 1 15%;
      font-size: 16px;
    }
  }
`;

const LoginLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  max-width: 100%;
  height: 36px;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 600;
  background: #1de9b6;
  color: #fff;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const LoginForm = styled.form`
  width: 100%;
  padding: 20px;
  background: #f0fcfc;
  color: #000;

  display: flex;
  gap: 12px;
  flex-flow: column wrap;
  justify-content: center;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(255, 255, 255, 0.33);

  input {
    height: 46px;
    border: 1px solid #ccc;
    padding: 12px 20px;
  }
`;

const Auth = styled.div`
  padding: 42px 22px;
  margin: auto;
  width: 100%;
  max-width: 768px;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`;

const TopArrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  position: fixed;
  bottom: 4%;
  right: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    width: 36px;
    height: 36px;
    bottom: 10%;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  flex-flow: column wrap;
  color: #fff;
  background: rgb(29, 29, 29);
  overflow: hidden;

  .contents {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    width: 100%;
    transition: 0.15s transform linear;
    overflow: hidden;
    &:hover {
      transform: translateY(-2%);
    }

    .top {
      width: 100%;
      height: 300px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .bot {
      padding: 12px 0;
      p {
        padding: 2px 6px;
      }
      .title {
        font-weight: 600;
      }
      .aver,
      .date {
        line-height: 1.5;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.66);
        span {
          font-size: 16px;
          color: salmon;
        }
      }

      .date span {
        font-size: 15px;
        color: #fff;
      }
    }
  }

  @media screen and (max-width: 768px) {
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 30px 16px;
  margin: auto;
  max-width: 1280px;
  width: 100%;
  gap: 30px;

  .items {
    padding: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 20px;
      color: #fff;
    }
    span {
      font-weight: 600;
      font-size: 22px;
      color: salmon;
    }

    .filter {
      position: relative;
      &::after {
        position: absolute;
        content: '';
        top: 50%;
        right: 10px;
        transform: translateY(-50%) rotate(180deg); /* 회전 */
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid white;
      }
      select {
        width: 150px;
        padding: 10px;
        background: #202123;
        border: 1px solid rgba(0, 0, 0, 0.11);
        color: #fff;
        outline: none;
        font-size: 14px;
        appearance: none;
        cursor: pointer;

        &:focus {
          border: 1px solid rgba(255, 255, 255, 0.11);
        }

        option {
          background: transparent;
          border-radius: 0;
          border: none;
        }
      }
    }
  }

  .non_page {
    position: absolute;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    top: 50%;
    left: 50%;
    width: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    /* border: 1px solid rgba(255,255,255,0.16); */
    h1,
    p {
      display: block;
      width: 100%;
      text-align: center;
    }

    h1 {
      padding: 16px 0;
      font-size: 40px;
      letter-spacing: 0.03rem;
      color: #fe5493;
    }

    p {
      font-size: 20px;
      padding: 3px 0;
      color: #fff;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 24px 12px;
    gap: 16px;

    .items {
      padding: 12px 0px 0px 0px;
      flex-flow: column wrap;
      align-items: flex-end;
      gap: 16px;

      p {
        font-size: 16px;
        span {
          font-size: 18px;
        }
      }

      .filter select {
        width: 125px;
        padding: 8px;
        background: #202123;
        border: 1px solid rgba(0, 0, 0, 0.11);
        color: #fff;
        outline: none;
        font-size: 13px;
      }
    }

    .non_page {
      position: relative;
      width: 100%;
      /* border: 1px solid rgba(255,255,255,0.16); */

      h1 {
        padding: 16px 0;
        font-size: 26px;
        letter-spacing: 0.03rem;
        color: #fe5493;
      }

      p {
        font-size: 14px;
        padding: 3px 0;
        color: #fff;
      }
    }
  }
`;

const Results = styled.div`
  padding: 40px 26px;
  max-width: 1280px;
  width: 100%;
  margin: auto;
  gap: 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 768px) {
    padding: 20px 12px;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media screen and (max-width: 501px) {
    padding: 20px 18px;
    grid-template-columns: 1fr;
  }
`;

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  padding: 0px 0px 30px 80px;
  gap: 12px;
  color: #fff;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.16);

  .top {
    padding: 16px;
    width: 100%;
    background: rgb(34, 34, 35);
    text-align: center;
    a {
      color: #fff;
      padding: 0 20px;
    }
  }

  .links {
    width: 100%;
    text-align: center;
    padding: 6px 0;
    a, button {
      padding: 0 16px;
      color: #8c8888;
    }
  }

  .contents {
    width: 100%;
    text-align: center;
    p {
      line-height: 1.5;
      font-size: 13px;
      color: #8c8888;
    }
  }

  @media screen and (max-width: 768px) {
    gap: 8px;

    .top {
      a {
        font-size: 14px;
      }
    }

    .links {
      a {
        font-size: 13px;
      }
    }

    .contents {
      p {
        font-size: 11.5px;
      }
    }
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 30px 0;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 24px 0;
    gap: 16px;
  }
`;

const PaginationButton = styled.button`
  padding: 12px 20px;
  background: #1de9b6;
  color: #fff;
  border-radius: 3px;

  @media screen and (max-width: 768px) {
    padding: 9px 16px;
  }
`;

const Board = styled.div`
  /* table 형식으로 만들어야댐 */
  display: block;
  max-width: 1024px;

  /* thead */
  /* tbody */
  /*  */
`;

export {
  Section,
  GlobalWrap,
  Container,
  Content,
  ErrorBox,
  HeaderContainer,
  SideContainer,
  SearchForm,
  LoginLink,
  TopArrow,
  DetailPage,
  Card,
  Results,
  FooterContainer,
  PaginationContainer,
  PaginationButton,
  SearchContainer,
  LoginForm,
  Auth,
};
