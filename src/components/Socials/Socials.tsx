import {
  AiFillInstagram,
  AiOutlineCodepen,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import styles from "./Socials.module.css";
import clsx from "clsx";

const enum ESocials {
    GITHUB_URL = "https://github.com/Vamshi00111/",
    INSTAGRAM_URL = "https://www.instagram.com/vamshi.ananthasetty/",
    LEETCODE_URL = "https://leetcode.com/u/Vamshi_Ananthasetty/",
    LINKEDIN_URL = "https://www.linkedin.com/in/vamshiananthasetty/",
}

export const SocialIcons: React.FC = () => {
  return (
    <>
      <IconLink
        className={styles.iconLink}
        href={ESocials.LINKEDIN_URL}
        target="_blank"
      >
        <FaLinkedin />
      </IconLink>
      <IconLink
        className={styles.iconLink}
        href={ESocials.GITHUB_URL}
        target="_blank"
      >
        <FaGithub />
      </IconLink>
      <IconLink
        className={styles.iconLink}
        href={ESocials.LEETCODE_URL}
        target="_blank"
      >
        <SiLeetcode />
      </IconLink>
      <IconLink
        className={styles.iconLink}
        href={ESocials.INSTAGRAM_URL}
        target="_blank"
      >
        <AiFillInstagram />
      </IconLink>
    </>
  );
};

type IconLinkProps = React.ComponentProps<typeof Link>;

export const IconLink = ({
  children,
  className,
  ...delegated
}: IconLinkProps) => {
  return (
    <Link className={clsx(styles.iconLink, className)} {...delegated}>
      {children}
    </Link>
  );
};

const Socials: React.FC = () => {
  return (
    <address className={styles.socials}>
      <SocialIcons />
      <div className={styles.line} />
    </address>
  );
};

export default Socials;
