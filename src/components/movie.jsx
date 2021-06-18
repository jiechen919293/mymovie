
const Movie = (props) => {
    const[movie,favourite,handleChangeFavor]=props
    let imgURL=`https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const noneImg = 'image-not-available.jpg'
        return ( <>
            <div className="movie">
                <a href="/details/94951">
                <img src={imgURL??noneImg} alt="Movie poster" />
                    <div className="overlay">
                        <div className="title">{movie.title}</div>
                        <div className="rating">{movie.vote_average}/10</div>
                        <div className="plot">{movie.overview}</div>
                    </div>
                </a>
                <div data-toggled={favourite} 
                className="listToggle">
                    <div onClick={()=>handleChangeFavor(movie.id)}>
                    <i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i>
                    </div>
                </div>
            </div>
         </> );
        }
  export default Movie;