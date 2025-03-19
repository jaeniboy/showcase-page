import React from "react";
import { Link } from "react-router-dom";
import Smartphone from "./assets/blank_smartphone_template_small.png"
import Button from "./Button";
import ContactSection from "./ContactSection";
import { DemoLink, RepositoryLink } from "./ExternalLinkButtons";
import Header from "./Header";
import { TagList } from "./Tags";
import { FaArrowLeft } from "react-icons/fa";

function ProjectPage({ title, description, image, demoLink, repoLink, tags }) {
  return (
    <>
      <Header></Header>
      <div className="top-0 right-[10px] fixed ml-auto z-10">
        <ContactSection vertical={false}></ContactSection>
      </div>
      <div className="container mx-auto px-8 py-8 mt-14">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
          {/* Bild */}
          <div className="flex w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0 md:mr-8 justify-center relative">
            <div className="sm:h-[65vh] md:h-[80vh] aspect-[53/100] relative">
              <img
                src={Smartphone}
                alt={title}
                className="h-full"
              />
              <img
                src={image}
                alt={title}
                className="h-[85%] w-[91.5%] top-[8%] left-[4.3%] absolute"
              />
            </div>
          </div>

          {/* title and description */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <div className="mb-6 flex flex-wrap justify-between">
              <h1 className="text-xl font-bold text-gray-800 tracking-tight mb-6 mr-3">{title}</h1>
              <div className="space-x-3">
                <DemoLink link={demoLink} />
                <RepositoryLink link={repoLink} />
              </div>
            </div>
            <div className="text-base/7 text-gray-500 tracking-wide">{description}</div>
            <div className="my-12 flex flex-col justify-center">
              <TagList tags={tags} />
            </div>
            <div className="mt-1 lg:text-end">
              <Link to="/">
                <Button backgroundColor="bg-white" fontColor="text-primary">
                  <div className="flex items-center">
                    <FaArrowLeft /><span className="ml-2">Back</span>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectPage