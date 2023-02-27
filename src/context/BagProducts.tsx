import { createContext, Dispatch, ReactNode, useContext, useState, SetStateAction } from "react";
import { ListsType } from "../components/ProductsCard";

export const BagNumber = createContext<{
  bagNumber: number;
  setBagNumber: Dispatch<SetStateAction<number>>;
  detail: ListsType[] | never[];
  setDetail: Dispatch<SetStateAction<ListsType[] | never[]>>;
  bag: ListsType[] | never[];
  setBag: Dispatch<SetStateAction<ListsType[] | never[]>>;
} | null>(null);

export const NumberBag = ({ children }: { children?: ReactNode }) => {
  const [bagNumber, setBagNumber] = useState(0);
  const [detail, setDetail] = useState<ListsType[] | never[]>([]);
  const [bag, setBag] = useState<ListsType[] | never[]>([]);

  return <BagNumber.Provider value={{ bagNumber, setBagNumber, detail, setDetail, bag, setBag }}>{children}</BagNumber.Provider>;
};

export const useNumber = () => useContext(BagNumber);
