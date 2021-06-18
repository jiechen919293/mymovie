import React, { useEffect, useState } from 'react';
import Header from './components/header';
import SearchResults from './components/searchResults';
import MovieList from './components/movieList';
import WatchList from './components/watchList'
function App() {
  const [query, setQuery] = useState('');
  const [moviesPopul, setMoviesPopul] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);

  const getMainPageData = async () => {
    const providerId = [8, 230, 337, 350];
    const APIkey = '7b94aeb4b9c0dd930c28ea14fa3c1fcb'
    const urlPopul = `https://api.themoviedb.org/3/discover/tv?api_key=${APIkey}&language=en-CA&sort_by=popularity.des&watch_region=CA`;
    const mainURL = `${urlPopul}&with_watch_providers=${providerId[1]}`
    fetch(mainURL).then((data) => data.json())
      .then((data) => {
          console.log(data.results);
        let newAry=data.results
        setMoviesPopul({ newAry })
      
      })
  }
  useEffect(() => {
    getMainPageData();
  }, [])
  const getSearchMovies = (queryStr) => {
    const APIkey = '7b94aeb4b9c0dd930c28ea14fa3c1fcb'
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&language=en-US&query=${queryStr}&page=1`
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        if (data) {
          console.log(data.results);
          setSearchMovies(data.results);
          setQuery('')
        }
      })
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const queryTemp = e.target[0].value.trim();
    if (queryTemp) {
      getSearchMovies(queryTemp);
    }
  }
  const handleFavor = (id) => {

  }

  return (<>
    <div id="root">
      <Header
        value={query}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />

      <SearchResults
        searchMovies={searchMovies}
        handChangeFavor={handleFavor}
      />

      <MovieList
        moviesPopul={moviesPopul}
        handChangeFavor={handleFavor}
      />

      <WatchList />
    </div>
  </>
  )
}

export default App;
