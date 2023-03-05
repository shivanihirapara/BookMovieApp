import React, { useState } from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@mui/styles';
import { TextField } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  header: {
    textTransform: 'uppercase',
  },
}));

function FindMovie(props) {
  const [movieName, setMovieName] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const handleChange = (event) => {
    setMovieName(event.target.value);
  };
  const handleGenreSelect = (event) => {
    const value = event.target.value;
    if (selectedGenres.includes(value)) {
      setSelectedGenres(selectedGenres.filter((genre) => genre !== value));
    } else {
      setSelectedGenres([...selectedGenres, value]);
    }
  };
  const handleClick = (event) => {
    event.target.placeholder = "";
  };

  const handleBlur = (event) => {
    event.target.placeholder = "Movie Name";
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    props.history.push("/");

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <FormControl>
          <InputLabel htmlFor="name">Movie Name</InputLabel>
          <Input id="name" type="text" />
        </FormControl>
      </div>
      <div>
        <FormControl className={useStyles.formControl}>
          <InputLabel shrink htmlFor="genre-filter">
            Genres
          </InputLabel>
          <Select
            id="genre-filter"
            autoWidth={'100px'}
            multiple
            value={selectedGenres}
            onChange={handleGenreSelect}
            renderValue={(selected) => selected.join(', ')}
          >
          </Select>
        </FormControl>
      </div><br />

      <div>
        <FormControl className={useStyles.formControl}>
          <InputLabel shrink htmlFor="genre-filter">
            Genres
          </InputLabel>
          <Select
            id="genre-filter"
            autoWidth={'100px'}
            multiple
            value={selectedGenres}
            onChange={handleGenreSelect}
            renderValue={(selected) => selected.join(', ')}
          >
          </Select>
        </FormControl>
      </div><br />

      <div>
        <FormControl>
          <TextField
            id="release-date-start"
            label="Release Date Start"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
      </div>
      <div>
        <FormControl>
          <button type="submit">Submit</button>
        </FormControl>
      </div>
    </form>

  );
}

export default FindMovie;
