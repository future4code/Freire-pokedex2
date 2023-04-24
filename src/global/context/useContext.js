import { createContext, useState } from "react";

export const GlobalContext = createContext({});

export function GlobalProvider({ children }) {
  const [bolsa, setBolsa] = useState([]);

  return (
    <GlobalContext.Provider value={{ bolsa, setBolsa }}>
      {children}
    </GlobalContext.Provider>
  );
}
