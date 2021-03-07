import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { projectsList } from "../components/data";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Project() {
  const router = useRouter();
  console.log(router);
  const { project } = router.query;
  let projectObject;

  projectObject = projectsList.find((el) => el.project === project);

  console.log(projectObject);

  useEffect(() => {
    document.body.style.overflowY = "scroll";
    gsap.registerPlugin(ScrollTrigger);
    let gsapProjects1 = gsap.utils.toArray(".gsap-1");
    console.log(gsapProjects1);
    let gsapProjects2 = gsap.utils.toArray(".gsap-2");

    gsapProjects1.forEach((image) => {
      gsap.from(image, {
        scrollTrigger: {
          trigger: image,
        },
        x: -200,
        opacity: 0,
        ease: "power3.out",
      });
    });
    gsapProjects2.forEach((image) => {
      gsap.from(image, {
        scrollTrigger: {
          trigger: image,
        },
        x: 200,
        opacity: 0,
        ease: "power3.out",
      });
    });
    if (!projectObject?.figma && !projectObject?.old) {
      gsap.from(".gsap-3", {
        scrollTrigger: {
          trigger: ".gsap-3",
        },
        y: 100,
        opacity: 0,
      });
    }
  }, [project]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="project-nav">
        <div className="space-between">
          <Link href="/">
            <div className="logo">AG</div>
          </Link>
          <ul className="nav-list">
            <li>
              <motion.a
                href="/Alexander_Grattan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Resume
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://github.com/GameDog9988"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://www.linkedin.com/in/alexander-grattan/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </motion.a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="project-main">
        <div className="text-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {projectObject?.name}
          </motion.h1>
          {projectObject?.description.split("\n").map((str, index) => (
            <p key={index}>{str}</p>
          ))}
        </div>
        {projectObject?.figma && projectObject?.old ? (
          <div className="comparison-container">
            <div className="image-compare gsap-1">
              <img
                src={projectObject.old}
                alt={`${projectObject.name} Old Site`}
              />
              <h2>Old Version</h2>
            </div>
            <div className="image-compare gsap-2">
              <img
                src={projectObject.figma}
                alt={`${projectObject.name} Design Mockup`}
              />
              <h2>Design Mockup</h2>
            </div>

            <div className="image-compare gsap-1">
              <img
                src={projectObject.image}
                alt={`${projectObject.name} Live Site`}
              />
              <h2>Live Version</h2>
            </div>
          </div>
        ) : projectObject?.figma ? (
          <div className="comparison-container">
            <div className="image-compare gsap-1">
              <motion.img
                src={projectObject.figma}
                alt={`${projectObject.name} Design Mockup`}
              />
              <h2>Design Mockup</h2>
            </div>

            <div className="image-compare gsap-2">
              <motion.img
                src={projectObject.image}
                alt={`${projectObject.name} Live Site`}
              />
              <h2>Live Version</h2>
            </div>
          </div>
        ) : (
          <div className="comparison-container">
            <div className="image-compare gsap-3">
              <motion.img
                src={projectObject?.image}
                alt={projectObject?.name}
              />
            </div>
          </div>
        )}

        <nav className="page-navigation">
          {projectObject?.id > 1 ? (
            <Link href={projectsList[projectObject.id - 2].project}>
              <motion.button
                className="project-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon className="prev-arrow" icon={faChevronLeft} />
                Previous
              </motion.button>
            </Link>
          ) : (
            <button className="disabled-btn" disabled>
              <FontAwesomeIcon className="prev-arrow" icon={faChevronLeft} />
              Previous
            </button>
          )}
          {projectObject?.id < 5 ? (
            <Link href={projectsList[projectObject.id].project}>
              <motion.button
                className="project-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Next
                <FontAwesomeIcon className="next-arrow" icon={faChevronRight} />
              </motion.button>
            </Link>
          ) : (
            <button className="disabled-btn" disabled>
              Next
              <FontAwesomeIcon className="next-arrow" icon={faChevronRight} />
            </button>
          )}
          <Link href="/">
            <div className="project-back">
              <FontAwesomeIcon icon={faArrowLeft} /> Back Home
            </div>
          </Link>
        </nav>
      </main>
    </motion.div>
  );
}
