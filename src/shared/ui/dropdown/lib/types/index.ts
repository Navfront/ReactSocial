import { ReactElement } from "react";

export interface IComponentItem {
  render: (onClick: () => void) => ReactElement;
  text: string;
}

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
