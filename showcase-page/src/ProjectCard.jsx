import React from 'react';
import { Link } from 'react-router-dom';
import { DemoLink, RepositoryLink } from './LinkButtons';

function ProjectCard({ title, description, link, demoLink, repoLink, image }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Link to={link}>
        <div className="flex justify-center">
          <img src={image} alt="project-image" className="w-full"></img>
        </div>
        <h3 className="text-xl font-semibold mt-2">{title}</h3>
        <p className="my-4">{description}</p>
      </Link>
      <div className="space-x-3">
        <DemoLink link={demoLink} />
        <RepositoryLink link={repoLink} />
      </div>
    </div>
  );
}

export default ProjectCard;
