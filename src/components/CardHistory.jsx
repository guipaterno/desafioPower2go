import styles from "./CardHistory.module.css";

export function CardHistory() {
  return (
    <div>
        <h2>Histórico</h2>
      <div className={styles.container}>
        <p>TITULO DO PAIS</p>

        <div className={styles.contentFlag}>
          <img className={styles.imgHistory} src="https://flagcdn.com/w320/br.png" alt="" />
        </div>
      </div>
    </div>
  );
}
