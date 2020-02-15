import React, { useContext } from "react";
import { CountStateContext } from "../count-context/count-context";
export function CountDisplay(): JSX.Element {
  const count = useContext(CountStateContext);
  return <div>{count}</div>;
}
