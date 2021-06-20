import Movie from './movie';
const MovieList = ({ moviePopul,watchList,handleWatch }) => {
    const providers = ['Netflix', 'Crave', 'Disney', 'Apple Plus']
    let testmovie = moviePopul;
    if(!moviePopul){ testmovie=[]}
    return (<>
        {providers.map((provider, index) => {
            return (
                <div className="titleList" key={index}>
                    <div className="title">
                        <h1>{provider}</h1>
                        <div className="titles-wrapper">
                            {(testmovie[index]||testmovie).map((movie) => {
                                return (
                                    <Movie key={movie.id}
                                        movie={movie}
                                        watchList={watchList}
                                        handleWatch={handleWatch}
                                    />)
                            })}</div>
                    </div>
                </div>
            )
        })}
    </>
    );
}

export default MovieList;