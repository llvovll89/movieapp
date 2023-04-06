import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import Slider from 'react-slick';

export const StyledSlider = styled(Slider)`
  width: 100%;
  height: 500px;
  .slick-slide div {
    outline: none;
  } 

  .slick-slide {
    margin: 0 10px;
  }

  .slick-list , div.slick-track {
    height: 100%;
  }

  .slick-prev:before,
  .slick-next:before {
    color: #fff;
    display: none;
  }

  .slick-slide img {
    margin: 0 auto;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .slick-dots {
    bottom: 20px;

    li {
      button:before {
        color: #fff;
        font-size: 10px;
      }
    }

    .slick-active button:before {
      color: #fff;
      opacity: 1;
    }
  }
`;
