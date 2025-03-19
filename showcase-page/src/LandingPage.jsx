import React, { Children } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from './data/projects'
import ContactSection from './ContactSection';
import Header from './Header';
import TagCloud from './TagCloud';

function LandingPage() {

    return (
        <div className="text-center">
            <Header />
            <section
                className="h-screen w-full flex flex-col justify-center items-center bg-cover bg-center bg-[url(https://picsum.photos/seed/picsum/2500/1667)]"
            // style={{"textShadow": "3px 3px 4px #777"}}
            >
                <div className="w-full h-screen bg-black/20 flex flex-col justify-center items-center p-4">
                    <h1 className="tracking-tight drop-shadow-lg text-5xl/18 md:text-8xl lg:text-8xl max-w-4xl px-4 text-white underline decoration-teal-500 decoration-5">
                    „Developer by accident“
                    </h1>
                    <h2 className="mt-4 drop-shadow-lg text-gray-200 text-xl flex justify-end w-full max-w-3xl px-4">-- Jan Seipel</h2>
                </div>
            </section>

            <section className="pt-16 px-4 min-h-[80vh] flex">
                <div className="flex flex-col md:flex-row justify-center items-center max-w-4xl mx-auto">
                    <img src="https://picsum.photos/200" alt="Your Name" className="w-48 h-48 rounded-full mb-10 md:mb-0 md:mr-8 border-teal-500 border-5 p-1 inset-shadow-xl" />
                    <div className="text-left">
                        <h2 className="text-xl tracking-tight font-bold mb-3 text-gray-800">That's me</h2>
                        <div className="text-base/7 text-gray-500 tracking-wide">
                            I'm Jan, a father of two and - thanks to technology-driven jobs and
                            limited developer capacities - a self-proclaimed "developer by accident."
                            A huge part of my daily work now consists of Python and JavaScript coding,
                            data analysis, APIs, and Git repositories. Check out my private coding
                            projects to get an overview of my skills. Feedback is very much appreciated.
                        </div>
                    </div>
                </div>
            </section>
            <div className="sticky top-[0px] mb-10 transform -translate-x-4 z-20">
                <ContactSection></ContactSection>
            </div>

            <section className="bg-gray-300 bg-teal-600 py-16 px-4">
                <HeadlineSecondary text="My Projekts" css="text-teal-50"/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto sm:px-20 md:px-8">

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

            <section className="py-16 px-4 min-h-[90vh] flex flex-col justify-center">
                <HeadlineSecondary text="My Stack" />
                <TagCloud data={projects}></TagCloud>
            </section>

            <section className="bg-gray-100 py-16 px-4 min-h-[90vh]">
                <HeadlineSecondary text="My Footer" />
                <div className="text-gray-600 mt-10">Really don't know what to write here...</div>
                <div className="text-gray-600 mt-24">© Jan Seipel, 2025</div>
                {/* <form className="max-w-lg mx-auto flex flex-col">
                    <input type="text" placeholder="Name" required className="mb-4 p-2 border border-gray-300 rounded" />
                    <input type="email" placeholder="E-Mail" required className="mb-4 p-2 border border-gray-300 rounded" />
                    <textarea placeholder="Ihre Nachricht" required className="mb-4 p-2 border border-gray-300 rounded h-32"></textarea>
                    <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Senden</button>
                </form> */}
            </section>


        </div>
    );

}

const HeadlineSecondary = ({ text, css }) => {
    return (
        <h2 className={`text-xl font-bold tracking-tight mb-8 text-gray-600 ${css}`}>{text}</h2>
    )
}


export default LandingPage;
