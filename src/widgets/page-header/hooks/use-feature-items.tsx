import { ILinkItem } from "@entities/navigation/page-navigation/types";
import { IComponentItem } from "@src/shared/ui/dropdown/lib/types";

import { HEADER_LINKS, SELECT_HEADER_ITEMS } from "../config";
type UseFeatureItemsType = () => {
  selects: IComponentItem[];
  links: ILinkItem[];
  defaultChoice: string;
};

export const useFeatureItems: UseFeatureItemsType = () => ({
  defaultChoice: SELECT_HEADER_ITEMS[0].text,
  links: HEADER_LINKS,
  selects: SELECT_HEADER_ITEMS,
});
