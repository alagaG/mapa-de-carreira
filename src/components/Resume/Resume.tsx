import { createContext } from "react";
import type { ResumeProfile } from "../../lib/resume/resume.type";
import ResumeBody from "../ResumeBody/ResumeBody";
import ResumeHeader from "../ResumeHeader/ResumeHeader";
import Section from "../Section/Section";
import { ResumeBuilder } from "../../lib/resume";
import "./Resume.css";

export interface ResumeProps {
    profile: ResumeProfile;
}

export const ResumeContext: React.Context<ResumeProfile> = createContext(
    ResumeBuilder.default()
);

export default function Resume({ profile }: ResumeProps) {
    return (
        <div className="resume">
            <ResumeContext.Provider value={profile}>
                <ResumeHeader />
                <Section sectionTitle="MAPA DE CARREIRA">
                    <h5>{profile.presentation.title}</h5>
                    <p>{profile.presentation.content}</p>
                </Section>
                <ResumeBody />
            </ResumeContext.Provider>
        </div>
    );
}
