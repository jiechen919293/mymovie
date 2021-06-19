import Movie from './movie';
const WatchList = ({watchList,handleWatch}) => {
    console.log(watchList);
 
    return (
        <>
            <div className="titleList">
                <div className="title">
                    <h1>My Watch List</h1>
                    <div className="titles-wrapper">
                        {watchList.map((movie) => {
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