import { useContext } from "react";

import { AppCtx } from "../context";

export const useAppContext = () => {
  const token = useContext(AppCtx);

  return { token };
};
