import React from 'react';
import { Link } from 'react-router-dom';
import { DemoLink, RepositoryLink } from './ExternalLinkButtons';

function ProjectCard({ title, description, link, demoLink, repoLink, image }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:border-blue-500 border-white border-1 box-border">
      <Link to={link}>
          <div className="flex justify-center">
            <img
              src={image}
              alt="project-image"
              style={{
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
              }}
            ></img>
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
