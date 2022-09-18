import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

import { FaShoppingBasket } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
      <Nav>
        {/* <Bars /> */}
        <NavMenu>

 
<div style={{ position: 'absolute', marginLeft: '-5vw',width: '5vw', height: '10vh'}}>
        <a href="#" style={{fontSize: '2vw'}}>Curvy</a>

        <a style={{ paddingLeft: 6 , fontSize: '2vw'}}>Wear</a>
      </div>


          <div style={{
            marginLeft: '20vw',
            fontSize: '1.6vw',
            color: 'red',
            justifyContent: 'space-between',
            display: 'flex',
          }}>  <NavLink to='/'>
              Home
            </NavLink>
            <NavLink to='/about' >
              About
            </NavLink>
            <NavLink to='/annual' >
              Annual Report
            </NavLink>
            <NavLink to='/blogs' >
              Blogs
            </NavLink>
            <NavLink to='/blogs' >
              Blogs
            </NavLink>  </div>

          {/* <a href="/About"> about </a> */}



          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}

        <div style={{
          width: '10%', display: 'flex', marginRight: '15.5vw'

        }} >
          <  FaShoppingBasket size={27} style={{ marginLeft: '2vw' }} />
          <  FaSistrix size={27} style={{ marginLeft: '2vw' }} />
          <  FaUserAlt size={27} style={{ marginLeft: '2vw' }} />
        </div>
      </Nav>
    </>
  );
};

export default Navbar;