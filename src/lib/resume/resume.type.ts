export interface ResumeProfile {
    name: string;
    title: string;
    presentation: ResumePresentation;
    contact: ContactMidia[];
    carrerMap: CareerStep[];
    sidebar: SkillSection[];
}

export interface ResumePresentation {
    title: string;
    content: string;
}

export interface ContactMidia {
    type: ContactMediaType;
    link: string;
}

export type ContactMediaType = "GitHub" | "LinkedIn";

export interface CareerStep {
    role: string;
    description: string;
    skillList: string[];
    skillTags: SkillTag[];
}

export interface SkillSection {
    title: string;
    bars?: {
        subtitle: string;
        skills: SkillBar[];
    };
    tags?: {
        subtitle: string;
        skills: SkillTag[];
    };
}

export interface SkillBar {
    name: string;
    percent: number;
}

export interface SkillTag {
    name: string;
}
