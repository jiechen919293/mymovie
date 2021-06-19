import Movie from './movie';
const WatchList = (watchList,handleWatch) => {
    let testMovie = [{
        "adult": false,
        "backdrop_path": "/9VEOQvCnd8T8wILgyqjKgyhALw4.jpg",
        "genre_ids": [
            28,
            80,
            53
        ],
        "id": 324542,
        "original_language": "en",
        "original_title": "Sleepless",
        "overview": "Undercover Las Vegas police officer Vincent Downs, who has got a lot of enemies, is caught in a high stakes web of corrupt cops and the mob-controlled casino underground. When a heist goes wrong, a crew of homicidal gangsters gets T, Downs’ teenage son. In one sleepless night, he will have to rescue his son T (who they got), evade an internal affairs investigation and bring the kidnappers to justice.",
        "popularity": 21.481,
        "poster_path": "/9WkUSY33MDPGmz0vtzbsfaxTHVa.jpg",
        "release_date": "2017-01-12",
        "title": "Sleepless",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 1001
    },
    {
        "adult": false,
        "backdrop_path": "/8gN4y9ijiYHIdcvWVHFgqumF5W1.jpg",
        "genre_ids": [
            35,
            18,
            10749
        ],
        "id": 858,
        "original_language": "en",
        "original_title": "Sleepless in Seattle",
        "overview": "Desperate to find his dad Sam a date, a young boy calls into a radio show and catches the attention of Annie, a journalist who wants to meet Sam atop the Empire State Building.",
        "popularity": 10.674,
        "poster_path": "/iLWsLVrfkFvOXOG9PbUAYg7AK3E.jpg",
        "release_date": "1993-06-24",
        "title": "Sleepless in Seattle",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 1650
    }]
    return (
        <>
            <div className="titleList">
                <div className="title">
                    <h1>My Watch List</h1>
                    <div className="titles-wrapper">
                        <div className="movie">
                            <a href="/details/1416"><img src="https://image.tmdb.org/t/p/w500/clnyhPqj1SNgpAdeSS6a6fwE6Bo.jpg" alt="Movie poster" />
                                <div className="overlay">
                                    <div className="title">Grey's Anatomy</div>
                                    <div className="rating">8.2/10</div>
                                    <div className="plot">Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.</div>
                                </div>
                            </a>
                            <div data-toggled="true" className="listToggle">
                                <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                            </div>
                        </div>
                        {testMovie.map((movie) => {
                            return (
                                <Movie key={movie.id}
                                    movie={movie}
                                // favourite={favouriteList.includes(movie.id)}
                                handleWatch={handleWatch}
                                />)
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default WatchList;