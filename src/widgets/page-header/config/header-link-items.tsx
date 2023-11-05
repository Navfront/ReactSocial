import { ILinkItem } from "@entities/navigation/page-navigation/types";
import {
  CommentedNavBtn,
  SavedNavBtn,
  MyPostsNavBtn,
} from "@src/features/navigation";

export const HEADER_LINKS: ILinkItem[] = [
  {
    render: (onClick) => (
      <CommentedNavBtn className="header-nav__link" onClick={onClick} as="a">
        Просмотренное
      </CommentedNavBtn>
    ),
  },
  {
    render: (onClick) => (
      <SavedNavBtn className="header-nav__link" onClick={onClick} as="a">
        Сохранённое
      </SavedNavBtn>
    ),
  },
  {
    render: (onClick) => (
      <MyPostsNavBtn className="header-nav__link" onClick={onClick} as="a">
        Мои посты
      </MyPostsNavBtn>
    ),
  },
  {
    render: (onClick) => (
      <CommentedNavBtn className="header-nav__link" onClick={onClick} as="a">
        Прокомментированное
      </CommentedNavBtn>
    ),
  },
];
