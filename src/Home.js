import React from 'react';
import Header from './Header';
import CarusaualEffect3d from "./CarusaualEffect3d";
import Projects from './Projects';
import Contact from './Contact';
import About from './About';




const Home = () => {
  return (
    <div>
     <Header/>
     <CarusaualEffect3d/>

  <Projects/>
   
<About/>
    <Contact/>
    </div>
  )
}

export default Home