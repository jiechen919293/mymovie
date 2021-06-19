
import Movie from './movie';

const SearchResults = ({searchMovies,handleWatch}) => {
    return (<>
        <div className="titleList">
            <div className="title">
                <h1>Results</h1>
                <div className="titles-wrapper">
                    {searchMovies.map((movie) => {
                        return (
                            <Movie key={movie.id} 
                            movie={movie} 
                            // flag={favouriteList.includes(movie.id)}
                             handleWatch={handleWatch}
                                 />)
                    })}
                </div>
            </div>
        </div>
    </>);
}

export default SearchResults;