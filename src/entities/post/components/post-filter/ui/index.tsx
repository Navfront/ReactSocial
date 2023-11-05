import { FC } from "react";

import { withSelectDropdown } from "@src/shared/ui/dropdown";
import { IComponentItem } from "@src/shared/ui/dropdown/lib/types";
import { IconUp } from "@src/shared/ui/icons";
import cn from "classnames";

interface PostFilterProps {
  items: IComponentItem[];
  defaultChoice: string;
}

export const PostFilter: FC<PostFilterProps> = ({ items, defaultChoice }) => {
  const SelectDropdown = withSelectDropdown(items, defaultChoice);

  return (
    <SelectDropdown
      mainBtnClassName="post-filter__btn"
      contentWrapperClassName="options__wrapper post-filter__wrapper"
      itemClassName="post-filter__item options__item"
      listClassName="list-reset options__content"
      closeBtnClassName="options__close interactive-1 interactive-1--warn"
      directionIconElement={
        <IconUp className={cn("options__icon-direction")} />
      }
    />
  );
};
