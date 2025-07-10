import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./Main.module.scss";
import Movies from "../../components/Movies/Movies";
import Search from "../../components/Search/Search";
import Loading from "../../components/Loading/Loading";
import Radio from "../../components/Radio/Radio";

export default function Main() {
  const [listMovies, setListMovies] = useState([]);
  const [status, setStatus] = useState(true);
  // status для отображения загрузки фильмов во время поискового запроса

  const [searchMovie, setSearchMovie] = useState("terminator");
  const [filter, setFilter] = useState("all");

  const url = `http://www.omdbapi.com/?apikey=a14f2ba8&s=${searchMovie}`;

  useEffect(() => {
    fetch(filter === "all" ? url : `${url}&type=${filter}`)
      .then((response) => response.json())
      .then((data) => {
        setListMovies(data.Search);

        setStatus(false);
        //  setStatus(false) - загрузки больше нет
      });
  }, [searchMovie, filter]);

  const handleSearch = (text) => {
    setSearchMovie(text);
    setStatus(true);
    // setStatus(true) - информирование пользователя о процессе загрузки данных
  };

  const handleFilter = (type) => {
    setFilter(type);
    setStatus(true);
  };

  return (
    <main className={status ? `${styles.main} ${styles.loading}` : styles.main}>
      <Search handleSearch={handleSearch} searchMovie={searchMovie} />
      <Radio searchMovie={searchMovie} handleFilter={handleFilter} />
      {status ? <Loading /> : <Movies listMovies={listMovies} />}
    </main>
  );
}

