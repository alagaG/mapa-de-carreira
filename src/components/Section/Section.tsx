import SectionHeader from "../SectionHeader/SectionHeader";
import "./Section.css";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    sectionTitle: string;
}

export default function Section({
    sectionTitle,
    children,
    ...props
}: SectionProps) {
    return (
        <section className="section" {...props}>
            <SectionHeader sectionTitle={sectionTitle} />
            <div className="section__content">{children}</div>
        </section>
    );
}
