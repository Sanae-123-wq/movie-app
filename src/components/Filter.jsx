import React from "react";

const Filter = ({ searchTitle, setSearchTitle, searchRating, setSearchRating }) => {
  return (
    <div style={{ margin: "20px 0" }}>
      <input
        type="text"
        placeholder="Search by title"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="number"
        placeholder="Search by rating"
        min="1"
        max="5"
        value={searchRating}
        onChange={(e) => setSearchRating(e.target.value)}
      />
    </div>
  );
};

export default Filter;
