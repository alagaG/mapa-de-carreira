import type { SkillGroupProps } from "../SkillGroup/SkillGroup";
import SkillGroup from "../SkillGroup/SkillGroup";
import SkillTag from "../SkillTag/SkillTag";

export interface SkillTagGroupProps extends SkillGroupProps {
    groupSkills: string[];
}

export default function SkillTagGroup({
    groupTitle,
    groupSkills,
    ...props
}: SkillTagGroupProps) {
    return (
        <SkillGroup groupTitle={groupTitle} {...props}>
            {groupSkills.map((sk, i) => {
                return <SkillTag key={`skill-${i}`} text={sk} />;
            })}
        </SkillGroup>
    );
}
