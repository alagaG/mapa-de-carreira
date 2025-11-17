import "./ResumeHeader.css";
import { useContext } from "react";
import { ResumeContext } from "../Resume/Resume";
import ResumeContact from "../ResumeContact/ResumeContact";

export default function ResumeHeader() {
    const resume = useContext(ResumeContext);

    return (
        <header className="resume-header">
            <img
                src="https://placehold.co/200x200"
                alt=""
                className="resume-header__image"
            />
            <div className="resume-header__details">
                <div>
                    <h2 className="resume-header__name">
                        Matheus de Oliveira Caldas
                    </h2>
                    <p className="resume-header__role">Desenvolvedor Web</p>
                </div>
                <div className="resume-header__contact">
                    {resume.contact.map((contact, index) => (
                        <ResumeContact
                            key={`contact-${index}`}
                            contact={contact}
                        />
                    ))}
                </div>
            </div>
        </header>
    );
}
