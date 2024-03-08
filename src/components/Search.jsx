import styles from "./Search.module.css"
import { MagnifyingGlass } from "phosphor-react"

export function Search() {
  return (
    <div className={styles.form}>
      <h3>BUSQUE O PAÍS DESEJADO</h3>
      
        <div className={styles.containerInput}>

        <input
          className={styles.countryInput}
          type="text"
          placeholder="Digite o nome do país"
          />
          <MagnifyingGlass size={18} className={styles.icon}/>
          </div>
      
    </div>
  );
}
