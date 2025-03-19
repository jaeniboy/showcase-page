import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { SiSignal, SiGithub, SiWhatsapp, SiLinkedin } from 'react-icons/si'

const ContactSection = ({vertical=false}) => {
    const contactMethods = [
        { name: 'github', href: 'https://www.github.com/jaeniboy', label: 'github' },
        { name: 'signal', href: 'https://signal.me/#p/IhreSignalNummer', label: 'Signal' },
        { name: 'linkedin', href: 'https://www.linkedin.com/in/jan-seipel-328595108/', label: 'LinkedIn' },
        { name: 'whatsapp', href: 'https://wa.me/ihreWhatsappNummer', label: 'WhatsApp' },
        { name: 'email', href: 'mailto:ihre.email@example.com', label: 'E-Mail' },
    ];

    const orientation = vertical ?
         "flex flex-col bg-black py-2 px-3 rounded-full justify-center space-y-3"
         :
         "flex py-2 pl-2 justify-center space-x-2"
        //  "flex bg-teal-700 border-paragraph border-2 border-teal-700 py-2 px-3 rounded-full justify-center space-x-3"
        //  "flex bg-black py-2 px-3 rounded-full justify-center space-x-3"

    const contactArrow = "->"

    return (
        <div className="flex pt-1">
            <div className="inline-flex flex-row items-center ml-auto">
                <div className={vertical ? "flex hidden" : "flex"}>
                    <h2 className="flex flex-row items-center font-caveat text-md text-center font-bold mb-1 mr-2 -rotate-3 leading-none space-x-0" ><div>contact<br/>me</div><div className="">{contactArrow}</div></h2>
                </div>
                <div className={orientation}>
                    {contactMethods.map((method) => (
                        <a
                            key={method.name}
                            href={method.href}
                            aria-label={method.label}
                            title={method.name}
                            className="text-md text-gray-900 hover:scale-115 transition-transform duration-300 bg-gray-200 p-2 rounded-full border-0 border-teal-900 shadow-sm"
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
