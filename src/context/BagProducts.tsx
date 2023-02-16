import { createContext, useContext, useState } from "react";

export const BagNumber = createContext();

export const NumberBag = ({ children }) => {
  const [bagNumber, setBagNumber] = useState(0);
  const [detail, setDetail] = useState([]);

  return <BagNumber.Provider value={{ bagNumber, setBagNumber, detail, setDetail }}>{children}</BagNumber.Provider>;
};

export const useNumber = () => useContext(BagNumber);
