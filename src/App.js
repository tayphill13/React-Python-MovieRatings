import React, {useEffect, useState} from 'react';
import './App.css';
import { Movies } from "./components/Movies";

function App() {  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/movies').then(response => 
      response.json().then(data => {
        setMovies(data.movies);
      })
    );
  }, []);

  return (
    <div className="App">
      <Movies movies={movies} />
    </div>
  );
}

export default App;
