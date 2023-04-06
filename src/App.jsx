import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './home/Home';
import MovieDetail from './components/MovieDetail';
import { ResetStyle } from './styles/ResetStyle';
import { GlobalWrap } from './styles/GlobalStyle';
import Sidebar from './components/Sidebar';
import Login from './components/auth/Login';
import Top from './components/Top';
import { Provider } from 'react-redux';
import store from './redux/store';
import SearchResults from './components/SearchResults';
import Board from './components/board/Board';
import KoreanMovie from './components/category/KoreanMovie';
import Animation from './components/category/Animation';
import JapanAni from './components/category/JapanAni';
import Footer from './components/Footer';
import TvDetail from './components/TvDetail';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalWrap>
          <ResetStyle />
          <Header />
          <Sidebar />
          <Top />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="movies/:id" exact element={<MovieDetail />} />
            <Route path="tv/:id" exact element={<TvDetail />} />
            <Route path="/search/:query" exact element={<SearchResults />} />
            <Route path="/kor_movie" exact element={<KoreanMovie />} />
            <Route path="/jp_ani" exact element={<JapanAni />} />
            <Route path="/animation" exact element={<Animation />} />
            <Route path="/board" exact element={<Board />} />
            <Route path="login" exact element={<Login />} />
          </Routes>
          <Footer />
        </GlobalWrap>
      </Router>
    </Provider>
  );
}

export default App;
