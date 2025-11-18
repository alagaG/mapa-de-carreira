import {
    BiLogoGithub,
    BiLogoLinkedinSquare,
    BiQuestionMark,
} from "react-icons/bi";
import type { ContactMediaType, ContactMidia } from "../../lib/resume";
import "./ResumeContact.css";

export interface ResumeContactProps {
    contact: ContactMidia;
}

export default function ResumeContact({ contact }: ResumeContactProps) {
    return (
        <div className="resume-contact__wrapper">
            <a target="_blank" href={contact.link} className="resume-contact">
                {getIcon(contact.type)}
                <span className="">{contact.type}</span>
            </a>
        </div>
    );
}

function getIcon(type: ContactMediaType) {
    switch (type) {
        case "GitHub":
            return <BiLogoGithub size={32} color="black" />;
        case "LinkedIn":
            return <BiLogoLinkedinSquare size={32} color="#0a66c2" />;
        default:
            return <BiQuestionMark size={32} color="black" />;
    }
}
