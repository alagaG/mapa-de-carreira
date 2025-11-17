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
                    builder.add("Java", 100).add("C#", 100).add("HTML", 100)
                )
                .setTagsSection("Soft Skills", (builder) =>
                    builder.add("Comunicação").add("Trabalho em equipe")
                )
        )
        .build();

    return (
        <main className="container">
            <Resume profile={profile} />
            <img
                src="https://plus.unsplash.com/premium_photo-1674409427334-0ae5280381ee?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFpc2FnZW0lMjBkbyUyMGxhZ298ZW58MHx8MHx8fDA%3D"
                alt=""
                className="background"
            />
        </main>
    );
}
