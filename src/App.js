import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Categories from './components/Categories';




import { BrowserRouter, Route, Link, Navlink, Routes } from 'react-router-dom'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header />
       <Routes>
       <Route path="/" element={<Home />}>
       </Route>  
       <Route path="/about" element={<About />}>
        </Route>
       <Route path="/blog" element={<Blog />}>
        </Route>
        <Route path="/categories" element={<Categories />}>
        </Route>  
       </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
