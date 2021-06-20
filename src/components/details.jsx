// import { useLocation } from "react-router-dom"
const Details = (props) => {
    let movie=props.location.query
    console.log(movie);

    return (
        <div className="show-details">
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : `./image-not-available.jpg`} alt="post movie" />
            <div className="show-details-inner">
                <h1>{movie.title}</h1>
                <div className="description">
                    {movie.overview}
                </div>
                <button className="add-to-watchlist">+ Add to watch list</button>
                {/* <button
                 className={testWatch.find((x)=>{return x.id===movie.id})? "remove-to-watchlist" : "add-to-watchlist"}
                 onClick={handleWatch}
                >
                {testWatch.find((x)=>{return x.id===movie.id})? `- Remove from watch list`:`+ Add to watch list`}
                </button> */}

            </div>
        </div >
    );
}

export default Details;