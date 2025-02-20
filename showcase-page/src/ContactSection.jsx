import React from 'react';
import { FaEnvelope, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import {SiSignal, SiGithub } from 'react-icons/si'

const ContactSection = () => {
    const contactMethods = [
        { name: 'github', href: 'https://www.github.com/jaeniboy', label: 'github' },
        { name: 'signal', href: 'https://signal.me/#p/IhreSignalNummer', label: 'Signal' },
        { name: 'linkedin', href: 'https://www.linkedin.com/in/ihr-profil', label: 'LinkedIn' },
        { name: 'whatsapp', href: 'https://wa.me/IhreWhatsappNummer', label: 'WhatsApp' },
        { name: 'email', href: 'mailto:ihre.email@example.com', label: 'E-Mail' },
    ];

    return (
        <div className="flex">
            <div className="my-4 inline-flex flex-col items-center ml-auto">
                <h2 className="text-lg text-center font-bold mb-2">Contact me!</h2>
                <div className="flex bg-black py-2 px-6 rounded-full justify-center space-x-3">
                    {contactMethods.map((method) => (
                        <a
                            key={method.name}
                            href={method.href}
                            aria-label={method.label}
                            title={method.name}
                            className="text-3xl text-white hover:scale-115 transition-transform duration-300"
                            // className="text-3xl text-white hover:text-blue-500 transition-colors duration-300"
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
    whatsapp: FaWhatsapp,
    signal: SiSignal,
    linkedin: FaLinkedin,
    github: SiGithub,
};

const Icon = ({ name, ...props }) => {
    const IconComponent = iconMap[name];
    return IconComponent ? <IconComponent {...props} /> : null;
};


export default ContactSection;
