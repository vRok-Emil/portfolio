"use client";
import { useState, useEffect } from 'react';
import styles from './Projects.module.css';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  language: string | null;
}

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
}
//följde någon video för denna.
export default function Projects(){
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const repoUrls = [
    "https://api.github.com/repos/vRok-Emil/jobchaserEmilR",
    "https://api.github.com/repos/vRok-Emil/u02-individuell-uppgift-egen-portfoliosida-vRok-Emil",
    "https://api.github.com/repos/vRok-Emil/Nextract"
  ];

  useEffect(() => {
    async function fetchProjects(){
      try {
        const fetchedRepos = await Promise.all(
          repoUrls.map(url => fetch(url).then(res => res.json()))
        );
        const formattedProjects: Project[] = fetchedRepos.map((repo: GitHubRepo) => ({
          id: repo.id,
          title: repo.name, 
          description: repo.description || 'Ingen beskrivning tillgänglig',
          tech: repo.topics.filter(topic => topic !== 'portfolio-project'),
          link: repo.html_url
        }));
        setProjects(formattedProjects);
      } catch (error) {
        console.error('Fel vid hämtning av projekt:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  if (loading) {
    return <div>Laddar projekt...</div>;
  }

  return (
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
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visa på GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}