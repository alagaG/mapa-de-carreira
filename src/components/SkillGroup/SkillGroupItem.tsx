import { cva, type VariantProps } from "class-variance-authority";
import styles from "./SkillGroupItem.module.css";
import React from "react";

const variants = cva(styles.base, {
    variants: {},
    compoundVariants: [],
    defaultVariants: {},
});

export interface Props
    extends React.HTMLAttributes<HTMLElement>,
        VariantProps<typeof variants> {
    text: string;
}

export default function SkillGroupItem({ text, className }: Props) {
    return (
        <>
            <span className={variants({ className })}>{text}</span>
        </>
    );
}
