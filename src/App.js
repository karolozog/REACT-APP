import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadLineCards from "./components/HeadLineCards";
import Food from "./components/Food";
import Categroy from "./components/Category";
import Reverse from "./components/Reverse";
import {Switch as Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Routes>itch>
      <Navbar />
   { /* <ChatComponent show={statechat} />
      <button onClick={chatState}>Have a qustion??</button> */}
      <Reverse />
      <Hero />
      <HeadLineCards />
      <Food />
      <Categroy />
    </div>
  );
  
}

export default App;
