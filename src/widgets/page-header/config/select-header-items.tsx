import {
  CommentedNavBtn,
  SavedNavBtn,
  MyPostsNavBtn,
} from "@src/features/navigation";
import { IComponentItem } from "@src/shared/ui/dropdown/lib/types";
import { IconEye, IconSave, IconPen, IconComment } from "@src/shared/ui/icons";

export const SELECT_HEADER_ITEMS: IComponentItem[] = [
  {
    text: "Просмотренное",
    icon: <IconEye />,
    render: (onClick) => (
      <CommentedNavBtn
        className="post-filter__option interactive-1"
        iconElement={<IconEye className="post-filter__icon" />}
        onClick={onClick}
      >
        Просмотренное
      </CommentedNavBtn>
    ),
  },
  {
    text: "Сохранённое",
    icon: <IconSave />,
    render: (onClick) => (
      <SavedNavBtn
        className="post-filter__option interactive-1"
        iconElement={<IconSave className="post-filter__icon" size={10} />}
        onClick={onClick}
      >
        Сохранённое
      </SavedNavBtn>
    ),
  },
  {
    text: "Мои посты",
    icon: <IconPen />,
    render: (onClick) => (
      <MyPostsNavBtn
        className="post-filter__option interactive-1"
        iconElement={<IconPen className="post-filter__icon" />}
        onClick={onClick}
      >
        Мои посты
      </MyPostsNavBtn>
    ),
  },
  {
    text: "Прокомментированное",
    icon: <IconComment />,
    render: (onClick) => (
      <CommentedNavBtn
        className="post-filter__option interactive-1"
        iconElement={<IconComment className="post-filter__icon" />}
        onClick={onClick}
      >
        Прокомментированное
      </CommentedNavBtn>
    ),
  },
];
