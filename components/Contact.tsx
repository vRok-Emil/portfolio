import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="kontakt" className={styles.contact}>
      <div className={styles.container}>
        <h2>Kontakta mig</h2>
        <p className={styles.intro}>
          Är du intresserad av att samarbeta eller har du några frågor? Hör av dig!
        </p>
        
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <h3>📧 E-post</h3>
            <a href="mailto:emil.ronnqvist@example.com">emil.ronnqvist@chasacademy.se</a>
          </div>
          
          <div className={styles.contactItem}>
            <h3>💼 LinkedIn</h3>
            <a href="https://www.linkedin.com/in/emil-r%C3%B6nnqvist-4a2721266/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/emil-rönnqvist-4a2721266
            </a>
          </div>
          
          <div className={styles.contactItem}>
            <h3>💻 GitHub</h3>
            <a href="https://github.com/vRok-Emil" target="_blank" rel="noopener noreferrer">
              github.com/vRok-Emil
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}