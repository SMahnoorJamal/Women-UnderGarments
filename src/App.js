// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Card from '../src/components/Card/Card'
import Header from './components/Header/Header';
import About from './screens/About';
import Navbar from './components/Navbar';
import Home from './screens/Home/Home';
import OffsettingExample from '../src/components/Grid/Grid';

//     //   <a
//     //     className="App-link"
//     //     href="https://reactjs.org"
//     //     target="_blank"
//     //     rel="noopener noreferrer"
//     //   >
//     //     Learn React
//     //   </a>



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
    // <  Card/>
    <Router>
     
        {/* <OffsettingExample/> */}
      {/* < Header /> */}
   
    <Navbar /> 
      <App /> 
    </Router>
  );
};

export default AppWrapper;