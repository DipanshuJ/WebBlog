import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Posts from './components/Posts';
import Singlepost from './components/Singlepost';
import Books from './components/Books';
import Feedback from './components/Feedback';

import React from "react";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/singlepost" element={<Singlepost />} />
        <Route path="/books" element={<Books />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes> 
      <Footer/>
    </div>
  );
}

export default App;
