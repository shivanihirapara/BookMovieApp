import React, { useState, useEffect } from 'react';
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import { useHistory } from 'react-router-dom';


function ShowReleasedMovie(props) {
  const [movies, setMovies] = useState([]);

  const handleClick = (movieId) => {
    // props.history.push(`/movies/${movieId}`);

    const win = window.open('/movie/' + movieId, "_blank");
    win.focus();
  };

  useEffect(() => {

    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:8085/api/v1/movies");
        const data = await response.json();

        const released = [];
        for (const key in data.movies) {
          if (data.movies[key]['status'] === "RELEASED") {
            released.push(data.movies[key]);
          }
        }
        setMovies(released);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <GridList cellHeight={350} cols={4}>
        {movies && movies.length > 0 ? movies.map((movie) => (
          //<GridListTile key={movie.id} onClick={() => handleClick(movie.id)} style={{ cursor: 'pointer' }}>
          <GridListTile key={movie.id} style={{ cursor: 'pointer' }} onClick={() => handleClick(movie.id)}>
            <img src={movie.poster_url} alt={movie.title} />
            <GridListTileBar title={movie.title} subtitle={movie.release_date} />
          </GridListTile>
        )) : ''}
      </GridList>
    </div>
  );
}

export default ShowReleasedMovie;
