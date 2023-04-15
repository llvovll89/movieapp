import { createGlobalStyle } from 'styled-components';

const ResetStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;700&display=swap');

@font-face {
  font-family: 'Chosunilbo_myungjo';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}    

body {
    // font-family: 'Nanum Gothic', sans-serif;
    font-family: 'Chosunilbo_myungjo';
}

a {
    text-decoration: none;
}

  ol,
  ul {
    list-style: none;
  }

button, input {
    outline: none;
    border: none;
    font-size: 14px;
    background: transparent;
    cursor: pointer;
    font-family: 'Chosunilbo_myungjo';
}

img {
  max-width: 100%;
  height: auto;
}

// 커스텀 스크롤바
body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,.46);
  border-radius: 10px;
}

body::-webkit-scrollbar-track {
  background: rgb(34,34,35);
}

`;

export { ResetStyle };
