import Background from "./components/Background/Background";
import Resume from "./components/Resume/Resume";
import "./css/style.css";
import { ResumeBuilder } from "./lib/resume";

export default function App() {
    const profile = new ResumeBuilder("Matheus de Oliveira Caldas")
        .setTitle("Desenvolvedor Fullstack")
        .setPresentation(
            "Desenvolvedor",
            "Sou estudante dew Ciência da Computação fascinado por tecnologia, desde lógica até inteligência artificial que desde o ensino médio busca aprender mais e se capacitar profissionalmente por meio de cursos extracurriculares e profissionalizantes como o Proprofissão do Instituto Proa.\nJá tive a oportunidade de estudar web (front e back-end), banco de dados, jogos e redes e busco uma carreira voltada para desenvolvimento web fullstack."
        )
        .addContact("GitHub", "https://github.com/alagaG")
        .addContact("LinkedIn", "https://linkedin.com/math-caldas")
        .addCarrerStep(
            "Desenvolvedor Fullstack Júnior",
            "O Desenvolvedor Fullstack Júnior é o início da carreira na área, atuando no front-end e no back-end. Nessa etapa, você colabora com a equipe em tarefas simples, correções de bugs e implementação de funcionalidades básicas, sempre seguindo boas práticas e a orientação de profissionais mais experientes. É o momento de fortalecer os fundamentos de linguagens, frameworks e controle de versão, contribuindo nos projetos enquanto aprende continuamente com os desafios técnicos.",
            (builder) =>
                builder
                    .addSkillToList([
                        "Comunicação",
                        "Proatividade",
                        "Trabalho em Equipe",
                        "Aprendizado Contínuo",
                        "Gerenciamento de Tempo",
                    ])
                    .addSkillToTags((builder) =>
                        builder
                            .add("Modelagem Relacional (ER)")
                            .add("SQL Server")
                            .add("MongoDB")
                            .add("Java")
                            .add("C#")
                            .add("HTML")
                            .add("CSS")
                            .add("JavaScript")
                            .add("Git")
                            .add("Computação em Nuvem")
                    )
        )
        .addCarrerStep("Desenvolvedor Fullstack Pleno", "a", (builder) =>
            builder
                .addSkillToList(["c"])
                .addSkillToTags((builder) => builder.add("b"))
        )
        .addCarrerStep("Desenvolvedor Fullstack Sênior", "b", (builder) =>
            builder
                .addSkillToList(["c"])
                .addSkillToTags((builder) => builder.add("a"))
        )
        .addSidebarSection("HABILIDADES", (builder) =>
            builder
                .setBarsSection("Hard Skills", (builder) =>
                    builder
                        .add("Git", 60)
                        .add("Java", 65)
                        .add("C#", 50)
                        .add("HTML", 75)
                        .add("CSS", 65)
                        .add("JavaScript", 80)
                        .add("React", 60)
                        .add("Computação em Nuvem", 15)
                        .add("SQL", 55)
                        .add("NoSQL", 20)
                )
                .setTagsSection("Soft Skills", (builder) =>
                    builder
                        .add("Comunicação")
                        .add("Trabalho em equipe")
                        .add("Pensamento estruturado")
                        .add("Aprendizado Contínuo")
                        .add("Gerenciamento de Tempo")
                        .add("Proatividade")
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
