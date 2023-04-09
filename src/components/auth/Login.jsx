import React from 'react';
import { Auth, LoginForm, Section } from '../../styles/GlobalStyle';
import { useSelector } from 'react-redux';

const Login = () => {
  const sidebarWidth = useSelector((state) => state.sidebar.sidebarWidth);

  return (
    <Section style={{ paddingLeft: `${sidebarWidth}px` }}>
      <Auth>
        <LoginForm>
          <div className="area">
            <input type="text" />
          </div>
          <div className="area">
            <input type="text" />
          </div>
          <div className="area">
            <input type="text" />
          </div>

          <input type="submit" value="로그인" />
        </LoginForm>
      </Auth>
    </Section>
  );
};

export default Login;
