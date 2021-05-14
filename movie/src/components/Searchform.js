import React, {useState} from "react";
// useState a react hook

export default function SearchMovies(){
    // state for input query
    const [query, setQuery]= useState('')
    // state for movie update state
    const [movies, setMovies] = useState ([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");
        
        const query = "Jurassic Park";
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=fb24b074b411da128b57c4eae1a84a0c&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data.results);
        }catch(err){
            console.error(err);
        }
    }
    
    return (
        <>
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Star Wars"
                value={query}
                onChange={(e) => setQuery(e.target.value)}/>
            <button className="button" type="submit">Search</button>
                <div className="card-list">
                    {movies.map(movie => (
                        <div className= "card">
                            <img className="card--image"
                            src={{`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + ' poster'}
                            />

                        </div>

                    ))}


                </div>



        </form>

        </>
    )

}
