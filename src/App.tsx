import Background from "./components/Background/Background";
import Resume from "./components/Resume/Resume";
import "./css/style.css";
import { ResumeBuilder } from "./lib/resume";

export default function App() {
    const profile = new ResumeBuilder("Matheus de Oliveira Caldas")
        .setTitle("Desenvolvedor Fullstack")
        .setPresentation(
            "Desenvolvedor",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolor minima eaque, explicabo sapiente nihil maxime debitis doloremque sint perspiciatis placeat doloribus eos asperiores dicta. Assumenda quisquam maiores deserunt facere!"
        )
        .addContact("GitHub", "https://github.com/alagaG")
        .addContact("LinkedIn", "https://linkedin.com/math-caldas")
        .addCarrerStep(
            "Estagiário de Desenvolvimento de Software",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci vel inventore perferendis quidem maiores fugit corrupti quibusdam odio necessitatibus, hic vitae est quam. Quis neque voluptas enim incidunt voluptates?",
            (builder) =>
                builder
                    .addSkillToList(["Java", "C#", "HTML", "CSS"])
                    .addSkillToTags((builder) =>
                        builder
                            .add("Banco de Dados")
                            .add("SQL Server")
                            .add("MySQL")
                            .add("MongoDB")
                            .add("Java")
                            .add("C#")
                            .add("HTML")
                            .add("CSS")
                    )
        )
        .addSidebarSection("HARD SKILLS", (builder) =>
            builder
                .setBarsSection("Hard Skills", (builder) =>
                    builder.add("Java", 75).add("C#", 38).add("HTML", 5)
                )
                .setTagsSection("Soft Skills", (builder) =>
                    builder.add("Comunicação").add("Trabalho em equipe")
                )
        )
        .build();

    return (
        <main className="container">
            <Resume profile={profile} />
            <Background />
        </main>
    );
}
