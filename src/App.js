import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/header';
import SearchResults from './components/searchResults';
import MovieList from './components/movieList';
import WatchList from './components/watchList'
function App() {
  const [query, setQuery] = useState('');
  const [moviePopul, setMoviePopul] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);

  const getMainPageData = async () => {
    const providerId = [8, 230, 337, 350];
    const APIkey = '7b94aeb4b9c0dd930c28ea14fa3c1fcb'
    const urlPopul = `https://api.themoviedb.org/3/discover/tv?api_key=${APIkey}&language=en-CA&sort_by=popularity.des&watch_region=CA`;
    const res = await Promise.all([
      fetch(`${urlPopul}&with_watch_providers=${providerId[0]}`),
      fetch(`${urlPopul}&with_watch_providers=${providerId[1]}`),
      fetch(`${urlPopul}&with_watch_providers=${providerId[2]}`),
      fetch(`${urlPopul}&with_watch_providers=${providerId[3]}`)
    ]);
    const data = await Promise.all(res.map(r => r.json()))
    let newdata = []
    for (let i = 0; i < 4; i++) {
      newdata[i] = data[i].results
    }
    // console.log(newdata);
    setMoviePopul(newdata)
  }


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
      let tempList = [...watchList];
      let index = watchList.findIndex((item) => {
      return item.id === movie.id;
    })
    if (index === -1) { tempList = [...watchList, movie]; } 
    else {
      tempList.splice(index,1)
    }
    setWatchList(tempList)
    localStorage.setItem('watchList', JSON.stringify(watchList))
    // console.log(watchList);
  }

  return (<>
    <div id="root">
      <Header
        value={query}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <Switch>
        <Route exact path='/'>
          <SearchResults
            watchList={watchList}
            searchMovies={searchMovies}
            handleWatch={handleWatch}
          />

          <MovieList
            watchList={watchList}
            moviePopul={moviePopul}
            handleWatch={handleWatch}
          />
        </Route>
      </Switch>

      <Switch>
        <Route path='/my-watch-list'>
          <WatchList
            watchList={watchList}
            handleWatch={handleWatch}
          />
        </Route>
      </Switch>
    </div>
  </>
  )
}

export default App;
