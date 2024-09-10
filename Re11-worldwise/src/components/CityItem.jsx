import styles from "./CityItem.module.css";
import { Navigate } from "react-router-dom";

import City from "./City";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  function handleClick() {
    return <Navigate to={city.id} element={<City />} />;
  }
  return (
    <li className={styles.cityItem} onClick={handleClick}>
      <span className={styles.emoji}>{city.emoji}</span>
      <h3 className={styles.name}>{city.cityName}</h3>
      <time className={styles.date}> ({formatDate(city.date)}) </time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

export default CityItem;
