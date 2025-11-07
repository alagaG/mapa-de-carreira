import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import "./SkillTag.css";

const variants = cva("skilltag", {
    variants: {},
    compoundVariants: [],
    defaultVariants: {},
});

export interface SkillTagProps
    extends React.HTMLAttributes<HTMLElement>,
        VariantProps<typeof variants> {
    text: string;
}

export default function SkillTag({ text, className, ...props }: SkillTagProps) {
    return (
        <span className={variants({ className })} {...props}>
            {text}
        </span>
    );
}
