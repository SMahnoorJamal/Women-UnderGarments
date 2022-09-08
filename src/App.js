import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { Container, Card, Col, Button } from 'react-bootstrap';
// import Box from '@mui/material/Box';


function App() {
  return (
    <div className="App1">

<Header/>
<HomeScreen/>
    </div>

    //   <a
    //     className="App-link"
    //     href="https://reactjs.org"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //   >
    //     Learn React
    //   </a>
    // </div>
  );
}

export default App;
