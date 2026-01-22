import React, { useState } from "react";

const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(1);
  const [trailer, setTrailer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ title, description, posterURL, rating: Number(rating), trailer });
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(1);
    setTrailer("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        min="1"
        max="5"
        onChange={(e) => setRating(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Trailer URL (embed)"
        value={trailer}
        onChange={(e) => setTrailer(e.target.value)}
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
