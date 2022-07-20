import React from "react";
import { Router } from "./routes/Routes"
import { GlobalStyles } from "./GlobalStyle";


function App() {
  return (
    <>
      <GlobalStyles />
        <Router/>
      </>
  );
}
export default App;