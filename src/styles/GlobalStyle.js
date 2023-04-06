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

const Error = styled.div`
  display: 'block';
  width: 100%;
`;

const Loading = styled.div`
  display: 'block';
  width: 100%;
`;

const Container = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 80px;
  width: 100%;
  height: 100%;
  color: #fff;

  span {
    display: block;
    font-size: 20px;
    padding: 36px 0;
  }

  @media screen and (max-width: 768px) {
    padding: 60px 16px 0px 16px;

    span {
      font-size: 18px;
    }
  }
`;

const DetailPage = styled.div`
  margin: 0 auto;
  max-width: 768px;
  color: #b1b1b1;
  padding: 60px 0;

  .content {
    position: relative;
    background-color: #1d1d1d;
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    width: 100%;
    height: 100%;

    button {
      position: absolute;
      right: 12px;
      top: 12px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #181818;
      color: #fff;
    }

    .top {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 500px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        vertical-align: center;
        object-fit: cover;
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
        h1 {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 8px;
        }
        span {
          font-size: 18px;
        }
      }

      .contents {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 16px;
        span {
          padding: 6px 0;
          font-size: 16px;
          margin-right: 8px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .content {
      padding: 0 18px;
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

    a {
      font-size: 23px;
      color: skyblue;
      letter-spacing: 0.2rem;
      text-shadow: 0 0 15px skyblue 0 0 25px;
      cursor: pointer;
      animation: ${LogoAnimation} 3s linear infinite;
    }

    .toggle {
      width: 20px;
      display: flex;
      justify-content: center;
      position: relative;
      cursor: pointer;
      color: #fff;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media screen and (max-width: 768px) {
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

        a {
          margin: 12px auto;
          color: #b1aab1;
          font-size: 22px;
          transition: color 0.2s ease;
          &:hover {
            color: rgb(29, 233, 182);
          }
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
        a,
        span {
          color: #b1aab1;
          display: block;
          padding: 2px 0px 2px 22px;
          font-size: 13px;
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

  @media screen and (max-width: 768px) {
    padding-left: 50px;
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
    width: 300px;
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
  font-size: 16px
  font-weight: 600;
  background: #1de9b6;
  color: #050306;

  @media screen and (max-width: 768px) {
    width: 60px;
  }
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
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  color:#fff;
  gap: 20px;
  .left {
    flex: 1 1 35%;
    img {
      width: 100%;
    }
  }
  .right {
    flex 1 1 65%;
    display: flex;
    flex-flow: column wrap;
    gap: 12px;
    padding: 16px;
    .title {
      font-size: 20px;
    }
    .over {
      color: #d6c8c8; 
    }
  }
`;

const Results = styled.div`
  padding: 40px 36px;
  width: 100%;
  margin: auto;
  gap: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .top {
    padding: 20px 0;
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
`;

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  padding: 0px 0px 30px 0px;
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
    a {
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
`;

const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 800px;
    max-height: 80%;
    overflow: auto;
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 28px;
    font-weight: bold;
    color: #aaa;
    cursor: pointer;
  }
`;

export {
  Section,
  GlobalWrap,
  Container,
  Content,
  Error,
  Loading,
  HeaderContainer,
  SideContainer,
  SearchForm,
  LoginLink,
  TopArrow,
  DetailPage,
  Card,
  Results,
  FooterContainer,
  ModalContainer,
};
