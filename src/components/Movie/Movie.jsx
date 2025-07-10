import React from "react";
import styles from "./Movie.module.scss";

export default function Movie({ Title, Year, Type, Poster }) {
  return (
    <div className="card">
      <div className="card-image">
        <img className={styles.cardImageImg} src={Poster} />
      </div>
      <div className={`card-content ${styles.cardContent}`}>
        <span className="card-title">{Title}</span>
        <p>
          {Year}, {Type}
        </p>
      </div>
    </div>
  );
}
