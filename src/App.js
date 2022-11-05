import React from "react";
import { Router } from "./routes/Routes"
import { GlobalStyles } from "./styles/GlobalStyle.jsx";
import {GlobalProvider} from "../src/global/context/useContext.jsx"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalProvider>
        <GlobalStyles/>
        <Router/>
        <Footer/>   
      </GlobalProvider>
    </>
  );
}
export default App;