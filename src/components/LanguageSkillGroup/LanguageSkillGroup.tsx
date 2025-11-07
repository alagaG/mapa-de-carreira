import type { LanguageSkill } from "../LanguageSkill/LanguageSkill";
import LanguageSkillDisplay from "../LanguageSkill/LanguageSkill";
import SkillGroup, { type SkillGroupProps } from "../SkillGroup/SkillGroup";

export interface LanguageSkillGroupProps extends SkillGroupProps {
    groupSkills: LanguageSkill[];
}

export default function LanguageSkillGroup({
    groupTitle,
    groupSkills,
    ...props
}: LanguageSkillGroupProps) {
    return (
        <SkillGroup groupTitle={groupTitle} {...props}>
            {groupSkills.map((sk, i) => {
                return <LanguageSkillDisplay key={`skill-${i}`} skill={sk} />;
            })}
        </SkillGroup>
    );
}
