import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
position: fixed;
   background-color: #63D471;
  background: white;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  // z-index: 12;
  overflow: hidden;
  width: 100%;
  // top: 0;
 border-bottom: solid 1px var(--primary-color);
  align-items: center;
  // opacity: 0.9;
   box-shadow: 0 0px 0px 0px white, 0 -9px 0px 0px white,
  12px 0 15px -4px rgba(31, 73, 125, 0.8),
  -12px 0 15px -4px rgba(31, 73, 125, 0.8);
  /* Third Nav */
  /* justify-content: flex-start; */
`;
  
export const NavLink = styled(Link)`

   //color: #808080;
 // display: flex;
 margin-left: 2vw;
   //font-size: 8;
  //  background-color: 'yellow';
  //  justify-content: 'center';
  //  align-items: center;
  // text-decoration: none;
  // padding: 0 1rem;
  // height: 20%;
  // cursor: pointer;
  // &.active {
  //   color: #000000;
  }
`;
 

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;   
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  margin-left: '30vw';
 align-items: center;
 flex-direction: 'row';
 position: 'fixed';
  //  margin-right: 34px;
  // background-color: 'orange';
  // /* Second Nav */
  // /* margin-right: 24px; */
  // /* Third Nav */
  // /* width: 100vw;
  // white-space: nowrap; */
  // @media screen and (max-width: 768px) {
  //   display: none;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;