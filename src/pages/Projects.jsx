import ProjectCard from "../component/ProjectCard";

const projects = [
    {
        id: 1,
        title: "Website Portofolio ",
        desc: "Aplikasi SPA yang menampilkan profil, daftar proyek, dan formulit kontak.",
        image: `${import.meta.env.BASE_URL}/image/photo.jpg`,
        tech:["React", "React-Router", "CSS"],
        githubUrl: "https://github.com/",
        demoUrl:"https://Portofolio-digital/",
    },
    {
        id: 2,
        title: "Aplikasi Catatan Harian",
        desc: "aplikasi catatan pribadi",
        image: `${import.meta.env.BASE_URL}/image/photo.png`,
        tech: ["React", "UseState", "Localstorage"],
        githubUrl: "https://github.com/username/catatn.app",
        demoUrl: "https:catatan-harian",
    },

];

function Projects() {
    return (
        <section className="projects">
            <h2>Projek Saya</h2>
            <div className ="project-grid">
                {projects.map((p) => (
                    <ProjectCard key={p.id} {...p} />
                ))}
            </div>
        </section>
    );
}

export default Projects;