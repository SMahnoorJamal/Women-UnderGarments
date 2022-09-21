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
    // <>
    <div style={{
      backgroundColor: 'orange',
      marginLeft: '5vw'
    }}>
      {/* <Bars /> */}

      <div style={{
        display: 'flex',
        marginLeft: '-5vw',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'fixed', width: '100vw', height: '10vh', backgroundColor: 'white',
        boxShadow: 
        '-12px 0 15px -4px rgba(31, 73, 125, 0.8)'
      }}>
        <div>
          <a href="#" style={{ fontSize: '2vw' }}>Curvy</a>
          <a style={{ paddingLeft: 6, fontSize: '2vw' }}>Wear</a>
        </div>


        <NavMenu>

          <div style={{
            marginLeft: '20vw',
            fontSize: '1.6vw',
            position: 'fixed', width: '40vw', height: '10vh'
            , 
            marginTop: '2vw',
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
            </NavLink>
          </div>


          <div style={{
            marginLeft: '74vw',
          }}>
            <  FaShoppingBasket size={27} style={{ marginLeft: '2vw' }} />
            <  FaSistrix size={27} style={{ marginLeft: '2vw' }} />
            <  FaUserAlt size={27} style={{ marginLeft: '2vw' }} />
          </div>

        </NavMenu>

      </div>

      <div style={{
        display: 'flex',

      }} >

      </div>
    </div>
    // </>
  );
};

export default Navbar;