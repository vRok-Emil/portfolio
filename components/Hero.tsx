import styles from './Hero.module.css';

export default function hero(){
 return (
    <section className={styles.hero}>
        <div className={styles.content}>
            <h1>Hej, jag är Emil Rönnqvist</h1>
            <p className={styles.subtitle}>Webbutvecklare & Designer</p>
            <p className={styles.description}>
            Jag skapar moderna och responsiva webbapplikationer med fokus på användarvänlighet och design.
            </p>
        </div>
    </section>
 )   
}