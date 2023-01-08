import Navbar from "@components/Navbar/Navbar";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
    </header>
  );
};

export default Header;
