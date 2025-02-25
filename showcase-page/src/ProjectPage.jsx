import React from "react";
import { Link } from "react-router-dom";
import Smartphone from "./assets/blank_smartphone_template_small.png"
import Button from "./Button";
import ContactSection from "./ContactSection";
import { DemoLink, RepositoryLink } from "./ExternalLinkButtons";
import Header from "./Header";
import { TagList } from "./Tags";

function ProjectPage({ title, description, image, demoLink, repoLink, tags }) {
  return (
    <>
      <Header></Header>
      <div className="top-2 right-[10px] fixed ml-auto z-10">
        <ContactSection vertical={false}></ContactSection>
      </div>
      <div className="container mx-auto px-16 py-8 mt-14">
        <div className="flex flex-col md:flex-row items-center md:items-start">
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

          {/* Titel und Beschreibung */}
          <div className="w-full md:w-1/2 lg:w-3/4">
            <div className="my-6 flex flex-wrap justify-between">
              <h1 className="text-3xl font-bold text-dark">{title}</h1>
              <div className="space-x-3">
                <DemoLink link={demoLink} />
                <RepositoryLink link={repoLink} />
              </div>
            </div>
            <p className="text-lg text-dark">{description}</p>
            <div className="mt-8 flex justify-end">
              <TagList tags={tags} />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Link to="/">
            <Button backgroundColor="bg-white" fontColor="text-primary">zurück</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProjectPage