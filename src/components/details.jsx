const Details = ({watchList,handleWatch}) => {
    const movie=location.state;
    console.log(movie);
    return (
        <div class="show-details">
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : `./image-not-available.jpg`} alt="post movie" />
            <div class="show-details-inner">
                <h1>{movie.title}</h1>
                <div class="description">
                    {movie.overview}
                </div>
                
                <button class="add-to-watchlist">+ Add to watch list</button>
                <button class="remove-to-watchlist">- Remove from watch list</button>
            </div>
        </div>
    );
}

export default Details;