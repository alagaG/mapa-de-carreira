import { ResumeContext } from "../../lib/resume";
import type { ResumeProfile } from "../../lib/resume/resume.type";
import ResumeBody from "../ResumeBody/ResumeBody";
import ResumeHeader from "../ResumeHeader/ResumeHeader";
import Section from "../Section/Section";
import "./Resume.css";

export interface ResumeProps {
    profile: ResumeProfile;
}

export default function Resume({ profile }: ResumeProps) {
    return (
        <div className="resume">
            <ResumeContext.Provider value={profile}>
                <ResumeHeader />
                <Section sectionTitle="SOBRE MIM">
                    <h5>{profile.presentation.title}</h5>
                    <p>{profile.presentation.content}</p>
                </Section>
                <ResumeBody />
            </ResumeContext.Provider>
        </div>
    );
}
