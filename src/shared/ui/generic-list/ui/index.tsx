import { FC } from "react";

import { DEFAULT_LIST_TYPE } from "../config";
import { useGenericMap } from "../lib/hooks/use-mapper";
import { IGenericListOptions, IGenericListProps } from "../types";

export const GenericList: FC<IGenericListProps> = ({
  items,
  opts = {} as IGenericListOptions,
  className,
}) => {
  const { type = DEFAULT_LIST_TYPE } = opts;

  const map = useGenericMap(items);

  const List = type;
  return <List className={className}>{map}</List>;
};
