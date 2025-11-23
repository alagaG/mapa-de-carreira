import { useContext } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import SkillBarGroup from "../SkillBarGroup/SkillBarGroup";
import SkillTagGroup from "../SkillTagGroup/SkillTagGroup";
import TimelineStep from "../TimelineStep/TimelineStep";
import "./ResumeBody.css";
import { ResumeContext } from "../../lib/resume";

export type ResumeBodyProps = React.HTMLAttributes<HTMLDivElement>;

export default function ResumeBody({ ...props }: ResumeBodyProps) {
    const resume = useContext(ResumeContext);
    return (
        <div className="resume-body" {...props}>
            <section className="resume-body__main">
                <SectionHeader sectionTitle="MAPA DE CARREIRA" />

                {resume.carrerMap.map((step, index) => (
                    <TimelineStep
                        key={`careerstep-${index}`}
                        role={step.role}
                        roleDescription={step.description}
                        softSkills={step.skillList}
                        hardSkillsRoadmap={step.skillTags.map(
                            (stg) => stg.name
                        )}
                    />
                ))}
            </section>
            <aside className="resume-body__side">
                {resume.sidebar.map((section, index) => (
                    <section key={`sidebar-${index}`}>
                        <SectionHeader sectionTitle={section.title} />
                        <div className="resume-body__side__content">
                            {section.bars ? (
                                <SkillBarGroup
                                    groupTitle={section.bars.subtitle}
                                    groupSkills={section.bars.skills}
                                />
                            ) : null}
                            {section.tags ? (
                                <SkillTagGroup
                                    groupTitle={section.tags.subtitle}
                                    groupSkills={section.tags.skills.map(
                                        (stg) => stg.name
                                    )}
                                />
                            ) : null}
                        </div>
                    </section>
                ))}
            </aside>
        </div>
    );
}
