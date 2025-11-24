import styles from './About.module.css';

export default function About(){
    return(
    <section id='om-mig' className={styles.about}>
       <div className={styles.container}>
        <h2>Om Mig</h2>
        <div className={styles.content}>
        <p>Jag är en passionerad webbutvecklare med erfarenhet av moderna webbteknologier som React, Next.js och TypeScript.</p>
        <p>Med ett öga för design och detaljer strävar jag efter att skapa användarvänliga och visuellt tilltalande webbupplevelser.</p>
        </div>
        </div> 

        <div className={styles.skills}>
            <h3>Tekniker som jag använder</h3>
            <div className={styles.skillGrid}>
                <div className={styles.skill}>React</div>
                <div className={styles.skill}>Node.js</div>
                <div className={styles.skill}>JavaScript</div>
                <div className={styles.skill}>TypeScript</div>
                <div className={styles.skill}>CSS</div>
                <div className={styles.skill}>GitHub</div>
                <div className={styles.skill}>Next.js</div>
                <div className={styles.skill}>Vite</div>
                <div className={styles.skill}>MongoDB</div>
                <div className={styles.skill}>Prisma</div>
            </div>
        </div>
    </section>
    );
}