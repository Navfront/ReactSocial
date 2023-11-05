/* eslint-disable react/display-name */

import { ANIMATION_DELAY } from "../config";
import {
  IComponentItem,
  MapperType,
  isString,
  FilterType,
  StateType,
  DropdownDispatch,
  DispatchTypes,
} from "../types";

export const useSelectDropDown = (
  dispatch: DropdownDispatch,
  state: StateType
) => {
  const stringsFilter: FilterType<string> = (item) => {
    return item !== state.currentOption;
  };

  const componentsFilter: FilterType<IComponentItem> = (item) => {
    return item.text !== state.currentOption;
  };

  const mapper: MapperType =
    ({ btnClassName, itemClassName }) =>
    (item) => {
      return (
        <li className={itemClassName} key={isString(item) ? item : item.text}>
          {isString(item) ? (
            <button
              className={btnClassName}
              type="button"
              onClick={() => {
                setTimeout(() => {
                  dispatch({ type: DispatchTypes.CLOSE });
                  dispatch({ type: DispatchTypes.SET_CURRENT, payload: item });
                }, ANIMATION_DELAY);
              }}
            >
              {item}
            </button>
          ) : (
            item.render(() => {
              setTimeout(() => {
                dispatch({ type: DispatchTypes.CLOSE });
                dispatch({
                  type: DispatchTypes.SET_CURRENT,
                  payload: item.text,
                });
              }, ANIMATION_DELAY);
            })
          )}
        </li>
      );
    };

  return {
    componentsFilter,
    stringsFilter,
    mapper,
  };
};
