import React from "react";
import { Router } from "./routes/Routes"
import { GlobalStyles } from "./GlobalStyle";
import {GlobalContext} from "./global/GlobalContext"
import Footer from "./components/Footer/Footer";
import AppProvider from "./CapituraPokemon/Provider";


function App() {
  return (
    <>
    <AppProvider>
      <GlobalStyles />
   
        <Router/>
        <Footer/>
        </AppProvider>
      </>
  );
}
export default App;