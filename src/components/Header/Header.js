

import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
// import Box from '@mui/material/Box';
import { ColoredLine } from '../Line/Line';
import './Header.css';
import CustomDropdown from '../dropdown/CustomDropdown';
import { FaShoppingBasket } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

export default function Header() {


  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-width: 1224px)'
  // })
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  // const [showBasic, setShowBasic] = useState(false);

  return (


    <nav class="navbar navbar-inverse navbar-fixed-top" variant="light">

      <div class="navbar-header" style={{ paddingRight: '20vw', width: '3vw' }}>
        <a class="navbar-brand" href="#">Curvy</a>

        <a style={{ paddingLeft: 6 }}>Wear</a>
      </div>

      <ul class="nav navbar-nav" style={{
        paddingRight: '20vw', display: 'flex',
        flexDirection: 'row', alignItems: 'center', width: '43vw',
      }}>
        <li class="Items" ><a href="#">Home</a></li>
        <li class="Items"><a href="#">Page{' '}1</a></li>
        <li class="Items"><a href="#">Page 2</a></li>
        <li class="Items"><a href="#">Page 3</a></li>
        <li class="Items"><a href="#">Page 4</a></li>
        <li class="Items"><a href="#">Page 5</a></li>

      </ul>

      <div style={{
        width: '10%', display: 'flex',

      }} >
        <  FaShoppingBasket size={25} style={{ marginLeft: '1vw' }} />
        <  FaSistrix size={25} style={{ marginLeft: '2vw' }} />
        <  FaUserAlt size={25} style={{ marginLeft: '2vw' }} />
      </div>
    </nav>

  )

}

