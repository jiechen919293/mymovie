import Movie from './movie';
const MovieList = () => {
    const testMovie = [{
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
    return ( <>
        <div className="titleList">
            <div className="title">
                <h1>Netflix</h1>
                <div className="titles-wrapper">
                    <div className="movie">
                        <a href="/details/60735"><img src="https://image.tmdb.org/t/p/w500/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg" alt="Movie poster" />
                            <div className="overlay">
                                <div className="title">The Flash</div>
                                <div className="rating">7.7/10</div>
                                <div className="plot">
                                    After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian
                                    angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only "meta-human" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers
                                    for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before
                                    the world learns what Barry Allen has become...The Flash.
                                </div>
                            </div>
                        </a>
                        <div data-toggled="false" className="listToggle">
                            <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                        </div>
                    </div>
                    {testMovie.map((movie) => {
                        return (
                            <Movie key={movie.id}
                                movie={movie}
                            // favourite={favouriteList.includes(movie.id)}
                            // handleChangeFavor={handleChangeFavor}
                            />)
                    })}</div>
            </div>
        </div>
        <div className="titleList">
            <div className="title">
                <h1>Crave</h1>
                <div className="titles-wrapper">
                    <div className="movie">
                        <a href="/details/71712"><img src="https://image.tmdb.org/t/p/w500/6tfT03sGp9k4c0J3dypjrI8TSAI.jpg" alt="Movie poster" />
                            <div className="overlay">
                                <div className="title">The Good Doctor</div>
                                <div className="rating">8.6/10</div>
                                <div className="plot">
                                    A young surgeon with Savant syndrome is recruited into the surgical unit of a prestigious hospital. The question will arise: can a person who doesn't have the ability to relate to people actually save their lives
                                </div>
                            </div>
                        </a>
                        <div data-toggled="false" className="listToggle">
                            <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                        </div>
                    </div>
                    <div className="movie">
                        <a href="/details/69478"><img src="https://image.tmdb.org/t/p/w500/oIkxqt6ug5zT5ZSUUyc1Iqopf02.jpg" alt="Movie poster" />
                            <div className="overlay">
                                <div className="title">The Handmaid's Tale</div>
                                <div className="rating">8.2/10</div>
                                <div className="plot">
                                    Set in a dystopian future, a woman is forced to live as a concubine under a fundamentalist theocratic dictatorship. A TV adaptation of Margaret Atwood's novel.
                                </div>
                            </div>
                        </a>
                        <div data-toggled="false" className="listToggle">
                            <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                        </div>
                    </div>
                    <div className="movie">
                        <a href="/details/86430"><img src="https://image.tmdb.org/t/p/w500/xWJZjIKPeEZhK3JRYKOe06yW6IU.jpg" alt="Movie poster" />
                            <div className="overlay">
                                <div className="title">Your Honor</div>
                                <div className="rating">8.2/10</div>
                                <div className="plot">
                                    New Orleans judge Michael Desiato is forced to confront his own deepest convictions when his son is involved in a hit and run that embroils an organized crime family.
                                </div>
                            </div>
                        </a>
                        <div data-toggled="false" className="listToggle">
                            <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                        </div>
                    </div>
                    <div className="movie">
                        <a href="/details/79744"><img src="https://image.tmdb.org/t/p/w500/6hChiX0vIjWY4y2kz1WndHVMsDu.jpg" alt="Movie poster" />
                            <div className="overlay">
                                <div className="title">The Rookie</div>
                                <div className="rating">8/10</div>
                                <div className="plot">
                                    Starting over isn’t easy, especially for small-town guy John Nolan who, after a life-altering incident, is pursuing his dream of being an LAPD officer. As the force’s oldest rookie, he’s met with skepticism from some higher-ups who see him as just a walking
                                    midlife crisis.
                                </div>
                            </div>
                        </a>
                        <div data-toggled="false" className="listToggle">
                            <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                        </div>
                    </div>
                    <div className="movie">
                        <a href="/details/1668"><img src="https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg" alt="Movie poster" />
                            <div className="overlay">
                                <div className="title">Friends</div>
                                <div className="rating">8.4/10</div>
                                <div className="plot">The misadventures of a group of friends as they navigate the pitfalls of work, life and love in Manhattan.</div>
                            </div>
                        </a>
                        <div data-toggled="false" className="listToggle">
                            <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="titleList">
            <div className="title">
                <h1>Disney</h1>
                <div className="titles-wrapper">
                    <div className="movie">
                        <a href="/details/88396"><img src="https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYau6bJ683sw7.jpg" alt="Movie poster" />
                            <div className="overlay">
                                <div className="title">The Falcon and the Winter Soldier</div>
                                <div className="rating">7.9/10</div>
                                <div className="plot">
                                    Following the events of "Avengers: Endgame”, the Falcon, Sam Wilson and the Winter Soldier, Bucky Barnes team up in a global adventure that tests their abilities, and their patience.
                                </div>
                            </div>
                        </a>
                        <div data-toggled="false" className="listToggle">
                            <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                        </div>
                    </div>
                    <div className="movie">
                        <a href="/details/105971"><img src="https://image.tmdb.org/t/p/w500/WjQmEWFrOf98nT5aEfUfVYz9N2.jpg" alt="Movie poster" />
                            <div className="overlay">
                                <div className="title">The Bad Batch</div>
                                <div className="rating">8.9/10</div>
                                <div className="plot">
                                    Follow the elite and experimental Clones of the Bad Batch as they find their way in a rapidly changing galaxy in the aftermath of the Clone Wars.
                                </div>
                            </div>
                        </a>
                        <div data-toggled="false" className="listToggle">
                            <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                        </div>
                    </div>
                    <div className="movie">
                        <a href="/details/85271"><img src="https://image.tmdb.org/t/p/w500/glKDfE6btIRcVB5zrjspRIs4r52.jpg" alt="Movie poster" />
                            <div className="overlay">
                                <div className="title">WandaVision</div>
                                <div className="rating">8.4/10</div>
                                <div className="plot">
                                    Wanda Maximoff and Vision—two super-powered beings living idealized suburban lives—begin to suspect that everything is not as it seems.
                                </div>
                            </div>
                        </a>
                        <div data-toggled="false" className="listToggle">
                            <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                        </div>
                    </div>
                    <div className="movie">
                        <a href="/details/456"><img src="https://image.tmdb.org/t/p/w500/zLudbPueg8CxGhMS2tyDh3p0TdK.jpg" alt="Movie poster" />
                            <div className="overlay">
                                <div className="title">The Simpsons</div>
                                <div className="rating">7.8/10</div>
                                <div className="plot">
                                    Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture
                                    icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.
                                </div>
                            </div>
                        </a>
                        <div data-toggled="false" className="listToggle">
                            <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                        </div>
                    </div>
                    <div className="movie">
                        <a href="/details/82856"><img src="https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg" alt="Movie poster" />
                            <div className="overlay">
                                <div className="title">The Mandalorian</div>
                                <div className="rating">8.5/10</div>
                                <div className="plot">
                                    After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.
                                </div>
                            </div>
                        </a>
                        <div data-toggled="false" className="listToggle">
                            <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="titleList">
            <div className="title">
                <h1>Apple Plus</h1>
                <div className="titles-wrapper">
                    <div className="movie">
                        <a href="/details/89901"><img src="https://image.tmdb.org/t/p/w500/3tvm4WdGKw3Db0sMh9Pt4dckePn.jpg" alt="Movie poster" />
                            <div className="overlay">
                                <div className="title">Dickinson</div>
                                <div className="rating">8.7/10</div>
                                <div className="plot">
                                    Emily Dickinson. Poet. Daughter. Total rebel. In this coming-of-age story, Emily’s determined to become the world’s greatest poet.
                                </div>
                            </div>
                        </a>
                        <div data-toggled="false" className="listToggle">
                            <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                        </div>
                    </div>
                    <div className="movie">
                        <a href="/details/87917"><img src="https://image.tmdb.org/t/p/w500/w5r3AG9Etva4IcyMhVn6TYl577l.jpg" alt="Movie poster" />
                            <div className="overlay">
                                <div className="title">For All Mankind</div>
                                <div className="rating">7.5/10</div>
                                <div className="plot">
                                    Explore an aspirational world where NASA and the space program remained a priority and a focal point of our hopes and dreams as told through the lives of NASA astronauts, engineers, and their families.
                                </div>
                            </div>
                        </a>
                        <div data-toggled="false" className="listToggle">
                            <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                        </div>
                    </div>
                    <div className="movie">
                        <a href="/details/88055"><img src="https://image.tmdb.org/t/p/w500/8yfkkAeoI77opqAvB9fyf4knftS.jpg" alt="Movie poster" />
                            <div className="overlay">
                                <div className="title">Servant</div>
                                <div className="rating">7.7/10</div>
                                <div className="plot">
                                    A Philadelphia couple are in mourning after an unspeakable tragedy creates a rift in their marriage and opens the door for a mysterious force to enter their home.
                                </div>
                            </div>
                        </a>
                        <div data-toggled="false" className="listToggle">
                            <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                        </div>
                    </div>
                    <div className="movie">
                        <a href="/details/80752"><img src="https://image.tmdb.org/t/p/w500/g3JsScc7mQCfc3e5e5rXwu7xVVP.jpg" alt="Movie poster" />
                            <div className="overlay">
                                <div className="title">See</div>
                                <div className="rating">8/10</div>
                                <div className="plot">
                                    A virus has decimated humankind. Those who survived emerged blind. Centuries later when twins are born with the mythic ability to see, their father must protect his tribe against a threatened queen.
                                </div>
                            </div>
                        </a>
                        <div data-toggled="false" className="listToggle">
                            <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                        </div>
                    </div>
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
                </div>
            </div>
        </div>
    </>
    );
}

export default MovieList;