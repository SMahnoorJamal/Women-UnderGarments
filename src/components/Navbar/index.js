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

          <text style={{ marginLeft: '3vw' }}>Curvey wear</text>

          {/* <text style={{ marginLeft: '11vw', fontSize: '1.6vw', marginRight: '1VW' }}
          >
            Homegt
          </text> */}


          <div style={{
            marginLeft: '18vw',
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
            </NavLink> </div>

          {/* <a href="/About"> about </a> */}



          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}

        <div style={{
          width: '10%', display: 'flex', marginRight: '3vw'

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