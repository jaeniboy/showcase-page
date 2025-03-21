import React from 'react';
import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProjectPage from './ProjectPage';
import { projects } from './data/projects';

function Home() {
  return <LandingPage />
}

function NotFound() {
  return <h1>404 - Page not found</h1>;
}

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
              demoLink={d.demoLink}
              repoLink={d.repoLink}
              tags={d.tags}
            />
          } />
        })}
      </Routes>
    </Router>
  );

}

export default App;
