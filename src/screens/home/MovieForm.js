import React, { useState } from "react";

function MovieForm() {
  const [movieName, setMovieName] = useState("");

  const handleChange = (event) => {
    setMovieName(event.target.value);
  };

  const handleClick = (event) => {
    event.target.placeholder = "";
  };

  const handleBlur = (event) => {
    event.target.placeholder = "Movie Name";
  };

  return (
    <form>
      <label>
        <input
          type="text"
          value={movieName}
          onChange={handleChange}
          onClick={handleClick}
          onBlur={handleBlur}
          placeholder="Movie Name"
        />
      </label>
    </form>
  );
}

export default MovieForm;
