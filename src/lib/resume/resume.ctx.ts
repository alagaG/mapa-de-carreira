import { createContext } from "react";
import type { ResumeProfile } from "./resume.type";
import { ResumeBuilder } from "./resume.utils";

export const ResumeContext: React.Context<ResumeProfile> = createContext(
    ResumeBuilder.default()
);
