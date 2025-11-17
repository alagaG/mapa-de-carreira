import type {
    CareerStep,
    ContactMediaType,
    ContactMidia,
    ResumeProfile,
    SkillBar,
    SkillSection,
    SkillTag,
} from "./resume.type";

export class ResumeBuilder {
    private resume: ResumeProfile;

    constructor(name: string) {
        this.resume = {
            name,
            title: "",
            presentation: { title: "", content: "" },
            contact: [],
            carrerMap: [],
            sidebar: [],
        };
    }

    static default() {
        return new ResumeBuilder("Erro").build();
    }

    setTitle(title: string) {
        this.resume.title = title;
        return this;
    }

    setPresentation(title: string, content: string) {
        this.resume.presentation = { title, content };
        return this;
    }

    addContact(type: ContactMediaType, link: string) {
        this.resume.contact.push({ type, link });
        return this;
    }

    addCarrerStep(
        role: string,
        description: string,
        consumer: BuilderConsumer<CarrerStepBuilder>
    ) {
        const stepBuilder = new CarrerStepBuilder(role, description);
        consumer(stepBuilder);
        this.resume.carrerMap.push(stepBuilder.build());
        return this;
    }

    addSidebarSection(
        title: string,
        consumer: BuilderConsumer<SkillSidebarSectionBuilder>
    ) {
        const builder = new SkillSidebarSectionBuilder(title);
        consumer(builder);
        this.resume.sidebar.push(builder.build());
        return this;
    }

    build() {
        return this.resume;
    }
}

class CarrerStepBuilder {
    private step: CareerStep;

    constructor(role: string, description: string) {
        this.step = {
            role,
            description,
            skillList: [],
            skillTags: [],
        };
    }

    addSkillToList(skill: string | string[]) {
        if (Array.isArray(skill)) this.step.skillList.push(...skill);
        else this.step.skillList.push(skill);
        return this;
    }

    addSkillToTags(consumer: BuilderConsumer<SkillTagGroupBuilder>) {
        const builder = new SkillTagGroupBuilder(this.step.skillTags);
        consumer(builder);
        return this;
    }

    build() {
        return this.step;
    }
}

type BuilderConsumer<T> = (builder: T) => any;

class SkillSidebarSectionBuilder {
    private section: SkillSection;

    constructor(title: string) {
        this.section = { title };
    }

    setBarsSection(
        title: string,
        consumer: BuilderConsumer<SkillBarGroupBuilder>
    ) {
        const skills: SkillBar[] = [];
        this.section.bars = {
            subtitle: title,
            skills,
        };

        const builder: SkillBarGroupBuilder = new SkillBarGroupBuilder(skills);
        consumer(builder);
        return this;
    }

    setTagsSection(
        title: string,
        consumer: BuilderConsumer<SkillTagGroupBuilder>
    ) {
        const skills: SkillTag[] = [];
        this.section.tags = {
            subtitle: title,
            skills,
        };

        const builder: SkillTagGroupBuilder = new SkillTagGroupBuilder(skills);
        consumer(builder);
        return this;
    }

    build() {
        return this.section;
    }
}

class SkillBarGroupBuilder {
    private group: SkillBar[];

    constructor(group: SkillBar[]) {
        this.group = group;
    }

    static of(name: string, percent: number): SkillBar {
        return { name, percent };
    }

    add(name: string, percent: number) {
        this.group.push({ name, percent });
        return this;
    }
}

class SkillTagGroupBuilder {
    private group: SkillTag[];

    constructor(group: SkillTag[]) {
        this.group = group;
    }

    add(name: string) {
        this.group.push({ name });
        return this;
    }
}
