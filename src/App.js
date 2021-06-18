import React,{Component, useState} from 'react';
import Header from './components/header';
import SearchResults from './components/searchResults';
import MovieList from './components/movieList';
import WatchList from './components/watchList'
function App() {
  const[query,setQuery]=useState('');
  const[moviesPopul,setMoviesPopul]=useState([]);
  const[searchMovies,setSearcheMovies]=useState([]);
 const getMoviesPopul = async (e) => {
    e.preventDefault()
    let key = this.state.inputValue
    const url = `https://api.themoviedb.org/3/search/movie?api_key=7b94aeb4b9c0dd930c28ea14fa3c1fcb&language=en-US&query=${key}&page=1`
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        if (result) {
          this.setState({ results: result.results });
          console.log(this.state.results);
        }
      })
  }
  
 const handleChange=(e)=>{
   
    console.log(e.target.value);
  }
const handleFavor=(id)=>{
  
}

  return (<>
      <div id="root">
        <Header value={query}
          handleSubmit={getMoviesPopul}
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
        <WatchList/>
</div>
    </>
  )
}

export default App;
