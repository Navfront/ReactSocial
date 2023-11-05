import { FC, ReactElement, RefObject } from "react";

import cn from "classnames";

import {
  DispatchTypes,
  DropdownDispatch,
  isStringArray,
  StateType,
} from "./../lib/types/index";
import styles from "./style.module.scss";
import {
  ANIMATION_DELAY,
  DEFAULT_DROPDOWN_BTN_ACTIVE_CLASS,
  DEFAULT_DROPDOWN_BTN_CLASS,
} from "../lib/config";
import { IComponentItem } from "../lib/types";

interface DropdownSelectBtnProps {
  items: string[] | IComponentItem[];
  mainBtnClassName?: string;
  directionIcon?: ReactElement;
  iconElement?: ReactElement;
  currentSelect: string;
  dispatch: DropdownDispatch;
  state: StateType;
  btnRef: RefObject<HTMLButtonElement>;
}

export const DropdownSelectBtn: FC<DropdownSelectBtnProps> = ({
  mainBtnClassName,
  items,
  state,
  dispatch,
  iconElement,
  directionIcon = "",
  btnRef,
}) => {
  return (
    <button
      ref={btnRef}
      onClick={() => {
        setTimeout(() => {
          dispatch({ type: DispatchTypes.TOGGLE });
        }, ANIMATION_DELAY);
      }}
      className={cn(mainBtnClassName, styles[DEFAULT_DROPDOWN_BTN_CLASS], {
        [styles[DEFAULT_DROPDOWN_BTN_ACTIVE_CLASS]]: state.isOpen,
      })}
      type="button"
    >
      {iconElement || ""}
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
