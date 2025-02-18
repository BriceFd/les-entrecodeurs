import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      
      <div className={styles.logo}>
        <a href="/" className={styles.link}>NJEF</a>
      </div>

      <div className={styles.body}>
      <div className={styles.column}>
        <h1 className={styles.h1}>
          A VOS AGENDAS !
          <p className={styles.p}>Chers Amis,</p>
          <p className={styles.p}>Le prochain congrès NJEF se déroulera les : 31 janvier - 1er et 2 février 2025</p>
        </h1>
      </div>
      <div className={styles.center}>
        <div className={styles.card}>
            
            <br />
            <p className={styles.p}>Le foetus, c&apos;est le CFEF !</p>
            <br />
            <p className={styles.p}>A bientôt,</p>
            <p className={styles.p}>Le bureau du CFEF</p>
            <p className={styles.p}>Les organisateurs</p>
            <span>
            <a href="https://cfef.org/NJEF.php"
            target="_blank"
            className={styles.a}
            >
           
              Accès aux vidéos des éditions précédentes
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="m9 18 6-6-6-6"></path></svg>
              
            </a>
            </span>
        </div>

      
        <Image 
          src="/assets/njef.jpeg" 
          alt="NJEF" 
          width={1200}
          height={430}
          className={styles.image}></Image>
      </div>
      </div>
    </main>
  );
}
