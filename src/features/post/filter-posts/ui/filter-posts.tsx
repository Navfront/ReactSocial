import { FC } from "react";

import { PostFilter } from "@entities/post/components/post-filter";
import { Button } from "@src/shared/ui/button";
import { IconComment, IconEye, IconPen, IconSave } from "@src/shared/ui/icons";

interface FilterPostsProps {}

export const FilterPosts: FC<FilterPostsProps> = () => {
  return (
    <div className="options post-filter">
      <PostFilter
        defaultChoice="Просмотренное"
        items={[
          {
            text: "Просмотренное",
            icon: <IconEye />,
            render: (onClick) => (
              <Button
                className="post-filter__option interactive-1"
                icon={<IconEye className="post-filter__icon" />}
                onClick={onClick}
              >
                Просмотренное
              </Button>
            ),
          },
          {
            text: "Сохранённое",
            icon: <IconSave />,
            render: (onClick) => (
              <Button
                className="post-filter__option interactive-1"
                icon={<IconSave className="post-filter__icon" size={10} />}
                onClick={onClick}
              >
                Сохранённое
              </Button>
            ),
          },
          {
            text: "Мои посты",
            icon: <IconPen />,
            render: (onClick) => (
              <Button
                className="post-filter__option interactive-1"
                icon={<IconPen className="post-filter__icon" />}
                onClick={onClick}
              >
                Мои посты
              </Button>
            ),
          },
          {
            text: "Прокомментированное",
            icon: <IconComment />,
            render: (onClick) => (
              <Button
                className="post-filter__option interactive-1"
                icon={<IconComment className="post-filter__icon" />}
                onClick={onClick}
              >
                Прокомментированное
              </Button>
            ),
          },
        ]}
      />
    </div>
  );
};
