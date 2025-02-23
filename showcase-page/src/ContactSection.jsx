import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { SiSignal, SiGithub, SiWhatsapp, SiLinkedin } from 'react-icons/si'

const ContactSection = ({vertical=false}) => {
    const contactMethods = [
        { name: 'github', href: 'https://www.github.com/jaeniboy', label: 'github' },
        { name: 'signal', href: 'https://signal.me/#p/IhreSignalNummer', label: 'Signal' },
        { name: 'linkedin', href: 'https://www.linkedin.com/in/ihr-profil', label: 'LinkedIn' },
        { name: 'whatsapp', href: 'https://wa.me/ihreWhatsappNummer', label: 'WhatsApp' },
        { name: 'email', href: 'mailto:ihre.email@example.com', label: 'E-Mail' },
    ];

    const orientation = vertical ?
         "flex flex-col bg-black py-2 px-3 rounded-full justify-center space-y-3"
         :
         "flex bg-white border-black border-1 py-2 px-3 rounded-full justify-center space-x-3"
        //  "flex bg-black py-2 px-3 rounded-full justify-center space-x-3"

    const contactArrow = "->"

    return (
        <div className="flex">
            <div className="inline-flex flex-row items-center ml-auto">
                <div className={vertical ? "flex hidden" : "flex"}>
                    <h2 className="font-caveat text-xl text-center font-bold mt-2 mb-2 mr-3 -rotate-3" style={{"font-family": "Caveat"}}>contact me <span className="">{contactArrow}</span></h2>
                    {/* <div className="text-md ml-2 pt-3">
                        <FaArrowTurnDown />
                    </div> */}
                </div>
                <div className={orientation}>
                    {contactMethods.map((method) => (
                        <a
                            key={method.name}
                            href={method.href}
                            aria-label={method.label}
                            title={method.name}
                            className="text-2xl text-black hover:scale-115 transition-transform duration-300"
                            // className="text-2xl text-white hover:scale-115 transition-transform duration-300"
                        >
                            <Icon name={method.name} />

                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

const iconMap = {
    email: FaEnvelope,
    whatsapp: SiWhatsapp,
    signal: SiSignal,
    linkedin: SiLinkedin,
    github: SiGithub,
};

const Icon = ({ name, ...props }) => {
    const IconComponent = iconMap[name];
    return IconComponent ? <IconComponent {...props} /> : null;
};


export default ContactSection;
