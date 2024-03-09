import styles from "./Search.module.css";
import { MagnifyingGlass } from "phosphor-react";

import axios from "axios";
import { useState } from "react";
import { Header } from "./Header";
import { SelectCountry } from "./SelectCountry";

export function Search() {
  const [countryName, setCountryName] = useState("");

  const [country, setCountry] = useState({
    name: "",
    flag: "",
    population: "",
    capital: "",
    //language: "",
    currencies: "",
  });

  const searchCountry = () => {
    axios
      .get(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => {
        setCountry({
          name: response.data[0].name.common,
          flag: response.data[0].flags.svg,
          population: response.data[0].population,
          capital: response.data[0].capital[0],
          //language: response.data[0].languages,
          currencies: response.data[0].currencies.name,
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
        currencies={country.currencies}
      />
    </div>
  );
}
