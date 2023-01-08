import { Avocado, Basket } from "@components/SVGIcons";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__nav}>
        <Link href="/">
          <li
            className={
              router.pathname == "/"
                ? styles.navbar__nav__active
                : styles.navbar__nav__item
            }
          >
            <Avocado />
            <span>Avo Store</span>
          </li>
        </Link>
        <Link href="/cart">
          <li
            className={
              router.pathname == "/cart"
                ? styles.navbar__nav__active
                : styles.navbar__nav__item
            }
          >
            <Basket />
            <span>Canasta</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
