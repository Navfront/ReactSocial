import { IComponentItem, FilterType } from "../types";

export const useFilters = (currentOption: string) => {
  const stringsFilter: FilterType<string> = (item) => item !== currentOption;
  const componentsFilter: FilterType<IComponentItem> = (item) =>
    item.text !== currentOption;

  return {
    stringsFilter,
    componentsFilter,
  };
};
