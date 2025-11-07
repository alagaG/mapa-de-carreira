import { cva, type VariantProps } from "class-variance-authority";
import "./TextTitle.css";

const variants = cva("texttitle", {
    variants: {
        fontSize: {
            lg: "texttitle--lg",
            md: "texttitle--md",
        },
    },
    defaultVariants: {
        fontSize: "md",
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
