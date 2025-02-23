import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const RepositoryLink = ({ link }) => {
    return (
        <ExternalLinkButton
            link={link}
            color="black"
            text="Repository"
            icon={FaGithub}
        />
    )
}

const DemoLink = ({ link }) => {
    return (
        <ExternalLinkButton
            link={link}
            color="blue"
            text="Live demo!"
            icon={FaExternalLinkAlt}
        />
    )
}

const ExternalLinkButton = ({ link, color, text, icon: Icon }) => {

    const colorClasses = {
        blue: 'hover:bg-blue-500 text-blue-500 border-blue-500',
        black: 'hover:bg-black text-black border-black',
      }

    const baseClass = `whitespace-nowrap flex flex-row inline-flex bg-transparent font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded`
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