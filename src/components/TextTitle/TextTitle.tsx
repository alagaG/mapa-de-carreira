import { cva, type VariantProps } from "class-variance-authority";
import "./TextTitle.css";

const variants = cva("text-title", {
    variants: {
        fontSize: {
            lg: "text-title--text-lg",
            md: "text-title--text-md",
        },
        marginBotton: {
            md: "text-title--margin-md",
            lg: "text-title--margin-lg",
        },
    },
    defaultVariants: {
        fontSize: "md",
        marginBotton: "md",
    },
});

export interface TextTitleProps
    extends React.HTMLAttributes<HTMLElement>,
        VariantProps<typeof variants> {
    content: string;
}

export default function TextTitle({
    content,
    className,
    fontSize,
}: TextTitleProps) {
    return <h3 className={variants({ className, fontSize })}>{content}</h3>;
}
