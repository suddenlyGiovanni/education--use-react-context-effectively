import  { createContext } from "react";

const CountStateContext = createContext<number>(0)
const CountDispatchContext = createContext(null)

export { CountStateContext, CountDispatchContext };
