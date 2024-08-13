import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">도시</NavLink>
        </li>
        <li>
          <NavLink to="countries">국가</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AppNav;
