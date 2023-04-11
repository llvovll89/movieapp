import styled from 'styled-components';

const SlickContainer = styled.div`
  .slick-slider {
    width: 100%;
    height: max-content; // 슬라이더 높이 조정
    position: relative;

    .slick-list , .slick-track {
      height: 500px;
    }

    .slick-prev,
    .slick-next {
      top: -5%; 
      z-index: 1;
    }

    .slick-prev {
      left: 90%;
    }

    .slick-prev:before ,
    .slick-next::before {
      font-size: 36px;
    }

    .slick-next {
      right: 2%;
    }

    .slick-dots {
      bottom: 0;
    }
    
  }

`

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: calc(100% - 200px);
  gap: 12px;

  /* @media screen and (max-width: 564px) {
    width: calc(100% - 250px);
  } */
`;

const SliderItem = styled.div`
  min-width: 200px;
  display: flex;
  flex-flow: column wrap;
  gap: 6px;
  h3 {
    padding: 6px 0;
    font-size: 16px;
    letter-spacing: 0.02rem;
  }
  p {
    font-size: 14px;
    display: flex;
    gap: 6px;
    span {
      font-size: 15px;
      padding: 0;
      color: salmon;
    }
  }

    @media screen and (max-width: 564px) {
    min-width: 150px;
    gap: 4px;
    h3 {
      font-size: 15px;
      padding: 4px 0;
    }
  }
`;

export { SlickContainer, SliderContainer, SliderItem, SliderWrapper };
