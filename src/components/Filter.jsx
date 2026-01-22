import React from "react";

const Filter = ({ searchTitle, setSearchTitle, searchRating, setSearchRating }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="text"
        placeholder="Search by title"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="number"
        placeholder="Min rating"
        value={searchRating}
        onChange={(e) => setSearchRating(e.target.value)}
      />
    </div>
  );
};

export default Filter;
