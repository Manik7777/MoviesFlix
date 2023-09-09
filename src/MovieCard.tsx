interface Movie{
    Year : string;
    Poster:string;
    Type :string;
    Title: string;
}
function MovieCard({movie}:any){
    return (<>
        <div className="movie">
            <div><p>{movie.Year}</p></div>
            <div>
                <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/404'}
                    alt="Movie Poster"
                />
            </div>
            <div>
                <span> {movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>

        </div>
    </>);
}
export default MovieCard;