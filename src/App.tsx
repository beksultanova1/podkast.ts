import React from 'react';
import './App.css';
import Header from "./components/Header";
import Podcast from "./components/Podcast";
import Latest from "./components/Latest";
import Jacob from "./components/Jacob";
import Starding from "./components/Starding";
import Footer from "./components/Footer";


function Star() {
    return null;
}

function App() {
  return (
    <div className="App">
        <Header/>
        <Podcast/>
        <Latest/>
        <Jacob/>
        <Starding/>
        <Footer/>
    </div>
  );
}

export default App;
