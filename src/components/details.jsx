import React, { useState, useEffect } from 'react';
const Details = (props) => {
    const [watchList, setWatchList] = useState(JSON.parse(localStorage.getItem("watchList")) || []);

//set initial value
    let movie = props.location.query || {}

//function for handle watchlist
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
        setWatchList(tempList);
        localStorage.setItem('watchList', JSON.stringify(tempList))
    }

 //use effect on detail page
    useEffect(() => {
        localStorage.setItem('watchList', JSON.stringify(watchList))}, [watchList])
        
    return (
        <div className="show-details">
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : `./image-not-available.jpg`} alt="post movie" />
            <div className="show-details-inner">
                <h1>{movie.title}</h1>
                <div className="description">
                    {movie.overview}
                </div>
                <button
                    className={watchList.find((x) => { return x.id === movie.id }) ? "remove-to-watchlist" : "add-to-watchlist"}
                    onClick={() => handleWatch(movie)}
                >
                    {watchList.find((x) => { return x.id === movie.id }) ? `- Remove from watch list` : `+ Add to watch list`}
                </button>
            </div>
        </div >
    );
}

export default Details;