import React,{useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { AppContext } from "../context/AppContext";
import logout from '../assets/log-out.png'

import GameLogo from '../assets/game-folder.png'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate=useNavigate()
  const userState = useContext(AppContext);

  return (
    <Navbar bg="light" variant="light" className='sticky-top'>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={GameLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Game Catalog
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='me-3'>
            Signed in as: <span >{userState.username}</span>
          </Navbar.Text>
          <img
              src={logout}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              onClick={()=>{
                // userState.logout()
                navigate('/login')
              }} 
            />
        </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar