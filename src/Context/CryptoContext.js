import React, { createContext, useContext, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [coinId, setCoinId] = useState("");
  const [inUSD, setInUSD] = useState(0);

  return (
    <Crypto.Provider value={{ coinId, inUSD, setCoinId, setInUSD }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
