import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import "./ResumeHeader.css";

export default function ResumeHeader() {
    return (
        <header className="header">
            <img src="https://placehold.co/200x200" alt="" />
            <div className="header__details">
                <div>
                    <h2 className="header__details__name">
                        Matheus de Oliveira Caldas
                    </h2>
                    <p className="header__details__tags">Desenvolvedor Web</p>
                </div>
                <div className="header__contact">
                    <a href="#" className="header__contact__item">
                        <BiLogoGithub size={32} color="black" />
                        <span>GitHub</span>
                    </a>
                    <a href="#" className="header__contact__item">
                        <BiLogoLinkedinSquare size={32} color="blue" />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </header>
    );
}
