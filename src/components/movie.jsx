
const Movie = ({ movie, flag,handleWatch }) => {
    return (<>
        <div className="movie">
            <a href="/details/94951">
                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : `./image-not-available.jpg`} alt="Movie Poster" />
                <div className="overlay">
                    <div className="title">{movie.title}</div>
                    <div className="rating">{movie.vote_average}/10</div>
                    <div className="plot">{movie.overview}</div>
                </div>
            </a>
            <div data-toggled={flag}
                className="listToggle">
                <div onClick={() => handleWatch(movie)}>
                    <i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i>
                </div>
            </div>
        </div>
    </>);
}
export default Movie;