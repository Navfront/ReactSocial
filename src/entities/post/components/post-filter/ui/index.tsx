import { FC } from "react";

import { withSelectDropdown } from "@src/shared/ui/dropdown";
import { IComponentItem } from "@src/shared/ui/dropdown/lib/types";
import { IconComment } from "@src/shared/ui/icons";

interface PostFilterProps {
  items: IComponentItem[];
}

export const PostFilter: FC<PostFilterProps> = ({ items }) => {
  const SelectDropdown = withSelectDropdown(items);

  return (
    <SelectDropdown
      mainBtnClassName="post-filter__btn"
      contentWrapperClassName="post-filter__wrapper"
      itemClassName="post-filter__item"
      iconElement={<IconComment />}
    />
  );
};
