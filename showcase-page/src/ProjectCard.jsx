import React from 'react';
import { Link } from 'react-router-dom';
import { DemoLink, RepositoryLink } from './ExternalLinkButtons';

function ProjectCard({ title, description, link, demoLink, repoLink, image }) {
  return (
    <div className="bg-white shadow-md hover:shadow-xl">
      <div className="w-full h-1 bg-teal-500"></div>
      <div className="">
        <Link to={link}>
          <div className="flex justify-center inset-shadow inset-shadow-black">
            <img
              src={image}
              alt="project-image"
            // style={{
            //   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            // }}
            ></img>
          </div>
              <div className="w-full h-1 bg-teal-500"></div>
              <h3 className="text-xl font-semibold mt-5 text-dark">{title}</h3>
          <p className="mb-2 mt-1 text-paragraph">{description}</p>
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
