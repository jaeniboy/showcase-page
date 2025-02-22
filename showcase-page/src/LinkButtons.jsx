import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const DemoLink = ({ link }) => {
    return (
        <>
            <a href={link} target="_blank">
                <div className="whitespace-nowrap flex flex-row inline-flex bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    <div>Live demo!</div>
                    <div className="ml-2 pt-1">
                        <FaExternalLinkAlt />
                    </div>
                </div>
            </a>
        </>
    )
}

const RepositoryLink = ({ link }) => {
    return (
        <>
            <a href={link} target="_blank">
                <div className="whitespace-nowrap flex flex-row inline-flex bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
                    <div>Repository</div>
                    <div className="ml-2 pt-1">
                        <FaGithub />
                    </div>
                </div>
            </a>
        </>
    )
}

export { DemoLink, RepositoryLink}