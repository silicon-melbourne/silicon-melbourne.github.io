import Image from "next/image";
import logoImgSrc from "./logo.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image
          src={logoImgSrc}
          alt="Silicon Melbourne Logo"
          width={300}
          height={300}
          className={styles.logo}
        />
      </div>

      <h1 className={styles.title}>Silicon Melbourne</h1>

      <p className={styles.tagline}>Connecting Melbourne Technology</p>

      <div className={styles.linksContainer}>
        <a
          href="https://discord.gg/HcDbwZZgts"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.discordButton}
        >
          <span>Join Discord</span>
        </a>

        <div className={styles.socialGrid}>
          <a
            href="https://www.linkedin.com/company/silicon-melbourne"
            className={`${styles.socialButton} ${styles.linkedinButton}`}
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/silicon-melbourne"
            className={`${styles.socialButton} ${styles.githubButton}`}
          >
            GitHub
          </a>

          <a
            href="https://x.com/SiliconMelb"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialButton} ${styles.twitterButton}`}
          >
            X
          </a>

          <a
            href="https://bsky.app/profile/siliconmelb.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialButton} ${styles.blueskyButton}`}
          >
            Bluesky
          </a>
        </div>
      </div>

      <div className={styles.footer}>
        <p className={styles.footerText}>EST. 2025 • MELBOURNE • AUSTRALIA</p>
      </div>
    </div>
  );
}
