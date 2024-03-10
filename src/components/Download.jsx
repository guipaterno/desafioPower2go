import React from "react";
import styles from "./Download.module.css";

/* componente para download da planilha em formato csv*/
export const Download = ({ onDownloadClick }) => {
  return (
    <div className={styles.content}>
      <span>Clique abaixo para obter o histórico de pesquisa</span>
      <button onClick={onDownloadClick}>Download</button>
    </div>
  );
};
