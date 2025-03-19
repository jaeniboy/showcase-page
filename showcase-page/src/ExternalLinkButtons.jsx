import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const RepositoryLink = ({ link }) => {
    return (
        <ExternalLinkButton
            link={link}
            color="secondary"
            text="Repository"
            icon={FaGithub}
        />
    )
}

const DemoLink = ({ link }) => {
    return (
        <ExternalLinkButton
            link={link}
            color="primary"
            text="Live Demo!"
            icon={FaExternalLinkAlt}
        />
    )
}

const ExternalLinkButton = ({ link, color, text, icon: Icon }) => {

    const colorClasses = {
        primary: 'hover:border-teal-600 hover:text-teal-600 text-teal-500 border-teal-500',
        secondary: 'hover:border-gray-700 hover:text-gray-700 text-gray-500 border-gray-500',
      }

    const baseClass = `whitespace-nowrap flex flex-row inline-flex bg-transparent my-1 py-2 px-4 border rounded`
    const colorClass = colorClasses[color] || colorClasses.blue
    return (
        <>
            <a href={link} target="_blank">
                <div className={`${baseClass} ${colorClass}`}>
                    <div>{text}</div>
                    <div className="ml-2 pt-1">
                        <Icon />
                    </div>
                </div>
            </a>
        </>
    )
}

export { DemoLink, RepositoryLink}