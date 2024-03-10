import React from "react";
import styles from "./Download.module.css";

export const Download = () => {
  return (
    <div className={styles.content}>
      <span>Clique abaixo para obter o histórico de pesquisa</span>
      <button>Download</button>
    </div>
  );
};
