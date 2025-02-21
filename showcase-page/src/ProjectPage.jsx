import React from "react";
import { Link } from "react-router-dom";
import Smartphone from "./assets/blank_smartphone_template_small.png"
import Button from "./Button";
import ContactSection from "./ContactSection";

function ProjectPage({ title, description, image }) {
  return (
    <>
      <div className="top-0 r-0 fixed ml-auto">
        <ContactSection vertical={true}></ContactSection>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Bild */}
          <div className="flex w-full md:w-1/2 mb-6 md:mb-0 md:mr-8 justify-center relative">
            <div className="h-[80vh] aspect-[53/100] relative">
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
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-gray-700">{description}</p>
          </div>
        </div>
        <div className="mt-5">
          <Link to="/">
            <Button backgroundColor="bg-black" fontColor="text-white">zurück</Button>
          </Link>

        </div>
      </div>
    </>
  );
}

export default ProjectPage