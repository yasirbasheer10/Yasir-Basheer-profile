import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import KavaCaseStudy from './pages/KavaCaseStudy';
import ProspectIQCaseStudy from './pages/ProspectIQCaseStudy';
import Option1 from './pages/Option1';
import Option2 from './pages/Option2';
import Option3 from './pages/Option3';
import Articles from './pages/Articles';
import CROHierarchy from './pages/articles/CROHierarchy';
import LLMAgile from './pages/articles/LLMAgile';
import LeadIntelligence from './pages/articles/LeadIntelligence';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/cro-hierarchy" element={<CROHierarchy />} />
          <Route path="/articles/llm-agile" element={<LLMAgile />} />
          <Route path="/articles/lead-intelligence" element={<LeadIntelligence />} />
          <Route path="/case-study/kava" element={<KavaCaseStudy />} />
          <Route path="/case-study/prospectiq" element={<ProspectIQCaseStudy />} />
          <Route path="/option1" element={<Option1 />} />
          <Route path="/option2" element={<Option2 />} />
          <Route path="/option3" element={<Option3 />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;