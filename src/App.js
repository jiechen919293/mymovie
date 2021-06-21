import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'
import Header from './components/header';
import SearchResults from './components/searchResults';
import MovieList from './components/movieList';
import WatchList from './components/watchList'
import Details from './components/details'



function App() {
  
  //state part
  const [query, setQuery] = useState('');
  const [moviePopul, setMoviePopul] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [watchList, setWatchList] = useState(JSON.parse(localStorage.getItem("watchList")) || []);
  const history = useHistory();

  //for main-page
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

  //use effects
  useEffect(() => {
    getMainPageData();
  }, [])

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(watchList))
  }, [watchList])

  //search API data
  const getSearchMovies = (queryStr) => {
    const APIkey = '7b94aeb4b9c0dd930c28ea14fa3c1fcb'
    const url = `https://api.themoviedb.org/3/search/tv?api_key=${APIkey}&language=en-CA&page=1&query=${queryStr}`
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        if (data) {
          // console.log(data.results);
          setSearchMovies(data.results);
          setQuery('')
        }
      })
  }

  //hanle change and input
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryTemp = e.target[0].value.trim();
    if (queryTemp) {
      getSearchMovies(queryTemp);
      history.push({ pathname: '/search', search: queryTemp })
    }
  }

  //handle select watch icon
  const handleWatch = (movie) => {
    let tempList = [...watchList];
    let index = watchList.findIndex((item) => {
      return item.id === movie.id;
    })
    if (index === -1) {
      tempList = [...watchList, movie]
    }
    else {
      tempList.splice(index, 1)
    }
    setWatchList(tempList)
    localStorage.setItem('watchList', JSON.stringify(tempList))
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
          <MovieList
            moviePopul={moviePopul}
            handleWatch={handleWatch}
          />
        </Route>
      </Switch>

      <Switch>
        <Route path='/search'>
          <SearchResults
            searchMovies={searchMovies}
            handleWatch={handleWatch}
          />
        </Route>
      </Switch>

      <Switch>
        <Route path='/my-watch-list'>
          <WatchList
            handleWatch={handleWatch}
          />
        </Route>
      </Switch>
      
      <Switch>
        <Route path='/details' component={Details}>
        </Route>
      </Switch>
    </div>
  </>
  )
}

export default App;
