import "./TextWrapper.css";

export type TextWrapperProps = React.HTMLAttributes<HTMLDivElement>;

export default function TextWrapper({ children, ...props }: TextWrapperProps) {
    return (
        <div className="textwrapper" {...props}>
            {children}
        </div>
    );
}
