import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

import styles from "../styles/home.module.scss";
import commonStyles from "../styles/common.module.scss";
import introOverlayStyles from "../styles/intro-overlay.module.scss";

import Header from "../components/header";
import IntroOverlay from "../components/intro-overlay";
import { projectsList } from "../utils/project-data";
import ProjectListing from "../components/project-listing";
import AlexanderGrattan from "../images/Jeans.jpg";

export default function Homepage() {
  return (
    <div className={styles.homeContainer}>
      <Suspense
        fallback={<div className={introOverlayStyles.introOverlay}></div>}
      >
        <IntroOverlay />
      </Suspense>
      <div id="afterAnimation">
        <Header logoLink="/" />
        <main>
          <section className={styles.hero}>
            <div className={styles.cta}>
              <h1 className={commonStyles.hiddenText}>Iyindamope Ariori</h1>
              <h2 id="title" className={styles.title}>
                I create
                <span className={commonStyles.playful}> WONDER. </span>
              </h2>
              <div id="portraitContainer" className={styles.portraitContainer}>
                <Image
                  src={AlexanderGrattan}
                  alt="Portrait of Iyindamope Ariori"
                  className={styles.portrait}
                  priority
                />
              </div>
            </div>
            <p id="jobTitle" className={styles.jobTitle}>
              Iyindamope Ariori / Creator
            </p>
          </section>
          <section className={styles.projectContainer} id="projects">
            <div className={styles.projectTitleContainer}>
              <h2>My Projects</h2>
            </div>
            <div className={styles.projectListingsContainer}>
              {projectsList.map((project) => (
                <ProjectListing key={project.slug} project={project} />
              ))}
            </div>
          </section>
        </main>
        <footer>
          <h2>Connect with Me</h2>
          <ul id="footerLinks" className={styles.footerLinks}>
            <li>
              <a
                href="https://www.instagram.com/iameddywonder/"
                target="_blank"
                rel="noopener noreferrer"
                title="Go to damope's Instagram"
              >
                Instagram
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@iameddywonder" // Replace with your YouTube channel link
                target="_blank"
                rel="noopener noreferrer"
                title="Visit damope's YouTube Channel"
              >
                YouTube
                <FaYoutube />
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/artist/1kRpL6DJwFOCCwuMPMRPs0" 
                target="_blank"
                rel="noopener noreferrer"
                title="Visit damope's Spotify"
              >
                Spotify
                <FaSpotify />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
