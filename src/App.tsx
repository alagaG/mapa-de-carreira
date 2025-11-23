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
            "Estágio de Desenvolvimento (Opcional)",
            "O Estágio de Desenvolvimento é a fase inicial de aprendizado prático, voltada para construir a base técnica e profissional. Nesse período, você se familiariza com as ferramentas, processos e cultura da empresa, domina os fundamentos de codificação e auxilia em tarefas de baixo risco, como testes, documentação e pequenas correções. O foco é desenvolver habilidades técnicas e comportamentais por meio de acompanhamento próximo e participação ativa no fluxo de trabalho.",
            (builder) =>
                builder
                    .addSkillToList([
                        "Organização",
                        "Comunicação",
                        "Proatividade",
                        "Trabalho em Equipe",
                        "Aprendizado Contínuo",
                    ])
                    .addSkillToTags((builder) =>
                        builder
                            .add("HTML")
                            .add("CSS")
                            .add("JavaScript")
                            .add("Git")
                            .add("Lógica de Programação")
                    )
        )
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
        .addCarrerStep(
            "Desenvolvedor Fullstack Pleno",
            "O Desenvolvedor Fullstack Pleno é um profissional autônomo e versátil, capaz de projetar, desenvolver e manter sistemas mais complexos, do front-end ao back-end. Nesse nível, você lidera funcionalidades de média e alta complexidade, toma decisões técnicas sobre arquitetura e frameworks, realiza code reviews e orienta desenvolvedores juniores. Também gerencia o ciclo completo do software, garantindo qualidade, desempenho e escalabilidade, com domínio sólido das tecnologias, familiaridade com serviços de cloud e práticas de CI/CD.",
            (builder) =>
                builder
                    .addSkillToList([
                        "Capacidade Analítica",
                        "Comunicação",
                        "Trabalho em Equipe",
                        "Proficiencia Técnica",
                        "Experiência Extensiva",
                    ])
                    .addSkillToTags((builder) =>
                        builder
                            .add("Jest")
                            .add("Cypress")
                            .add("Docker")
                            .add("Pipeline CI/CD")
                            .add("Microserviços")
                            .add("DevOps")
                    )
        )

        .addCarrerStep(
            "Desenvolvedor Fullstack Sênior",
            "O Desenvolvedor Fullstack Sênior é um líder técnico responsável por definir a direção tecnológica dos projetos mais complexos. Sua atuação vai além do código, envolvendo decisões de arquitetura, otimização de performance e garantia de robustez e escalabilidade a longo prazo. Nesse nível, você resolve os desafios técnicos mais difíceis, introduz novas tecnologias, define padrões de engenharia e colabora com stakeholders para transformar necessidades de negócio em soluções viáveis. Além do domínio completo do fullstack, o Sênior também atua como mentor, disseminando conhecimento e alinhando as práticas de desenvolvimento aos objetivos estratégicos da empresa.",
            (builder) =>
                builder
                    .addSkillToList([
                        "Comunicação Clara",
                        "Gestão de Tempo",
                        "Liderança",
                        "Orientação a Resultados",
                    ])
                    .addSkillToTags((builder) =>
                        builder
                            .add("Inglês")
                            .add("Integração de APIs")
                            .add("SQL")
                            .add("Segurança de Endpoint")
                            .add("Escalabilidade")
                            .add("Perfomance")
                            .add("UI/UX Design")
                            .add("CI/CD")
                            .add("Automação de Testes")
                    )
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
