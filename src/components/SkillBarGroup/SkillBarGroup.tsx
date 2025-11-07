import SkillBar, { type BarSkill } from "../SkillBar/SkillBar";
import type { SkillGroupProps } from "../SkillGroup/SkillGroup";
import SkillGroup from "../SkillGroup/SkillGroup";

export interface SkillBarGroupProps extends SkillGroupProps {
    groupSkills: BarSkill[];
}

export default function SkillBarGroup({
    groupSkills,
    groupTitle,
    ...props
}: SkillBarGroupProps) {
    return (
        <SkillGroup groupTitle={groupTitle} gap={12} {...props}>
            {groupSkills.map((sk, i) => {
                return <SkillBar key={`skill-${i}`} skill={sk} />;
            })}
        </SkillGroup>
    );
}
