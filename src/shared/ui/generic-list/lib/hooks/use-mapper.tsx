import { useId } from "react";

import { assoc } from "@src/shared/lib/js/assoc";

import { DEFAULT_ITEM_TYPE } from "../../config";
import { GenericListItemType, IGenericListItem } from "../../types";

const noop = () => {};

export const useGenericMap = (
  items: IGenericListItem[],
  itemType: GenericListItemType = DEFAULT_ITEM_TYPE
) =>
  items.map((item) => {
    const applyId = assoc("id", item.id || useId());
    const itemWithID = applyId(item);
    if (item.renderComponent) return item.renderComponent(itemWithID);
    const applyElementType = assoc("As", item.As || itemType);
    const {
      As: Item,
      id,
      onClick = noop,
      text = "",
    } = applyElementType(itemWithID);
    const As = Item as any;

    return (
      <As key={id} onClick={onClick}>
        {text}
      </As>
    );
  });
