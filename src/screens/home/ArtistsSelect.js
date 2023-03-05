import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
}));

const ArtistsSelect = ({ artists, handleArtistSelect }) => {
  const classes = useStyles();
  const [selectedArtists, setSelectedArtists] = useState([]);

  const handleSelectChange = (event) => {
    setSelectedArtists(event.target.value);
    handleArtistSelect(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>Artists</InputLabel>
      <Select
        multiple
        value={selectedArtists}
        onChange={handleSelectChange}
        renderValue={(selected) => selected.join(', ')}
      >
        {artists.map((artist) => (
          <MenuItem key={artist.id} value={artist.id}>
            <Checkbox checked={selectedArtists.indexOf(artist.id) > -1} />
            <ListItemText primary={`${artist.first_name} ${artist.last_name}`} />
          </MenuItem>
        ))}
      </Select>
      
    </FormControl>
  );
};

export default ArtistsSelect;

