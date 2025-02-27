import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const RepositoryLink = ({ link }) => {
    return (
        <ExternalLinkButton
            link={link}
            color="primary"
            text="Repository"
            icon={FaGithub}
        />
    )
}

const DemoLink = ({ link }) => {
    return (
        <ExternalLinkButton
            link={link}
            color="secondary"
            text="Live demo!"
            icon={FaExternalLinkAlt}
        />
    )
}

const ExternalLinkButton = ({ link, color, text, icon: Icon }) => {

    const colorClasses = {
        primary: 'hover:bg-primary text-primary border-primary',
        secondary: 'hover:bg-secondary text-secondary border-secondary',
      }

    const baseClass = `whitespace-nowrap flex flex-row inline-flex bg-transparent my-1 font-semibold hover:text-bright py-2 px-4 border hover:border-transparent rounded`
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