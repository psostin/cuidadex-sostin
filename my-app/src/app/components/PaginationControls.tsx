
import React from "react";
import styles from "./PaginationControls.module.css";
import { PaginationControlsProps } from "../types/PaginationControlsProps";

const PaginationControls: React.FC<PaginationControlsProps> = ({ page, handlePreviousPage, handleNextPage }) => (
    <div className={styles.paginationContainer}>
      <button
        onClick={handlePreviousPage}
        disabled={page === 0}
        className={styles.button}
      >
        Previous Page
      </button>
      <span className={styles.pageInfo}>Page {page + 1}</span>
      <button onClick={handleNextPage} className={styles.button}>
        Next Page
      </button>
    </div>
  );
  
  export default PaginationControls;
