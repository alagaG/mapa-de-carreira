import "./SkillGroup.css";

export interface SkillGroupProps extends React.HTMLAttributes<HTMLElement> {
    groupTitle?: string;
    gap?: number;
}

export default function SkillGroup({
    groupTitle,
    gap = 4,
    children,
    ...props
}: SkillGroupProps) {
    return (
        <section className="skillgroup" {...props}>
            {groupTitle ? (
                <h5 className="skillgroup__title">{groupTitle}</h5>
            ) : null}
            <div className="skillgroup__content" style={{ gap: `${gap}px` }}>
                {children}
            </div>
        </section>
    );
}
