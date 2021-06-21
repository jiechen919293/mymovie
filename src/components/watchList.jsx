import Movie from './movie';



const WatchList = ({ handleWatch }) => {
    //get local data
    const watchList = JSON.parse(localStorage.getItem("watchList")) || [];

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