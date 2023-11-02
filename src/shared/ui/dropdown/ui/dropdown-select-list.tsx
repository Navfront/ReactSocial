import { FC } from "react";

import { useSelectDropDown } from "../lib/hooks/use-select-dropdown";
import {
  DispatchTypes,
  DropdownDispatch,
  IComponentItem,
  isStringArray,
  StateType,
} from "../lib/types";

interface DropdownSelectListProps {
  items: string[] | IComponentItem[];
  btnClassName: string;
  itemClassName: string;
  listClassName: string;
  closeBtnClassName: string;
  closeBtnText: string;
  dispatch: DropdownDispatch;
  state: StateType;
}

export const DropdownSelectList: FC<DropdownSelectListProps> = ({
  items,
  btnClassName,
  itemClassName,
  listClassName,
  closeBtnClassName,
  closeBtnText,
  dispatch,
  state,
}) => {
  const { mapper, stringsFilter, componentsFilter } = useSelectDropDown(
    dispatch,
    state
  );

  return (
    <ul className={listClassName}>
      {isStringArray(items)
        ? items
            .filter(stringsFilter)
            .map(mapper({ btnClassName, itemClassName }))
        : items
            .filter(componentsFilter)
            .map(mapper({ btnClassName, itemClassName }))}
      <li className={itemClassName}>
        <button
          className={closeBtnClassName}
          onClick={() => {
            if (dispatch) dispatch({ type: DispatchTypes.CLOSE });
          }}
        >
          {closeBtnText}
        </button>
      </li>
    </ul>
  );
};
