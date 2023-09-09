import { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './assets/search.svg'
import MovieCard from './MovieCard';

const API_URL="http://www.omdbapi.com/?i=tt3896198&apikey=f354a857";

function App() {
  const [movies,setMovies]=useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies= async(title: any)=>{
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
  setMovies(data.Search);
  }
  useEffect(()=>{
    searchMovies('Naruto')
  },[])

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
        searchMovies(searchTerm);
    }
};

  return <div className='app'>
    <h1>MoviesFlix</h1>

    <div className='search'>
      <input placeholder='Search For Movies !'
       alt="movieSearch"
       value={searchTerm}
       onChange={(e: any) => {
           setSearchTerm(e.target.value);
       }}
       onKeyDown={handleKeyPress}
       />
      <img
          src={SearchIcon}
          alt="SearchIcon"
          onClick={() => {
            searchMovies(searchTerm);
        }}
      />
    </div>
    {movies?.length > 0 ?
                <div className="container">
                    {movies.map((movie) => (
                        <div>
                            <MovieCard movie={movie}/>
                        </div>
                    ))}

                </div> : <div className="empty">
                    <h3 style={{color: 'white'}}>No Movies !! 🥺 </h3>
                </div>
            }


  </div>
    
}

export default App
