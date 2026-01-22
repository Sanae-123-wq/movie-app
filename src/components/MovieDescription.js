import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <p>Movie not found</p>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="trailer"
        allowFullScreen
        style={{ margin: "20px 0" }}
      ></iframe>
      <br />
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
};

export default MovieDescription;
