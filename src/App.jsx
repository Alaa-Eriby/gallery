import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './component/Gallery/Gallery';
import ImagePage from './component/ImagePage/ImagePage';
import ImagesData from './component/Imagedata/Imagedata';
import Navbar from './component/Navbar/Navbar'; // Import Navbar
import './App.css'; // Import the CSS file

function App() {
  return (
    <Router>
      <Navbar /> {/* Add Navbar component here */}
      <Routes>
        <Route path="/" element={<Gallery images={ImagesData} />} />
        <Route path="/image/:id" element={<ImagePage images={ImagesData} />} />
      </Routes>
    </Router>
  );
}

export default App;
