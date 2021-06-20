import{Link} from 'react-router-dom'
const Movie = ({ movie, watchList,handleWatch }) => {

let testWatch=[]
if(watchList){ testWatch=watchList}
    return (<>
        <div className="movie">
            <Link to={{path:`/details/${movie.id}`,query:{movie}}} >
                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : `./image-not-available.jpg`} alt="Movie Poster" />
                <div className="overlay">
                    <div className="title">{movie.title}</div>
                    <div className="rating">{movie.vote_average}/10</div>
                    <div className="plot">{movie.overview}</div>
                </div>
            </Link>
            <div 
                data-toggled={testWatch.find((x)=>{return x.id===movie.id})?"true":"false"}
                className="listToggle">
                <div onClick={() => handleWatch(movie)}>
                    <i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i>
                </div>
            </div>
        </div>
    </>);
}
export default Movie