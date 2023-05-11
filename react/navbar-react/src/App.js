import {Routes, Route} from "react-router-dom";
import About from "./component/About";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Services from "./component/Services";
import Team from "./component/Team";
import Form from "./component/Form";
import Webpages from "./component/webpages";
import React from 'react';
//unction App() {
  /*
  return (
    <>
    
    <Navbar />

    <Routes >
      <Route path="/" element={ <Home /> } />
      <Route path="/form" element={ <Form /> } />
      <Route path="/webpages" element={ <Webpages /> } />

      <Route path="/blog" element={ <Blog /> } />
      <Route path="/team" element={ <Team /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/services" element={ <Services /> } />
      <Route path="/contact" element={ <Contact /> } />
    </Routes>
    </>
    
  );
  */
//}


function App() {
  return (
    <div>
      <Webpages />
    </div>
  );
}

export default App;

