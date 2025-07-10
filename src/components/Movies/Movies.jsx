import React from "react";
import styles from "./Movies.module.scss";
import Movie from "../Movie/Movie";

export default function Movies({ listMovies = [] }) {
  return (
    <>
      {listMovies.length > 0 ? (
        <div className={styles.list}>
          {listMovies.map((el) => {
            return (
              <Movie
                key={el.imdbID}
                Title={el.Title}
                Year={el.Year}
                Type={el.Type}
                Poster={el.Poster}
              />
            );
          })}
        </div>
      ) : (
        <h1>Error</h1>
      )}
    </>
  );
}

