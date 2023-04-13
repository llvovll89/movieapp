import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider} from 'react-redux';
import Header from './components/Header';
import Home from './home/Home';
import MovieDetail from './pages/movie/MovieDetail';
import Sidebar from './components/Sidebar';
import Login from './components/auth/Login';
import Top from './components/Top';
import store from './redux/store';
import SearchResults from './components/SearchResults';
import Board from './components/board/Board';
import Footer from './components/Footer';
import TvDetail from './pages/tv/TvDetail';
import NotFound from './components/NotFound';
import Category from './pages/category/Category';
import { ResetStyle } from './styles/ResetStyle';
import { GlobalWrap } from './styles/GlobalStyle';



function App() {

  return (
    <Provider store={store}>
      <Router basename="movieapp">
        <GlobalWrap >
          <ResetStyle />
          <Header />
          <Top />
          <Routes>
            <Route path="/">
              <Route index exact element={<Home />} />
              <Route path="movies/:id" element={<MovieDetail />} />
              <Route path="tv/:id" element={<TvDetail />} />
              <Route path="search/:query" element={<SearchResults />} />
              <Route path="category/*" element={<Category />} />
              <Route path="board" element={<Board />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <Footer />
        </GlobalWrap>
      </Router>
    </Provider>
  );
}

export default App;
