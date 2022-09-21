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
        
  //       position: 'absolute',
   backgroundColor: 'orange',
  // // height: '60px',
  // // display: 'flex',
  // justifyContent: 'space-between',
  // // padding: 0.2rem calc((100vw - 1000px) / 2),
  // // z-index: 12;
  // overflow: 'hidden',
  // width: '100%',
  // top: 0;
//  borderBottom: solid 1px var(--primary-color),
//   align-items: center,
//   // opacity: 0.9;
//    box-shadow: 0 0px 0px 0px white, 0 -9px 0px 0px white,
//   12px 0 15px -4px rgba(31, 73, 125, 0.8),
//   -12px 0 15px -4px rgba(31, 73, 125, 0.8),
  /* Third Nav */
   marginLeft: '5vw'
  // paddingLeft: 6 , fontSize: '2vw'
  /* justify-content: flex-start; */}}>
        {/* <Bars /> */}
       

 
<div style={{ display: 'flex',
 marginLeft: '-5vw',
 alignItems: 'center',
 flexDirection: 'row',
  position: 'fixed',width: '100vw', height: '10vh',backgroundColor: 'yellow'}}>
  <div>
  <a href="#" style={{fontSize: '2vw'}}>Curvy</a>
        <a style={{ paddingLeft: 6 , fontSize: '2vw'}}>Wear</a>
  </div>
           

        <NavMenu>

        <div style={{
            marginLeft: '20vw',
            fontSize: '1.6vw',
            position: 'fixed', width: '40vw', height: '10vh'
,backgroundColor: 'gray',
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
          backgroundColor: 'pink',
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