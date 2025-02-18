import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProjectPage from './ProjectPage';
import { projects } from './data/projects';

function Home() {
  return <LandingPage />
}

function NotFound() {
  return <h1>404 - Seite nicht gefunden</h1>;
}

// function ProjectPage({ title }) {
//   return <h1>{title}</h1>
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        {projects.map((d, index) => {
          return <Route key={index} path={d.link} element={
            <ProjectPage 
              title={d.title} 
              description={d.description}
              image={d.image}
            />
          } />
        })}
      </Routes>
    </Router>
  );

}

export default App;
