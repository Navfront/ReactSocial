import { FC } from "react";

import { DEFAULT_LIST_TYPE } from "../config";
import { useGenericMap } from "../lib/hooks/use-mapper";
import { IGenericListItem, IGenericListOptions } from "../types";

export interface IGenericListProps {
  items: IGenericListItem[];
  opts?: IGenericListOptions;
  className?: string;
}

export const GenericList: FC<IGenericListProps> = ({
  items,
  opts = {},
  className,
}) => {
  const { type = DEFAULT_LIST_TYPE } = opts;

  const map = useGenericMap(items);

  const List = type;
  return <List className={className}>{map}</List>;
};
