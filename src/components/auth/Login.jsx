import React from 'react';
import { SearchForm, Section } from '../../styles/GlobalStyle';
import { useSelector } from 'react-redux';

const Login = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);



  return (
<Section style={{ paddingLeft: isOpen ? '50px' : '200px' }}>
      <SearchForm>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </SearchForm>
    </Section>
  );
};

export default Login;
