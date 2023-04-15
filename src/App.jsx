import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider} from 'react-redux';
import Header from './components/Header';
import Home from './home/Home';
import MovieDetail from './pages/detailpages/MovieDetail';
import Top from './components/Top';
import store from './redux/store';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import TvDetail from './pages/detailpages/TvDetail';
import NotFound from './components/NotFound';
import Category from './pages/Category';
import { ResetStyle } from './styles/ResetStyle';
import { GlobalWrap } from './styles/GlobalStyle';
import Person from './pages/Person';
import PersonDetail from './pages/person/PersonDetail';



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
              <Route path="character/:id" element={<PersonDetail />} />
              <Route path="search/:query" element={<SearchResults />} />
              <Route path="category/*" element={<Category />} />
              <Route path="person/*" element={<Person />} />
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
