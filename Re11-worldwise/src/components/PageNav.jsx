import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { useAuth } from "../../contexts/AuthContext";

function PageNav() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className={styles.nav}>
      <Logo />

      <ul className={styles.ul}>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          {!isAuthenticated && (
            <NavLink to="/login" className={styles.ctaLink}>
              Login
            </NavLink>
          )}
          {isAuthenticated && (
            <NavLink className={styles.logoutBtn} onClick={logout}>
              Logout
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
