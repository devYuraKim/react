import styles from "./CountryList.module.css";
import Message from "./Message";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (cities.length === 0)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((newArr, city) => {
    if (!newArr.map((elNewArray) => elNewArray.country).includes(city.country))
      return [...newArr, { country: city.country, emoji: city.emoji }];
    else return newArr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
