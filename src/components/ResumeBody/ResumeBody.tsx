import LanguageSkillGroup from "../LanguageSkillGroup/LanguageSkillGroup";
import Section from "../Section/Section";
import SectionHeader from "../SectionHeader/SectionHeader";
import SkillBarGroup from "../SkillBarGroup/SkillBarGroup";
import SkillTagGroup from "../SkillTagGroup/SkillTagGroup";
import TextTitle from "../TextTitle/TextTitle";
import TextWrapper from "../TextWrapper/TextWrapper";
import TimelineDecorator from "../TimelineDecorator/TimelineDecorator";
import TimelineStep from "../TimelineStep/TimelineStep";
import "./ResumeBody.css";

export interface ResumeBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    skills: string[];
}

export default function ResumeBody({ skills, ...props }: ResumeBodyProps) {
    return (
        <div className="resumebody" {...props}>
            <main className="resumebody__main">
                <SectionHeader sectionTitle="MAPA DE CARREIRA" />
                <TimelineStep
                    role="Desenvolvedor Fullstack"
                    roleDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                        voluptatibus quaerat ipsa magni labore eligendi molestiae
                        maiores, at tempora pariatur? Odit voluptatibus ex eligendi
                        animi veritatis! Sit ea ipsa ut."
                    softSkills={["A", "B", "C"]}
                    hardSkillsRoadmap={["Java", "Spring", "HTML"]}
                />
                <TimelineStep
                    role="Desenvolvedor Fullstack"
                    roleDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                        voluptatibus quaerat ipsa magni labore eligendi molestiae
                        maiores, at tempora pariatur? Odit voluptatibus ex eligendi
                        animi veritatis! Sit ea ipsa ut."
                    softSkills={["A", "B", "C"]}
                    hardSkillsRoadmap={["Java", "Spring", "HTML"]}
                />
                <TimelineStep
                    role="Desenvolvedor Fullstack"
                    roleDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                        voluptatibus quaerat ipsa magni labore eligendi molestiae
                        maiores, at tempora pariatur? Odit voluptatibus ex eligendi
                        animi veritatis! Sit ea ipsa ut."
                    softSkills={["A", "B", "C"]}
                    hardSkillsRoadmap={["Java", "Spring", "HTML"]}
                />
            </main>
            <aside className="resumebody__side">
                <section>
                    <SectionHeader sectionTitle="HARD SKILLS" />
                    <div className="resumebody__side__content">
                        <SkillBarGroup
                            groupTitle="Front End"
                            groupSkills={[
                                { name: "Java", percent: 90 },
                                { name: "Python", percent: 80 },
                            ]}
                        />
                        <SkillTagGroup
                            groupTitle="Outras"
                            groupSkills={skills}
                        />
                    </div>
                </section>
                <section>
                    <SectionHeader sectionTitle="HARD SKILLS" />
                    <div className="resumebody__side__content">
                        <SkillBarGroup
                            groupTitle="Front End"
                            groupSkills={[
                                { name: "Java", percent: 90 },
                                { name: "Python", percent: 80 },
                            ]}
                        />
                        <SkillTagGroup
                            groupTitle="Outras"
                            groupSkills={skills}
                        />
                    </div>
                </section>
                <section>
                    <SectionHeader sectionTitle="IDIOMAS" />
                    <div className="resumebody__side__content">
                        <LanguageSkillGroup
                            groupTitle="A"
                            groupSkills={[
                                { name: "Português", level: "Nativo" },
                                { name: "Inglês", level: "Intermediário" },
                            ]}
                        />
                    </div>
                </section>
            </aside>
        </div>
    );
}
