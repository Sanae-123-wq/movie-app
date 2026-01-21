import React, { useState } from "react";

const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && posterURL && rating) {
      addMovie({ title, description, posterURL, rating: Number(rating) });
      setTitle(""); setDescription(""); setPosterURL(""); setRating("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input placeholder="Poster URL" value={posterURL} onChange={(e) => setPosterURL(e.target.value)} />
      <input type="number" placeholder="Rating" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
