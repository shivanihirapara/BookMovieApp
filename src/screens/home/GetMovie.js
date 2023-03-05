import React, { useState, useEffect } from "react";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";

function GetMovie() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);


  useEffect(() => {
    const fetchMovies = async () => {

      try {
        const response = await fetch("http://localhost:8085/api/v1/movies");
        const data = await response.json();

        // setUpcomingMovies(data.movies);
        const upcomingMovies = [];
        for (const key in data.movies) {
          if (data.movies[key]['status'] === "PUBLISHED") {
            upcomingMovies.push(data.movies[key]);
          }
        }
        console.log('data.movie..............', upcomingMovies)
        setUpcomingMovies(upcomingMovies);

      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <GridList cellHeight={250} cols={6}>
        {upcomingMovies && upcomingMovies.length > 0 ? upcomingMovies.map((movie) => (
          <GridListTile key={movie.id}>
            <img src={movie.poster_url} alt={movie.title} />
            <GridListTileBar title={movie.title} />
          </GridListTile>
        )) : ''}
      </GridList>
    </div>
  );
}
export default GetMovie;