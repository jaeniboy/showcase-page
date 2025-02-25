import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from './data/projects'
import ContactSection from './ContactSection';
import Header from './Header';
import TagCloud from './TagCloud';

function LandingPage() {

    return (
        <div className="text-center">
            <Header />
            <section className="h-screen w-full flex justify-center items-center bg-cover bg-center bg-[url(https://picsum.photos/seed/picsum/2500/1667)]">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl px-4">
                    Developer by accident
                </h1>
            </section>

            <section className="pt-16 px-4">
                <div className="flex flex-col md:flex-row justify-center items-center max-w-4xl mx-auto">
                    <img src="https://picsum.photos/200" alt="Your Name" className="w-48 h-48 rounded-full mb-8 md:mb-0 md:mr-8" />
                    <div className="text-left">
                        <h2 className="text-3xl font-semibold mb-4">That's me</h2>
                        <p className="text-lg font-caveat">
                            I'm Jan, a father of two and - thanks to technology-driven jobs and 
                            limited developer capacities - a self-proclaimed "developer by accident." 
                            A huge part of my daily work now consists of Python and JavaScript coding, 
                            data analysis, APIs, and Git repositories. Check out my private coding 
                            projects to get an overview of my skills. Feedback is very much appreciated.
                        </p>
                    </div>
                </div>
            </section>
            <div className="sticky top-[6px] my-10 transform -translate-x-4 z-20">
                <ContactSection></ContactSection>
            </div>

            <section className="bg-gray-100 py-16 px-4">
                <h2 className="text-3xl font-semibold mb-8">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.teaser}
                            link={project.link}
                            repoLink={project.repoLink}
                            demoLink={project.demoLink}
                            image={project.teaserImage}
                        />
                    ))}
                </div>
            </section>

            <section className="py-16 px-4">
                <h2 className="text-3xl font-semibold mb-8">My Stack</h2>
                <TagCloud data={projects}></TagCloud>

            </section>

            <section className="bg-gray-100 py-16 px-4">
                <h2 className="text-3xl font-semibold mb-8">Contact</h2>
                <form className="max-w-lg mx-auto flex flex-col">
                    <input type="text" placeholder="Name" required className="mb-4 p-2 border border-gray-300 rounded" />
                    <input type="email" placeholder="E-Mail" required className="mb-4 p-2 border border-gray-300 rounded" />
                    <textarea placeholder="Ihre Nachricht" required className="mb-4 p-2 border border-gray-300 rounded h-32"></textarea>
                    <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Senden</button>
                </form>
            </section>


        </div>
    );

}


export default LandingPage;
