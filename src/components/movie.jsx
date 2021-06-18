
const Movie = () => {
        return ( <>
            <div className="movie">
                <a href="/details/94951"><img src="https://image.tmdb.org/t/p/w500/z5yMKsYccNG6CDvPFgfWOVavoc9.jpg" alt="Movie poster" />
                    <div className="overlay">
                        <div className="title">Mythic Quest</div>
                        <div className="rating">7.2/10</div>
                        <div className="plot">
                            Meet the team behind the biggest multiplayer video game of all time. But in a workplace focused on building worlds, molding heroes, and creating legends, the most hard-fought battles don’t occur in the game—they happen in the office.
                        </div>
                    </div>
                </a>
                <div data-toggled="false" className="listToggle">
                    <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                </div>
            </div>
         </> );
        }

        export default Movie;