import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL: "https://m.media-amazon.com/images/I/51nbVEuw1HL._AC_.jpg",
      rating: 5
    },
    {
      title: "Interstellar",
      description: "Space exploration to save humanity",
      posterURL: "https://m.media-amazon.com/images/I/71nL4H6RzBL._AC_SL1024_.jpg",
      rating: 5
    }
  ]);

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");

  const addMovie = (movie) => setMovies([...movies, movie]);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      (searchRating ? movie.rating >= searchRating : true)
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Movie App</h1>
      <AddMovie addMovie={addMovie} />
      <Filter
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        searchRating={searchRating}
        setSearchRating={setSearchRating}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
