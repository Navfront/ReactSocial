import { useReducer } from "react";

import { StateType, ActionType, DispatchTypes } from "../types";

const initState: StateType = { currentOption: "", isOpen: false };

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case DispatchTypes.OPEN:
      return { ...state, isOpen: true };
    case DispatchTypes.CLOSE:
      return { ...state, isOpen: false };
    case DispatchTypes.SET_CURRENT:
      return { ...state, currentOption: action.payload || state.currentOption };
    default:
      return { ...state, isOpen: !state.isOpen };
  }
};

export const useDropdownReducer = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return { state, dispatch };
};
