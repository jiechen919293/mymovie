import Movie from './movie';
const MovieList = ({moviePopul}) => {
    const providers=['Netflix','Crave','Disney','Apple Plus']
    return ( <>
{providers.map((provider,index)=>{
    return(
             <div className="titleList" key={index}>
            <div className="title">
                <h1>{provider}</h1>
                <div className="titles-wrapper">
                     {moviePopul[index].map((movie) => {
                        return (
                            <Movie key={movie.id}
                                movie={movie}
                            // favourite={favouriteList.includes(movie.id)}
                            // handleChangeFavor={handleChangeFavor}
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