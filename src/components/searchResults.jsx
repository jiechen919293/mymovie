import { useState } from "react";
import Movie from './movie';

const SearchResults = (props) => {
    const [favouriteList, setFavouriteList] = useState([])
    const [searchList, setSearchList] = useState([{
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
    }])
    const testMovie = [
        {
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
        }
    ]
    return (<>
        <div className="titleList">
            <div className="title">
                <h1>Results</h1>
                <div className="titles-wrapper">
                    {/* {testMovie.map((movie) => {
                        return (
                            <Movie movie={movie} key={movie.id} handleChangeFavor={props.handleChangeFavor}
                                favourite={favouriteList.includes(movie.id)} />)
                    })} */}
                </div>
            </div>
        </div>
    </>);
}

export default SearchResults;