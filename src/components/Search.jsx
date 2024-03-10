import { useState, useEffect } from "react";
import { MagnifyingGlass } from "phosphor-react";

import axios from "axios";

import { SelectCountry } from "./SelectCountry";
import styles from "./Search.module.css";
import { Download } from "./Download";



export function Search() {
  const [countryName, setCountryName] = useState("brasil");
  const [country, setCountry] = useState({});
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    if (countryName) {
      searchCountry();
    }
  }, []);

    /*consulta de api*/

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

        const newCountry = {
          name: data.name.common,
          flag: data.flags.svg,
          population: data.population,
          capital: data.capital[0],
          languages: languages.join(", "),
          currencies: currencies.join(", "),
        };

        setCountry(newCountry);

        // Armazenamento no localStorage
        const updatedHistory = [...searchHistory, newCountry];
        setSearchHistory(updatedHistory);
        localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
      })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar o país. Por favor, tente novamente mais tarde.");
        console.log(error);
      });
  };

  /* Função para download do histórico em CSV */
  const downloadCSV = () => {
    const csvHeader = "País,Bandeira,População,Capital,Idiomas,Moedas\n";

    /*Conteúdo CSV*/
    const csvContent = searchHistory
      .map(
        (country) =>
          `"${country.name}","${country.flag}","${country.population}","${country.capital}","${country.languages}","${country.currencies}"`
      )
      .join("\n");

     /*Combinação do cabeçalho e do conteúdo*/
    const csvData =
      "data:text/csv;charset=UTF-8," +
      encodeURIComponent(csvHeader + csvContent);

    /* link para download*/
    const link = document.createElement("a");
    link.setAttribute("href", csvData);
    link.setAttribute("download", "search_history.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      <Download onDownloadClick={downloadCSV} />
    </div>
  );
}
