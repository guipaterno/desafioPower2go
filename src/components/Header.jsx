import styles from "./Header.module.css";

export function Header() {
  return (
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
  );
}
