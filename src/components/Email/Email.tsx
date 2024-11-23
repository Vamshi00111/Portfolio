import styles from "./Email.module.css";
import Link from "next/link";

const Email: React.FC = () => {
  return (
    <div className={styles.email}>
      <Link className={styles.link} href="mailto:vamshikrishnaananthasetty@gmail.com">
          vamshikrishnaananthasetty@gmail.com
      </Link>
      <div className={styles.line} />
    </div>
  );
};

export default Email;
