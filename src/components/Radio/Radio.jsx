import React, { useState } from "react";

import styles from "./Radio.module.scss";

export default function Radio({ searchMovie, handleFilter }) {
  const [switcher, setSwitcher] = useState("all");

  // setSwitcher - для динамического изменения (статья и search)

  return (
    <div className={styles.container}>
      <form action="#" className={styles.form}>
        <p>
          <label>
            <input
              name="group1"
              type="radio"
              value="all"
              checked={switcher === "all"}
              // checked={switcher === "all" ? true : false} это тоже самое, что  checked={switcher === "all"}
              onChange={(event) => {
                setSwitcher(event.target.value);
                handleFilter(event.target.value);
              //  state обновляется после рендера
              // смотри контролируемые инпуты (тему) - контроилуемые - потому что их значение завит от state, в следствии этого значение input контролируется реактом
              }}
            />
            <span>All</span>
          </label>

          {/* <input
            value={text}
            onChange={(event) => setText(event.target.value)}
          /> */}
        </p>
        <p>
          <label>
            <input
              name="group1"
              type="radio"
              value="movie"
              checked={switcher === "movie"}
              onChange={(event) => {
                setSwitcher(event.target.value);
                handleFilter(event.target.value);
              }}
            />
            <span>Movies only</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="group1"
              type="radio"
              value="series"
              checked={switcher === "series"}
              onChange={(event) => {
                setSwitcher(event.target.value);
                handleFilter(event.target.value);
              }}
            />
            <span>Series only</span>
          </label>
        </p>
      </form>
      <h1 className={styles.title}>
        Results for <span>{searchMovie}</span>
      </h1>
    </div>
  );
}
