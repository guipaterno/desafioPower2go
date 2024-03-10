import styles from "./SelectCountry.module.css";

export function SelectCountry({ name, flag, population, capital,languages,currencies}) {
  return (
    <div className={styles.container}>
      <p>{name}</p>
      <div className={styles.content}>
        <div className={styles.contentFlag}>
          <img src={flag} alt="" />
        </div>
        <div className={styles.contentInfo}>
          <span>
            População: <p>{population}</p>
          </span>
          <br />
          <span>
            Capital: <p>{capital}</p>
          </span>
          <br />
          <span>
            Idioma: <p>{languages}</p>
          </span>
          <br />
          <span>
            Moeda: <p>{currencies}</p>
          </span>
          <br />
        </div>
      </div>
    </div>
  );
}
