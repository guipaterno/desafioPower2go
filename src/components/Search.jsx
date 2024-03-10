import { useState, useEffect } from "react";
import { MagnifyingGlass } from "phosphor-react";

import axios from "axios";

import { SelectCountry } from "./SelectCountry";
import styles from "./Search.module.css";
import { Download } from "./Download";

export function Search() {
  const [countryName, setCountryName] = useState("Brasil");
  const [country, setCountry] = useState({
    name: "",
    flag: "",
    population: "",
    capital: "",
    currencies: [],
  });

  useEffect(() => {
    if (countryName) {
      searchCountry();
    }
  }, [countryName]);

  const searchCountry = () => {
    axios
      .get(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => {
        const data = response.data[0];
        const currencies = [];

        for (const currencyCode in data.currencies) {
          const currencyName = data.currencies[currencyCode].name;
          currencies.push(currencyName);
        }

        const languages = [];

        for (const languageCode in data.languages) {
          const languagesName = data.languages[languageCode];
          languages.push(languagesName);
        }

        setCountry({
          name: data.name.common,
          flag: data.flags.svg,
          population: data.population,
          capital: data.capital[0],
          languages: languages.join(", "),
          currencies: currencies.join(", "),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.form}>
      <h3>BUSQUE O PAÍS DESEJADO</h3>
      <div className={styles.containerInput}>
        <input
          className={styles.countryInput}
          type="text"
          onChange={(event) => {
            setCountryName(event.target.value);
          }}
          placeholder="Digite o nome do país"
        />
        <MagnifyingGlass
          onClick={searchCountry}
          size={18}
          className={styles.icon}
        />
      </div>
      <SelectCountry
        name={country.name}
        flag={country.flag}
        population={country.population}
        capital={country.capital}
        languages={country.languages}
        currencies={country.currencies}
      />
      <Download />
    </div>
  );
}
