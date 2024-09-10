import styles from "./CityItem.module.css";
import { useNavigate } from "react-router-dom";

import City from "./City";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const navigate = useNavigate();

  return (
    <li className={styles.cityItem} onClick={() => navigate(`${city.id}`)}>
      <span className={styles.emoji}>{city.emoji}</span>
      <h3 className={styles.name}>{city.cityName}</h3>
      <time className={styles.date}> ({formatDate(city.date)}) </time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

export default CityItem;
