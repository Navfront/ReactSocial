import { createContext, Dispatch, useReducer } from "react";

type StateType = { isOpen: boolean; currentOption: string };
type DropdownStatesType = "open" | "close" | "toggle" | "setCurrent";
type ActionType = { type: DropdownStatesType; payload?: string };
export type DropdownCtxType = {
  state: StateType;
  dispatch: Dispatch<ActionType>;
};

export type DropdownDispatch = Dispatch<ActionType>;

const initState: StateType = { currentOption: "", isOpen: false };

export const createDropdownCTX = () =>
  createContext<DropdownCtxType>({
    state: initState,
    dispatch() {},
  });

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "open":
      return { ...state, isOpen: true };
    case "close":
      return { ...state, isOpen: false };
    case "setCurrent":
      return { ...state, currentOption: action.payload || state.currentOption };
    default:
      return { ...state, isOpen: !state.isOpen };
  }
};

export const useDropdownContext = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return { state, dispatch };
};
