import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/BlogList/blogList';
import Movie from './pages/movie/movie';
import FavoriteList from './components/FavoriteList/FavoriteList';
import WatchLaterList from './components/WatchLaterList/WatchLaterList';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
          <Route path="movies/:type" element={<MovieList/>}></Route>
          <Route path="movies/favorites" element={<FavoriteList/>}></Route>
          <Route path="movies/watch_later" element={<WatchLaterList/>}></Route>
          <Route path="/*" element={<h1>Error page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
