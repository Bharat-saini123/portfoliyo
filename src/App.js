import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Home from './Home';
import Footer from './Footer';
import Error from './Error';

const App = () => {
  return (
    <BrowserRouter>
 
    <Routes>

<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/project' element={<Projects/>}/>
<Route path='*' element={<Error/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App