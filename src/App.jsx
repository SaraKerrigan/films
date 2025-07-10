import { useState } from "react";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Header from "./layouts/Header/Header.jsx";
import Footer from "./layouts/Footer/Footer.jsx";
import Main from "./layouts/Main/Main.jsx";

function App() {


  
  return (
    <div className="content">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
