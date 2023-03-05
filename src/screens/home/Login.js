import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

function Login(props) {
  const [movies, setMovies] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [fname2, setFirstname2] = useState('');
  const [lname2, setLastname2] = useState('');
  const [email2, setEmail2] = useState('');
  const [password2, setPassword2] = useState('');
  const [contact2, setContact2] = useState('');

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '400px',
      width: '100%',
      maxHeight: '80vh',
      overflowY: 'auto',
    },
  };
  // const history = useHistory();

  const handleClick = (movieId) => {
    // history.push(`/movies/${movieId}`);
  };
  const handleTabChange = (event, newValue) => {
    // console.log("newValue",newValue);
    setActiveTab(newValue);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const login = async () => {
      const body = { username: username, password: password };
      try {
        const response = await fetch("http://localhost:8085/api/v1/auth/login", {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            Authorization: '',
            'method': 'POST',
            "Accept": "application/json",
            "Content-Type": "application/json;charset=UTF-8"
          }
        });
        const data = await response.json();
        debugger;
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };
    login();

    // Validation and submission logic goes here
  };
  const handleSubmit1 = (event) => {

    event.preventDefault();

    const register = async () => {
      const body = { fname2: fname2, lname2: lname2, email2: email2, password2: password2, contact2: contact2 };

      try {
        const response = await fetch("http://localhost:8085/api/v1/signup", {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            Authorization: '',
            'method': 'POST',
            "Accept": "application/json",
            "Content-Type": "application/json;charset=UTF-8"
          }
        });
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };
    register();

    setActiveTab(0);
    // Validation and submission logic goes here
  };

  useEffect(() => {
    // const fetchMovies = async () => {
    //   const response = await fetch('http://localhost:8085/api/v1/admin/movies');
    //   const data = await response.json();
    //   setMovies(data);
    // };
    // fetchMovies();
  }, []);

  return (
    <div>
      <Modal isOpen={true} onRequestClose={() => { }} style={customStyles}>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>
        {activeTab == 0 ?
          <form onSubmit={handleSubmit}>
            <div>
              <FormControl>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input id="username" type="username" required value={username} onChange={(e) => {
                  setUsername(e.target.value);
                }} />
                {/* <FormHelperText error={true}>Error message</FormHelperText> */}
              </FormControl>
            </div>
            <div>
              <FormControl>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password" type="password" required value={password} onChange={(e) => {
                  setPassword(e.target.value)
                }} />
                {/* <FormHelperText error={true}>Error message</FormHelperText> */}
              </FormControl>
            </div><br />
            <div>
              <FormControl>
                <button type="submit">Submit</button>
              </FormControl>
            </div>
          </form>
          : ''}
        {activeTab == 1 ?
          <form onSubmit={handleSubmit1}>
            <div>
              <FormControl>
                <InputLabel htmlFor="fname">First Name</InputLabel>
                <Input id="fname" type="fname" required value={fname2} onChange={(e) => {
                  setFirstname2(e.target.value);
                }} />
                {/* <FormHelperText error={true}>Error message</FormHelperText> */}
              </FormControl>
            </div>
            <div>
              <FormControl>
                <InputLabel htmlFor="lname">Last Name</InputLabel>
                <Input id="lname" type="lname" required value={lname2} onChange={(e) => {
                  setLastname2(e.target.value);
                }} />
                {/* <FormHelperText error={true}>Error message</FormHelperText> */}
              </FormControl>
            </div>
            <div>
              <FormControl>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input id="email" type="email" required value={email2} onChange={(e) => {
                  setEmail2(e.target.value);
                }} />
                {/* <FormHelperText error={true}>Error message</FormHelperText> */}
              </FormControl>
            </div>
            <div>
              <FormControl>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password" type="password" required value={password2} onChange={(e) => {
                  setPassword2(e.target.value);
                }} />
                {/* <FormHelperText error={true}>Error message</FormHelperText> */}
              </FormControl>
            </div>
            <div>
              <FormControl>
                <InputLabel htmlFor="contact">Contact</InputLabel>
                <Input id="contact" type="contact" required value={contact2} onChange={(e) => {
                  setContact2(e.target.value);
                }} />
                {/* <FormHelperText error={true}>Error message</FormHelperText> */}
              </FormControl>
            </div><br />
            <div>
              <FormControl>
                <button type="submit">Register</button>
              </FormControl>
            </div>
          </form>

          : ''}
      </Modal>
    </div>
  );
}

export default Login;
