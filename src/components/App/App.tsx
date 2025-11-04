import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import "./App.css";
import SkillGroupItem from "../SkillGroup/SkillGroupItem";

export default function App() {
    const profile = {
        skills: ["Java", "Python", "MySQL", "Spring Boot"],
    };

    return (
        <>
            <div className="container">
                <header className="header">
                    <img src="https://placehold.co/200x200" alt="" />
                    <div className="header__details">
                        <div>
                            <h2 className="header__name">
                                Matheus de Oliveira Caldas
                            </h2>
                            <p className="header__tags">Desenvolvedor Web</p>
                        </div>
                        <div className="contact">
                            <a href="#" className="contact__item">
                                <BiLogoGithub size={32} color="black" />
                                <span>GitHub</span>
                            </a>
                            <a href="#" className="contact__item">
                                <BiLogoLinkedinSquare size={32} color="blue" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </header>
                <section>
                    <div className="skill-group">
                        {profile.skills.map((sk, i) => {
                            return (
                                <SkillGroupItem key={`skill-${i}`} text={sk} />
                            );
                        })}
                    </div>
                </section>
                <aside></aside>
            </div>
        </>
    );
}
