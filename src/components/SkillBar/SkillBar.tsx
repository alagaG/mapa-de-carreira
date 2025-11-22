import ProgressBar from "../ProgressBar/ProgressBar";
import "./SkillBar.css";

export interface BarSkill {
    name: string;
    percent: number;
}

export interface SkillBarProps {
    skill: BarSkill;
}

export default function SkillBar({ skill, ...props }: SkillBarProps) {
    return (
        <div className="skillbar" {...props}>
            <p className="skillbar__name">{skill.name}</p>
            <ProgressBar value={skill.percent} max={100} />
        </div>
    );
}
