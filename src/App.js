import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDescription from "./components/MovieDescription";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL: "https://m.media-amazon.com/images/I/51nbVEuw1HL._AC_.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      id: 2,
      title: "Interstellar",
      description: "Space exploration to save humanity",
      posterURL: "https://m.media-amazon.com/images/I/71nL4H6RzBL._AC_SL1024_.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    }
  ]);

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");

  const addMovie = (movie) => 
    setMovies([...movies, { ...movie, id: movies.length + 1 }]);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      (searchRating ? movie.rating >= searchRating : true)
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
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
        }
      />
      <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
    </Routes>
  );
}

export default App;
