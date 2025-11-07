import SkillTagGroup from "../SkillTagGroup/SkillTagGroup";
import TextTitle from "../TextTitle/TextTitle";
import TextWrapper from "../TextWrapper/TextWrapper";
import TimelineDecorator from "../TimelineDecorator/TimelineDecorator";

export interface TimelineStepProps extends React.HTMLAttributes<HTMLElement> {
    role: string;
    roleDescription: string;
    softSkills: string[];
    hardSkillsRoadmap: string[];
}

export default function TimelineStep({
    role,
    roleDescription,
    softSkills,
    hardSkillsRoadmap,
    ...props
}: TimelineStepProps) {
    return (
        <TimelineDecorator {...props}>
            <TextWrapper>
                <div>
                    <TextTitle content={role} fontSize={"lg"} />
                    <p>{roleDescription}</p>
                </div>
                <div>
                    <TextTitle
                        content="Soft Skills exigidas para essa carreira:"
                        fontSize={"md"}
                    />
                    <ul>
                        {softSkills.map((ss, i) => (
                            <li key={`softskill-${i}`}>{ss}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <TextTitle
                        content="Roadmap de Aprendizado"
                        fontSize={"md"}
                    />

                    <SkillTagGroup groupSkills={hardSkillsRoadmap} />
                </div>
            </TextWrapper>
        </TimelineDecorator>
    );
}
