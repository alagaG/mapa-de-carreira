import "./SectionHeader.css";

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLElement> {
    sectionTitle: string;
}

export default function SectionHeader({ sectionTitle }: SectionHeaderProps) {
    return (
        <header className="sectionheader">
            <h3 className="sectionheader__title">{sectionTitle}</h3>
            <span className="sectionheader__line" />
        </header>
    );
}
