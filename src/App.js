import React from "react";
import { Router } from "./routes/Routes"
import { GlobalStyles } from "./GlobalStyle";
import {GlobalContext} from "./global/GlobalContext"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Header />
      <GlobalStyles />
        <Router/>
        <Footer/>
      </>
  );
}
export default App;