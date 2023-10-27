import { ReactComponentElement } from "react";

export type GenericListItemType = "div" | "li";

export type RenderComponentType = <I extends IGenericListItem>(
  item: I
) => ReactComponentElement<GenericListItemType, { item: I }>;

export interface IGenericListItem {
  As?: string;
  id?: string;
  renderComponent?: RenderComponentType;
  onClick?: () => void;
  text?: string;
}

export interface IGenericListOptions {
  className?: string[];
  type?: "ul" | "ol" | "dl";
  itemType?: GenericListItemType;
}

export interface IGenericListProps {
  items: IGenericListItem[];
  opts?: IGenericListOptions;
  className?: string;
}
