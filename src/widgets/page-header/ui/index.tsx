import { FC } from "react";

import { PageNavigation } from "@entities/navigation/page-navigation";

import { useFeatureItems } from "../hooks/use-feature-items";

export const Header: FC = () => {
  const { selects, links, defaultChoice } = useFeatureItems();

  return (
    <header className="header">
      <div className="container header__wrapper">
        <h1 className="header__title">Личный кабинет</h1>
      </div>

      <div className="header__top">
        <div className="container header__top-wrapper">
          <div className="header__user-block">
            <a className="user-block__link" href="#">
              <img
                className="user-block__img"
                src="ava.jpg"
                alt="Аватар пользователя"
                height="30"
                width="30"
              />
              <span className="user-block__username">Константин</span>
            </a>
          </div>
          <form className="header__search search" action="#" method="get">
            <input
              className="search__input"
              id="search"
              type="text"
              name="search"
              placeholder="Поиск"
            />
            <label className="search__label" htmlFor="search">
              <svg
                className="search__icon"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="currentColor"
              >
                <path d="M13.5407 11.9497H12.7035L12.4067 11.6564C13.4454 10.418 14.0707 8.81018 14.0707 7.06118C14.0707 3.16124 10.9865 0 7.18169 0C3.37686 0 0.292725 3.16124 0.292725 7.06118C0.292725 10.9611 3.37686 14.1224 7.18169 14.1224C8.88804 14.1224 10.4566 13.4814 11.6648 12.4168L11.951 12.721V13.5792L17.2502 19L18.8293 17.3814L13.5407 11.9497ZM7.18169 11.9497C4.54269 11.9497 2.41241 9.76615 2.41241 7.06118C2.41241 4.3562 4.54269 2.17267 7.18169 2.17267C9.8207 2.17267 11.951 4.3562 11.951 7.06118C11.951 9.76615 9.8207 11.9497 7.18169 11.9497Z"></path>
              </svg>
              <span className="visually-hidden">Поиск</span>
            </label>
          </form>
          <button className="header__comments-btn comments-btn" type="button">
            <span className="comments-btn__count">4</span>
            <svg
              className="comments-btn__icon"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="currentColor"
            >
              <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="header__bottom">
        <PageNavigation
          defaultChoice={defaultChoice}
          selects={selects}
          links={links}
        />
      </div>
    </header>
  );
};
