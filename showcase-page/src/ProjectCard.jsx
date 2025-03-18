import React from 'react';
import { Link } from 'react-router-dom';
import { DemoLink, RepositoryLink } from './ExternalLinkButtons';
import { FaArrowRight } from "react-icons/fa";

function ProjectCard({ title, description, link, demoLink, repoLink, image }) {
  return (
    <div className="bg-white shadow-md hover:shadow-2xl rounded-lg">
      <div className="rounded-lg">
        <Link to={link}>
          {/* <div className="w-full h-[2px] bg-teal-800"></div> */}
          <div className={`flex justify-center aspect-20/13 rounded-t-lg`} style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}>
          </div>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className="p-4 flex-col text-start bg-white rounded-b-lg">
            <h3 className="text-lg mt-4 tracking-tight font-semibold text-gray-700">{title}</h3>
            <p className="mb-8 mt-2 text-base/6 tracking-wide text-gray-500">{description}</p>
            <div className="flex">
              <div className="flex w-full justify-center items-center bg-teal-300 text-teal-900 py-2 px-6 mb-1 rounded">
                <div className="">
                  read more
                </div>
                <div className="ml-2">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
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
