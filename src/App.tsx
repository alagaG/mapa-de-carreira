import ResumeHeader from "./components/ResumeHeader/ResumeHeader";
import Section from "./components/Section/Section";
import ResumeBody from "./components/ResumeBody/ResumeBody";
import "./css/style.css";

export default function App() {
    const profile = {
        skills: ["Java", "Python", "MySQL", "Spring Boot"],
    };

    return (
        <div className="container">
            <div className="app">
                <ResumeHeader />
                <Section sectionTitle="MAPA DE CARREIRA">
                    <h5>Desenvolvedor</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod quia aut, magnam aperiam laboriosam quae
                        perferendis, modi quaerat deleniti, voluptatem
                        asperiores sunt corrupti id suscipit culpa nisi quasi
                        harum ad.
                    </p>
                </Section>
                <ResumeBody skills={profile.skills} />
            </div>
        </div>
    );
}
