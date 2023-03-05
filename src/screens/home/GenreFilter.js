import React, { useState } from 'react';
import { Select, MenuItem, Checkbox, FormControl, InputLabel } from '@material-ui/core';

const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Romance'];

const GenreFilter = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenreSelect = (event) => {
    const { value } = event.target;
    setSelectedGenres(value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="genre-label">Genres</InputLabel>
      <Select
        labelId="genre-label"
        id="genre-filter"
        multiple
        value={selectedGenres}
        onChange={handleGenreSelect}
        renderValue={(selected) => selected.join(', ')}
      >
        {genres.map((genre) => (
          <MenuItem key={genre} value={genre}>
            <Checkbox checked={selectedGenres.indexOf(genre) > -1} />
            {genre}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default GenreFilter;

