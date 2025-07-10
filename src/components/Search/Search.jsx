import React, { useState } from "react";
import styles from "./Search.module.scss";

export default function Search({ handleSearch, searchMovie }) {
  const [search, setSearch] = useState("");

  const handleInput = (event) => {
    setSearch(event.target.value);
  };
  // обработчик ввода текста в input и сохранения его в state (в нашем случае в search)
  // handleInput - обработчик прицепляется к input и вытаскивает из него значение,чтобы запистаь в state

  const handleKey = (e) => {
    if (e.key == "Enter") {
      handleSearch(search);
      setTimeout(() => {
        setSearch("");
      }, 1000);
    }
  };

  return (
    <div>
      <div className={`row ${styles.rowBlock}`}>
        <div className={`input-field ${styles.rowBox}`}>
          <input
            value={search}
            id="search"
            type="search"
            onChange={handleInput}
            onKeyDown={handleKey}
            // onKeyDown - запускает handleKey при нажатии на клавишу (в нашем случае на Enter)
            className={`validate ${styles.inputBox}`}
          />
          <label className="active" htmlFor="search">
            Search
          </label>
        </div>
        <button
          disabled={search.trim().length === 0}
          onClick={() => {
            handleSearch(search);
            setTimeout(() => {
              setSearch("");
            }, 1000);

            // disabled;
            // event.target.classList.add("btnDisabled");
          }}
          className={`btn waves-effect waves-light ${styles.inputBtn}`}
          type="submit"
          name="action"
        >
          Submit
          <i className="material-icons right">search</i>
        </button>
      </div>
    </div>
  );
}
