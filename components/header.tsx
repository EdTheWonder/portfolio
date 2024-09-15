import Link from "next/link";
import { FaInstagram, FaTwitter } from "react-icons/fa"; // Removed FaYoutube import

import styles from "../styles/header.module.scss";
import commonStyles from "../styles/common.module.scss";

type HeaderProps = {
  logoLink: string;
};

export default function Header({ logoLink }: HeaderProps) {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.spaceBetween}>
          <Link href={logoLink} className={styles.logo} rel="home">
            <span aria-hidden="true">damope</span>
            <span className={commonStyles.hiddenText}>
              Iyindamope Ariori - Homepage
            </span>
          </Link>
          <ul className={styles.navList}>
            <li>
              <a
                href="https://www.instagram.com/iameddywonder/"
                title="Go to damope's Instagram"
              >
                Instagram
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/iameddywonder"
                title="Connect with damope on Twitter"
              >
                Twitter
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
