/* eslint-disable react/display-name */
import { useState } from "react";

import { useFilters } from "./use-filters";
import { isStringArray, IComponentItem, MapperType, isString } from "../types";

export const useSelectDropDown = (
  items: string[] | IComponentItem[],
  isOpen: boolean,
  setIsOpen: (value: boolean) => void
) => {
  const [currentOption, setCurrentOption] = useState<string>(
    isStringArray(items) ? items[0] : items[0].text
  );

  const { componentsFilter, stringsFilter } = useFilters(currentOption);

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
                setCurrentOption(item);
                setIsOpen(false);
              }}
            >
              {item}
            </button>
          ) : (
            item.render(() => setCurrentOption(item.text))
          )}
        </li>
      );
    };

  return {
    currentOption,
    isOpen,
    setIsOpen,
    componentsFilter,
    stringsFilter,
    mapper,
  };
};
