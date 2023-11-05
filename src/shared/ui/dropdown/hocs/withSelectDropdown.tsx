/* eslint-disable react/display-name */

import { ReactElement, useEffect, createRef } from "react";

import { setClassToRef } from "./../../../lib/react/set-class-to-ref";
import {
  DEFAULT_CLOSE_BTN_TEXT,
  DEFAULT_DROPDOWN_BTN_ACTIVE_CLASS,
} from "../lib/config";
import { useDropdownReducer } from "../lib/hooks/use-dropdown-reducer";
import { DispatchTypes, IComponentItem } from "../lib/types";
import { Dropdown } from "../ui/dropdown";
import { DropdownSelectBtn } from "../ui/dropdown-select-btn";
import { DropdownSelectList } from "../ui/dropdown-select-list";
import styles from "../ui/style.module.scss";

interface IExtraProps {
  className?: string;
  mainBtnClassName?: string;
  btnClassName?: string;
  itemClassName?: string;
  listClassName?: string;
  contentWrapperClassName?: string;
  closeBtnClassName?: string;
  closeBtnText?: string;
  iconElement?: ReactElement;
  directionIconElement?: ReactElement;
}

export const withSelectDropdown = (
  items: string[] | IComponentItem[] = [],
  defaultChoice: string
) => {
  const { state, dispatch } = useDropdownReducer();

  useEffect(() => {
    dispatch({ type: DispatchTypes.SET_CURRENT, payload: defaultChoice });
  }, []);

  const btnRef = createRef<HTMLButtonElement>();

  return ({
    className = "",
    mainBtnClassName = "",
    btnClassName = "",
    itemClassName = "",
    listClassName = "",
    contentWrapperClassName = "",
    closeBtnClassName = "",
    closeBtnText = DEFAULT_CLOSE_BTN_TEXT,
    iconElement,
    directionIconElement,
  }: IExtraProps) => (
    <Dropdown
      className={className}
      contentClassName={contentWrapperClassName}
      isOpen={state.isOpen}
      onOpen={() =>
        setClassToRef(btnRef, styles[DEFAULT_DROPDOWN_BTN_ACTIVE_CLASS], "add")
      }
      onClose={() =>
        setClassToRef(
          btnRef,
          styles[DEFAULT_DROPDOWN_BTN_ACTIVE_CLASS],
          "remove"
        )
      }
      button={
        <DropdownSelectBtn
          btnRef={btnRef}
          state={state}
          dispatch={dispatch}
          currentSelect={defaultChoice}
          mainBtnClassName={mainBtnClassName}
          items={items}
          iconElement={iconElement}
          directionIcon={directionIconElement}
        />
      }
    >
      <DropdownSelectList
        items={items}
        closeBtnText={closeBtnText}
        itemClassName={itemClassName}
        btnClassName={btnClassName}
        listClassName={listClassName}
        closeBtnClassName={closeBtnClassName}
        dispatch={dispatch}
        state={state}
      />
    </Dropdown>
  );
};
