import React, { useEffect, useState, Component } from "react";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";


import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
//import { ReactComponent as Logo } from './logo.svg';
import * as logo from './../../assets/logo.svg';


import { Responsive, WidthProvider } from "react-grid-layout";
// import { useHistory } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import MovieList from "./MovieList";
import ShowReleasedMovie from './ShowReleasedMovie';
// import GetMovie from './../details/Details/GetMovie';
import GetMovie from './GetMovie';
import FindMovie from './FindMovie';
const ResponsiveGridLayout = WidthProvider(Responsive);

// import { useNavigate } from 'react-router-dom';
// const navigateTo = useNavigate();
// navigateTo('/your-page')




const Details = (props) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  function handleLogin() {
    setIsLoggedIn(true);
    props.history.push("/login");
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  const handleBookShowClick = () => {
    setLoginModalOpen(true);
  };
  function handleClick() {
    const handleClick = () => {
      // e.preventDefault();
      console.log('The link was clicked.');
    }
  }

  return (
    <div>
      <div className="header">
        <img align="left" src={logo} alt="My logo" />
        <button onClick={toggleMenu}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
        {isMenuOpen && (
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        )}

        <div className="actions">
          {!isLoggedIn ? (
            <div>
              <button variant="contained"
                color="primary" onClick={handleLogin}>Login</button>
              <button variant="contained"
                color="primary">Register</button>
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
        <h1 class="upcoming-movies-heading">Upcoming Movies</h1>
      </div>
      <div>
        <GetMovie />
      </div>
      <div>
        <ShowReleasedMovie />
      </div>

      <div style={{ width: "100%" }}>
        <div className="imgClass" style={{ width: "76%" }}></div>
        <div className="filterClass" style={{ width: "24%" }}>
          FIND MOVIES BY :
          <FindMovie></FindMovie>
        </div>
      </div>

    </div>
  )
}

export default Details;

