// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Card from '../src/components/Card/Card'
import Header from './components/Header/Header';
// import { Container, Card, Col, Button } from 'react-bootstrap';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages';
 import About from './screens/About';
import Navbar from './components/Navbar';
import Home from './screens/Home/Home';
// import Events from './pages/events';
// import AnnualReport from './pages/annual';
// import Teams from './pages/team';
// import Blogs from './pages/blogs';
// import SignUp from './pages/signup';
// import Box from '@mui/material/Box';


// function App() {
//   return (
//     <div className="App1">

// <Header/>
// <HomeScreen/>
//     </div>


// /* <Router>
// <Navbar />
// <Routes>
//   <Route path='/' exact component={Home} />
//   <Route path='/about' component={About} />
//   <Route path='/events' component={Events} />
//   <Route path='/annual' component={AnnualReport} />
//   <Route path='/team' component={Teams} />
//   <Route path='/sign-up' component={SignUp} />
// </Routes>
// </Router> */
//     //   <a
//     //     className="App-link"
//     //     href="https://reactjs.org"
//     //     target="_blank"
//     //     rel="noopener noreferrer"
//     //   >
//     //     Learn React
//     //   </a>
//     // </div>
//   );
// }

// export default App;


function App() {

  let routes = useRoutes([ 

   
    { path: '/', element: <Home /> }, 
    { path: '/About', element: <About /> },  
                           //console shows how to implement routes
    
   
    // { path: '/annual', element: <AnnualReport /> },
    // { path: "/Blogs", element: <Blogs /> },
    // ...
  ]);
  return routes;
}

const AppWrapper = () => {
  return (
  <  Card/>
    // <Router>
    //   {/* < Header /> */}
    //   <Navbar/>
    //   <App />
    // </Router>
  );
};

export default AppWrapper;