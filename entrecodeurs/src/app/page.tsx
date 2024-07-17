import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      
      <div className={styles.center}>
        <Image
          className={styles.image}
          src="/assets/njef.jpeg"
          alt="Next.js Logo"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={styles.column}>
        <h1 className={styles.h1}>
         A VOS AGENDAS !
        </h1>
        <div className={styles.card}>
            <p className={styles.p}>Chers Amis,</p>
            <p className={styles.p}>Le prochain crongrès NJEF se déroulera les : 31 janvier - 1er et 2 février 2025</p>
            <br />
            <p className={styles.p}>Le foetus, c&apos;est le CFEF</p>
            <br />
            <p className={styles.p}>
              A bientôt,
              Le bureau du CFEF
              Les organisateurs
            </p>
        </div>

            <a href="https://cfef.org/NJEF.php"
            target="_blank"
            className={styles.a}
            >
              Accès aux vidéos des éditions précédentes
            </a>
      </div>
    </main>
  );
}
