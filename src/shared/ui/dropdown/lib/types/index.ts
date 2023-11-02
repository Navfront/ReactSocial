import { Dispatch, ReactElement } from "react";

export interface IComponentItem {
  render: (onClick: () => void) => ReactElement;
  text: string;
  icon?: ReactElement;
}

export const enum DispatchTypes {
  "OPEN",
  "CLOSE",
  "TOGGLE",
  "SET_CURRENT",
}

export type StateType = { isOpen: boolean; currentOption: string };
export type ActionDispatchTypes = keyof typeof DispatchTypes;
export type ActionType = { type: number; payload?: string };

export type DropdownDispatch = Dispatch<ActionType>;

export type FilterType<T extends string | IComponentItem> = (
  item: T,
  index: number,
  array: T[]
) => boolean;

interface MapperOpts {
  btnClassName: string;
  itemClassName: string;
}

export type MapperType = (
  opts: MapperOpts
) => (item: string | IComponentItem, idx: number) => ReactElement;

// Type Guards

export const isString = (it: string | IComponentItem): it is string =>
  typeof it === "string";

export const isStringArray = (
  arr: string[] | IComponentItem[]
): arr is string[] => typeof arr[0] === "string";
