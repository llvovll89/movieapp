import React from 'react';
import { Container, Section } from '../../styles/GlobalStyle';
import { useSelector } from 'react-redux';

const Board = () => {
  const sidebarWidth = useSelector((state) => state.sidebar.sidebarWidth);

  return (
    <Section style={{ paddingLeft: `${sidebarWidth}px` }}>
      <Container>
        <h1>자유게시판</h1>
        
      </Container>
    </Section>
  );
};

export default Board;
