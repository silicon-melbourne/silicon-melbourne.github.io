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
          width={256}
          height={256}
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
        <p className={styles.shareText}>
          SHARE:{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/feed/?shareActive&text=I joined %23SiliconMelbourne. A community by and for those working in %23Technology in %23Melbourne and Victoria. Join me and many others in creating a vibrant, connected, and resilient local technology community: https://silicon.melbourne/"
          >
            LINKEDIN
          </a>
          {" • "}
          <a
            target="_blank"
            href="https://x.com/intent/post?url=https%3A%2F%2Fsilicon.melbourne%2F&text=I%20joined%20%23SiliconMelbourne.%20A%20community%20by%20and%20for%20those%20working%20in%20%23Technology%20in%20%23Melbourne%20and%20Victoria.%20Join%20me%20and%20many%20others%20in%20creating%20a%20vibrant%2C%20connected%2C%20and%20resilient%20local%20technology%20community&via="
          >
            X
          </a>
          {" • "}
          <a
            target="_blank"
            href="https://bsky.app/intent/compose?text=I%20joined%20%23SiliconMelbourne.%20A%20community%20by%20and%20for%20those%20working%20in%20%23Technology%20in%20%23Melbourne%20and%20Victoria.%20Join%20me%20and%20many%20others%20in%20creating%20a%20vibrant%2C%20connected%2C%20and%20resilient%20local%20technology%20community%3A%20https://silicon.melbourne/&via="
          >
            BLUESKY
          </a>
        </p>
        <p className={styles.footerText}>
          EST. 2025 • MELBOURNE •{" "}
          <a href="https://docs.silicon.melbourne/">DOCUMENTATION</a>
        </p>
      </div>
    </div>
  );
}
