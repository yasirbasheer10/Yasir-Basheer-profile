import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import KavaCaseStudy from './pages/KavaCaseStudy';
import ProspectIQCaseStudy from './pages/ProspectIQCaseStudy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/kava" element={<KavaCaseStudy />} />
        <Route path="/case-study/prospectiq" element={<ProspectIQCaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;