import styles from "./CountryList.module.css";

import CountryItem from "./CountryItem";

function CountryList({ cities }) {
  const countries = cities.reduce((newArray, city) => {
    if (
      !newArray.map((newElement) => newElement.country).includes(city.country)
    )
      return [...newArray, { country: city.country, emoji: city.emoji }];
    else return newArray;
  }, []);

  return (
    <div className={styles.countyList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </div>
  );
}

export default CountryList;
