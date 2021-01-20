import React, {useEffect, useState} from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import { MovieForm } from './components/MovieForm';
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
      <Container style={{ marginTop: 40 }}>
        <MovieForm onNewMovie={movie => setMovies(currentMovies => [movie, ...currentMovies])} />  
        <Movies movies={movies} />
      </Container>
    </div>
  );
}

export default App;
