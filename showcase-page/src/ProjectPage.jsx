import React from "react";
import { Link } from "react-router-dom";

function ProjectPage({ title, description, image }) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Bild */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* Titel und Beschreibung */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-gray-700">{description}</p>
          </div>
        </div>
        <Link to="/">
        <div>zurück</div>
        </Link>
      </div>
    );
  }

export default ProjectPage