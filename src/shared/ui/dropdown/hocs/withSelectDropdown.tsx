/* eslint-disable react/display-name */

import { ReactElement, useState } from "react";

import cn from "classnames";

import { IconUp } from "../../icons";
import { useSelectDropDown } from "../lib/hooks/use-select-dropdown";
import { IComponentItem, isStringArray } from "../lib/types";
import { Dropdown } from "../ui/dropdown";

interface IExtraProps {
  className?: string;
  mainBtnClassName?: string;
  btnClassName?: string;
  itemClassName?: string;
  listClassName?: string;
  contentWrapperClassName?: string;
  iconElement?: ReactElement;
}

export const withSelectDropdown = (
  items: string[] | IComponentItem[] = ["Первое"]
) => {
  const [isOpen, setIsOpen] = useState(false);

  const { currentOption, mapper, stringsFilter, componentsFilter } =
    useSelectDropDown(items, isOpen, setIsOpen);

  return ({
    className = "",
    mainBtnClassName = "",
    btnClassName = "",
    itemClassName = "",
    listClassName = "",
    contentWrapperClassName = "",
    iconElement,
  }: IExtraProps) => (
    <Dropdown
      className={className}
      contentClassName={"options__wrapper " + contentWrapperClassName}
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      button={
        <button
          className={cn(mainBtnClassName, {
            "post-filter__btn--active": isOpen,
          })}
          type="button"
        >
          {iconElement}
          {currentOption}
          <IconUp
            className={cn("options__icon-direction", {
              "options__icon-direction--rotate": isOpen,
            })}
          />
        </button>
      }
    >
      <ul className={cn("list-reset", "options__content", listClassName)}>
        {isStringArray(items)
          ? items
              .filter(stringsFilter)
              .map(mapper({ btnClassName, itemClassName }))
          : items
              .filter(componentsFilter)
              .map(mapper({ btnClassName, itemClassName }))}
        <li className={cn("options__item", itemClassName)}>
          <button
            className="options__close interactive-1 interactive-1--warn"
            onClick={() => {
              console.log("closeeee");
              setIsOpen(false);
            }}
          >
            Закрыть
          </button>
        </li>
      </ul>
    </Dropdown>
  );
};
