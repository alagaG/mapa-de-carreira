export interface LanguageSkill {
    name: string;
    level: "Básico" | "Intermediário" | "Avançado" | "Fluente" | "Nativo";
}

export interface LanguageSkillProps
    extends React.HTMLAttributes<HTMLDivElement> {
    skill: LanguageSkill;
}

export default function LanguageSkillDisplay({
    skill,
    ...props
}: LanguageSkillProps) {
    return (
        <p className="languageskill" {...props}>
            {skill.name} ({skill.level})
        </p>
    );
}
