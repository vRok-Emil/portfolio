import styles from './Contact.module.css';

export default function Contact(){
    return(
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <h2>Kontakta mig</h2>
                <p>Jag är alltid öppen för nya möjligheter och samarbeten. Tveka inte att höra av dig!</p>
            </div>
            <div className={styles.contactInfo}>
                <a href="mailto:emil.ronnqvist@chasacademy.se" className={styles.contactLink}>
                📧 Email
                </a>
                <a href="https://www.linkedin.com/in/emil-r%C3%B6nnqvist-4a2721266/" className={styles.contactLink}>
                🔗 LinkedIn
                </a>
                <a href="https://github.com/vRok-Emil" className={styles.contactLink}>
                🔗 GitHub
                </a>
            </div>
            </section>
    )
}