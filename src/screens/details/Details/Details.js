import React, { useEffect, useState, Component } from "react";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import './../../home/home.css';

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
//import { ReactComponent as Logo } from './logo.svg';
import * as logo from '../../../../src/assets/logo.svg'

import InsideDetail from "./InsideDetail";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);




const Details = (props) => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  function handleLogout() {
    setIsLoggedIn(false);
  }
  const handleBookShowClick = () => {
    // if (currentUser) {
      // history.push('/bookshow');
    // } else {
      setLoginModalOpen(true);
    // }
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { currentUser } = useAuth();
  // const history = useHistory();
  const [loginModalOpen, setLoginModalOpen] = useState(false);
    function handleLogin() {
      setIsLoggedIn(true);
      props.history.push("/login");
    }






   


  useEffect(() => {
    const fetchMovies = async () => {

      try {
        const response = await fetch("http://localhost:8085/api/v1/movies/009ae262-a234-11e8-b475-720006ceb890");
        const data = await response.json();

        console.log("data.movies...............................",data);
        setUpcomingMovies(data);


      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);



  

    return (
        <div>
          <div className="header">
            <img align="left" src={logo} alt="My logo" />
            <button onClick={toggleMenu}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          
        
        <div className="actions">
          {!isLoggedIn ? (
            <div>
              <button variant="contained"
                color="primary" onClick={handleLogout}>Logout</button>
              
            </div>
          ) : (
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={handleBookShowClick}
              >
                Book Show
              </Button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
          </div>
          </div>
          <div>
            <InsideDetail/>
          {/* <div className={classes.leftPart}> */}
      {/* <CardMedia
        component="img"
        image={props.moviePosterUrl}
        alt="Movie Poster"
        className={classes.moviePoster}
      /> */}
    {/* </div> */}
      
          {/* <GridListTile key={GetMovie.id}>
            <img src={GetMovie.poster_url} alt={GetMovie.title} />
            <GridListTileBar title={GetMovie.title} />
          </GridListTile> */}
        
    </div>
    
        </div>
      )
      }

export default Details;


