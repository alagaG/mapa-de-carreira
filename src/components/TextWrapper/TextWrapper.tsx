import "./TextWrapper.css";

export interface TextWrapperProps
    extends React.HTMLAttributes<HTMLDivElement> {}

export default function TextWrapper({ children, ...props }: TextWrapperProps) {
    return (
        <div className="textwrapper" {...props}>
            {children}
        </div>
    );
}
