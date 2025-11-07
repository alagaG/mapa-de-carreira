import "./TimelineDecorator.css";

export interface TimelineDecoratorProps
    extends React.HTMLAttributes<HTMLElement> {}

export default function TimelineDecorator({
    children,
    ...props
}: TimelineDecoratorProps) {
    return (
        <div className="timelinedeco" {...props}>
            <div className="timelinedeco__prop"></div>
            <div className="timelinedeco__content">{children}</div>
        </div>
    );
}
