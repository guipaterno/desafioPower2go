import styles from "./SelectCountry.module.css";

export function SelectCountry() {
  return (
    <div className={styles.container}>
      <p>TITULO DO PAIS</p>
      <div className={styles.content}>
        <div className={styles.contentFlag}>
          <img src="https://flagcdn.com/w320/br.png" alt="" />
        </div>
        <div className={styles.contentInfo}>
          <span>
            População: <p>10000</p>
          </span>
          <br />
          <span>Capital: <p>Brasilia</p></span>
          <br />
          <span>Idioma: <p>Português</p></span>
          <br />
          <span>Moeda: <p>Real</p></span>
          <br />
        </div>
      </div>
    </div>
  );
}