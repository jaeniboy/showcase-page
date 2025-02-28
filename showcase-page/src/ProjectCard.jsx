import React from 'react';
import { Link } from 'react-router-dom';
import { DemoLink, RepositoryLink } from './ExternalLinkButtons';

function ProjectCard({ title, description, link, demoLink, repoLink, image }) {
  return (
    <div className="bg-white shadow-md hover:shadow-xl">
      <div className="w-full h-2 bg-secondary"></div>
      <div className="p-6 pt-4">
        <Link to={link}>
          <h3 className="text-xl font-semibold mb-4 text-dark">{title}</h3>
          <div className="flex justify-center ">
            <img
              src={image}
              alt="project-image"
            // style={{
            //   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            // }}
            ></img>
          </div>
          <p className="my-4 text-paragraph">{description}</p>
        </Link>
      </div>
      {/* <div className="space-x-3">
        <DemoLink link={demoLink} />
        <RepositoryLink link={repoLink} />
      </div> */}
    </div>
  );
}

export default ProjectCard;
