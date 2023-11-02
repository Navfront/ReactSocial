import { FC, ReactElement } from "react";

import cn from "classnames";

import {
  DispatchTypes,
  DropdownDispatch,
  isStringArray,
  StateType,
} from "./../lib/types/index";
import styles from "./style.module.scss";
import {
  DEFAULT_DROPDOWN_BTN_ACTIVE_CLASS,
  DEFAULT_DROPDOWN_BTN_CLASS,
} from "../lib/config";
import { IComponentItem } from "../lib/types";

interface DropdownSelectBtnProps {
  items: string[] | IComponentItem[];
  mainBtnClassName?: string;
  directionIcon?: ReactElement;
  currentSelect: string;
  state: StateType;
  dispatch: DropdownDispatch;
}

export const DropdownSelectBtn: FC<DropdownSelectBtnProps> = ({
  mainBtnClassName,
  items,
  state,
  dispatch,
  directionIcon = "",
}) => {
  return (
    <button
      onClick={() => {
        dispatch({ type: DispatchTypes.TOGGLE });
      }}
      className={cn(mainBtnClassName, styles[DEFAULT_DROPDOWN_BTN_CLASS], {
        [styles[DEFAULT_DROPDOWN_BTN_ACTIVE_CLASS]]: state.isOpen,
      })}
      type="button"
    >
      {isStringArray(items) || !state.currentOption
        ? ""
        : items.find((it) => it.text === state.currentOption)!.icon}
      {isStringArray(items)
        ? state.currentOption || items[0]
        : state.currentOption || items[0].text}
      {directionIcon}
    </button>
  );
};
