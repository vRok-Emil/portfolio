import styles from './Projects.module.css';

interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
}

const projects: Project[] = [
{
id: 1,
title: 'E-handelsplattform',
description: 'En modern e-handelsplattform byggd med Next.js och TypeScript.',
tech: ['Next.js', 'TypeScript', 'CSS'],
},
{
id:2,
title: 'väderapp',
description: 'En responsiv väderapplikation med realtidsdata.',
tech: ['React', 'API', 'CSS']
},
{
id:3,
title: 'Portfolio Webbplats',
description: 'En personlig portfolio webbplats för att visa mina projekt och färdigheter.',
tech: ['Next.js', 'React', 'CSS']
},
{id:4,
title: 'Bloggplattform',
description: 'En bloggplattform med användarautentisering och innehållshantering.',
tech: ['Node.js', 'Express', 'MongoDB']
}
];

export default function Projects(){
    return(
     <section id="projekt" className={styles.projects}>
      <div className={styles.container}>
        <h2>Mina Projekt</h2>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.techStack}>
                {project.tech.map((tech, index) => (
                  <span key={index} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}