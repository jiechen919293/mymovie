import React, { useEffect, useState } from 'react';
import Header from './components/header';
import SearchResults from './components/searchResults';
import MovieList from './components/movieList';
import WatchList from './components/watchList'
function App() {
  const [query, setQuery] = useState('');
  const [moviePopul, setMoviePopul] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);

  const getMainPageData = async () => {
    const providerId = [8, 230, 337, 350];
    const APIkey = '7b94aeb4b9c0dd930c28ea14fa3c1fcb'
    const urlPopul = `https://api.themoviedb.org/3/discover/tv?api_key=${APIkey}&language=en-CA&sort_by=popularity.des&watch_region=CA`;
    // fetch(mainURL).then((data) => data.json())
    //   .then((data) => {
    //       console.log(data.results);
    //     let newAry=data.results
    //     setMoviesPopul({ newAry })
    //   })
      const res = await Promise.all([
        fetch(`${urlPopul}&with_watch_providers=${providerId[0]}`),
        fetch(`${urlPopul}&with_watch_providers=${providerId[1]}`),
        fetch(`${urlPopul}&with_watch_providers=${providerId[2]}`),
        fetch(`${urlPopul}&with_watch_providers=${providerId[3]}`)
      ]);
      const data = await Promise.all(res.map(r => r.json()))
      console.log(data.results);
      setMoviePopul(data.results)
  };
  
  useEffect(() => {
    getMainPageData();
  }, [])
  const getSearchMovies = (queryStr) => {
    const APIkey = '7b94aeb4b9c0dd930c28ea14fa3c1fcb'
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${APIkey}&language=en-CA&query=${queryStr}&page=1`
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
  const handleWatch = (movie) => {
console.log(movie);
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
        handleWatch={handleWatch}
      />

      <MovieList
        moviePopul={moviePopul}
        handleWatch={handleWatch}
      />

      <WatchList 
        watchList={watchList}
        handleWatch={handleWatch}
      />
    </div>
  </>
  )
}

export default App;
