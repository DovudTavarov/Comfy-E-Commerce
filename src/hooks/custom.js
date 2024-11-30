import { createContext, useContext } from "react";

export const MyContext = createContext(null);

export const useMyCustomContextApi = () => useContext(MyContext);
