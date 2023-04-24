import React from "react";
import { Router } from "./routes/Routes";
import { GlobalStyles } from "./GlobalStyle";
import Footer from "./components/Footer/Footer";
import { GlobalProvider } from "./global/context/useContext";

function App() {
  return (
    <GlobalProvider>
      <GlobalStyles />
      <Router />
      <Footer />
    </GlobalProvider>
  );
}
export default App;
