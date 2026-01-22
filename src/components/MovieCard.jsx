import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        width: "200px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        textAlign: "center",
        overflow: "hidden",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
      }}
    >
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "black" }}>
        <img src={movie.posterURL} alt={movie.title} style={{ width: "100%" }} />
        <h3>{movie.title}</h3>
        <p>Rating: {movie.rating} ⭐</p>
      </Link>
    </div>
  );
};

export default MovieCard;
