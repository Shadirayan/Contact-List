import React from "react";
import Header from "./components/header/header";
import "./app.css";
import CardContainer from "./containers/cardContainer";
const App = () => {
  return (
    <>
      <Header />
      <CardContainer />
    </>
  );
};

export default App;
