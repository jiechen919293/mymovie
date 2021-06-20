import { useLocation } from "react-router-dom"
const Details = ({ watchList, handleWatch}) => {
    const location = useLocation()
    const movie = location.state;
    console.log(movie);
    let testWatch = []
    if (watchList) { testWatch = watchList }
    return (
        <div className="show-details">
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : `./image-not-available.jpg`} alt="post movie" />
            <div className="show-details-inner">
                <h1>{movie.title}</h1>
                <div className="description">
                    {movie.overview}
                </div>
                 
                <button
                 className={testWatch.find((x)=>{return x.id===movie.id})? "remove-to-watchlist" : "add-to-watchlist"}
                 onClick={handleWatch}
                >
                {testWatch.find((x)=>{return x.id===movie.id})? `- Remove from watch list`:`+ Add to watch list`}
                </button>

            </div>
        </div >
    );
}

export default Details;