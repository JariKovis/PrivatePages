function Projects() {
  const projects = [
    {
      id: 1,
      icon: "🌐",
      title: "Full-Stack Web Platform",
      description: "Enterprise web application with React frontend and Node.js backend",
      technologies: ["React", "Node.js", "MongoDB", "Docker"]
    },
    {
      id: 2,
      icon: "📚",
      title: "Educational Dashboard",
      description: "Learning management system with real-time progress tracking",
      technologies: ["Vue.js", "Python", "PostgreSQL", "WebSockets"]
    },
    {
      id: 3,
      icon: "🔧",
      title: "Developer Tools Suite",
      description: "Productivity tools for web developers and DevOps engineers",
      technologies: ["Next.js", "TypeScript", "AWS", "GitHub Actions"]
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="projects-background"></div>
      <div className="container">
        <h2 className="section-title projects-title">Featured Projects</h2>
        <p className="projects-intro">
          A selection of projects showcasing full-stack development expertise
          and modern web technologies.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
