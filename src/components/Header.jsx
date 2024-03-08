import { CardHistory } from "./CardHistory";
import styles from "./Header.module.css";
import { SelectCountry } from "./SelectCountry.";

export function Header() {
  return (
    <div>

    <header className={styles.header}>
      <ul>
        <li>
          <a href="#inicio">Início</a>
        </li>
        <li>
          <a href="#sobre">Histórico</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </header>
    <SelectCountry/>
    <CardHistory/>
    </div>

  );
}
