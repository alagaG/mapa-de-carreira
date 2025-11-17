import "./SectionHeader.css";

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLElement> {
    sectionTitle: string;
}

export default function SectionHeader({ sectionTitle }: SectionHeaderProps) {
    return (
        <header className="section-header">
            <h3 className="section-header__title">{sectionTitle}</h3>
            <span className="section-header__line" />
        </header>
    );
}
