import { IComponentItem } from "@src/shared/ui/dropdown/lib/types";

export interface ILinkItem extends Omit<IComponentItem, "icon" | "text"> {}
