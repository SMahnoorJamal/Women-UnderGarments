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
        <NavLink  to='/' activeStyle>
           Home
          </NavLink>
     {/* <a href="/About"> about </a> */}
         
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/annual' activeStyle>
            Annual Report
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink> 
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
         </NavMenu> 
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}

<div style={{
        width: '10%', display: 'flex',

      }} >
        <  FaShoppingBasket size={25} style={{ marginLeft: '1vw' }} />
        <  FaSistrix size={25} style={{ marginLeft: '2vw' }} />
        <  FaUserAlt size={25} style={{ marginLeft: '2vw' }} />
      </div>
      </Nav>
    </>
  );
};
  
export default Navbar;