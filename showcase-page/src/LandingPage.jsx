import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from './data/projects'
import ContactSection from './ContactSection';

function LandingPage() {

    return (
        <div className="text-center">
            <section className="h-screen w-full flex justify-center items-center bg-cover bg-center bg-[url(https://picsum.photos/seed/picsum/2500/1667)]">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl px-4">
                    Innovative Webentwicklung für die digitale Zukunft
                </h1>
            </section>

            <section className="pt-16 px-4">
                <div className="flex flex-col md:flex-row justify-center items-center max-w-4xl mx-auto">
                    <img src="https://picsum.photos/200" alt="Your Name" className="w-48 h-48 rounded-full mb-8 md:mb-0 md:mr-8" />
                    <div className="text-left">
                        <h2 className="text-3xl font-semibold mb-4">Über mich</h2>
                        <p className="text-lg">
                            Hallo, ich bin Jan Seipel. Als leidenschaftlicher Webentwickler
                            kreiere ich innovative digitale Lösungen, die Nutzer begeistern
                            und Unternehmen voranbringen. Mit 10 Jahren Erfahrung in
                            React und modernen Webtechnologien bin ich stets auf der Suche
                            nach neuen Herausforderungen.
                        </p>


                    </div>
                </div>
            </section>
            <div className="sticky top-2 my-10 transform -translate-x-10">
                <ContactSection></ContactSection>
            </div>

            <section className="bg-gray-100 py-16 px-4">
                <h2 className="text-3xl font-semibold mb-8">Meine Projekte</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            image={project.image}
                        />
                    ))}

                </div>
            </section>

            <section className="py-16 px-4">
                <h2 className="text-3xl font-semibold mb-8">Kontakt</h2>
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
