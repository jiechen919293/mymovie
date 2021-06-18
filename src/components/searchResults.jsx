
import Movie from './movie';

const SearchResults = ({searchMovies,handleChangeFavor}) => {
    return (<>
        <div className="titleList">
            <div className="title">
                <h1>Results</h1>
                <div className="titles-wrapper">
                    {searchMovies.map((movie) => {
                        return (
                            <Movie key={movie.id} 
                            movie={movie} 
                            // favourite={favouriteList.includes(movie.id)}
                            // handleChangeFavor={handleChangeFavor}
                                 />)
                    })}
                </div>
            </div>
        </div>
    </>);
}

export default SearchResults;