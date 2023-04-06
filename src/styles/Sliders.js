import styled from 'styled-components';

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
`;

const SliderItem = styled.div`
  min-width: 200px;
  display: flex;
  flex-flow: column wrap;
  gap: 4px;
  h2 {
    padding: 6px 0;
    font-size: 16px;
    letter-spacing: 0.02rem;
  }
  p {
    font-size: 14px;
  }
`;

export { SliderContainer, SliderItem, SliderWrapper };
