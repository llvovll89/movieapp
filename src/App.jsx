import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Home from './home/Home';
import MovieDetail from './components/MovieDetail';
import Sidebar from './components/Sidebar';
import Login from './components/auth/Login';
import Top from './components/Top';
import store from './redux/store';
import SearchResults from './components/SearchResults';
import Board from './components/board/Board';
import Footer from './components/Footer';
import TvDetail from './components/TvDetail';
import NotFound from './components/NotFound';
import Category from './components/category/Category';

// styled-components
import { ResetStyle } from './styles/ResetStyle';
import { GlobalWrap } from './styles/GlobalStyle';

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
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/tv/:id" element={<TvDetail />} />
            <Route path="/search/:query" element={<SearchResults />} />
            <Route path="/category/*" element={<Category />} />
            <Route path="/board" element={<Board />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </GlobalWrap>
      </Router>
    </Provider>
  );
}

export default App;
