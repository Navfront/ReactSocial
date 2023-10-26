import { FC } from "react";

import { Header } from "@src/widgets/page-header";

export const MainPage: FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <section className="section posts">
          <h2 className="visually-hidden">Лучшие посты</h2>
          <ul className="posts__list list-reset">
            <li className="posts__item post">
              <h3 className="post__title">
                Реализация намеченных плановых заданий
              </h3>
              <div className="post__image">
                <img
                  className="post__pic"
                  src="post.jpg"
                  alt="Что-то интересное.."
                  width="320"
                  height="178"
                />
              </div>
              <div className="post__meta post-meta">
                <span className="post-meta__published">
                  <span className="post-meta__published-pref">
                    опубликовано
                  </span>
                  4 часа назад
                </span>
                <a className="post-meta__author author" href="#">
                  <img
                    className="author__ava"
                    src="ava.jpg"
                    height="20"
                    width="20"
                    alt="Аватар пользователя"
                  />
                  Константин Кодов
                </a>
              </div>
              <button className="post__comments-btn post-comments-btn">
                <svg
                  className="post-comments-btn__icon"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                >
                  <path d="M10.8 0H1.2C0.54 0 0 0.54 0 1.2V8.4C0 9.06 0.54 9.6 1.2 9.6H9.6L12 12V1.2C12 0.54 11.46 0 10.8 0ZM9.6 7.2H2.4V6H9.6V7.2ZM9.6 5.4H2.4V4.2H9.6V5.4ZM9.6 3.6H2.4V2.4H9.6V3.6Z" />
                </svg>
                <span className="post-comments-btn__count">14</span>
              </button>
              {/* <!-- <div className="post__comments comments">
                <button className="comments__show-btn" type="button">
                  Комментарий

                </button>
                <ul className="comments__list list-reset">
                  <li className="comments__item comment">
                    <h4>
                      <span className="visually-hidden">Комментарий автора:</span>
                      <a className="comment__author author" href="#">
                        <img
                          className="author__ava"
                          src="img/ava.jpg"
                          height="20"
                          width="20"
                        />
                        Константин Кодов
                      </a>
                      <div className="comment__content">
                        <p>
                          Банальные, но неопровержимые выводы, а также многие
                          известные личности лишь добавляют фракционных
                          разногласий и рассмотрены исключительно в разрезе
                          маркетинговых и финансовых предпосылок. Таким образом,
                          постоянное информационно-пропагандистское обеспечение
                          нашей деятельности является качественно новой ступенью
                          прогресса профессионального сообщества.
                        </p>
                      </div>
                    </h4>
                  </li>
                </ul>
                <button className="comments__more-btn" type="button">
                  + ещё 3 ваших комментария
                </button>
              </div> --> */}
              <div className="post__likes likes">
                <button className="likes__btn" type="button">
                  <span className="visually-hidden">Лайкнуть</span>
                  <svg width="19" height="10" viewBox="0 0 19 10" fill="none">
                    <path d="M9.5 0L0 10H19L9.5 0Z" fill="currentColor" />
                  </svg>
                </button>
                <span className="likes__count">199</span>
                <button className="likes__btn likes__btn--down" type="button">
                  <span className="visually-hidden">Лайкнуть</span>
                  <svg width="19" height="10" viewBox="0 0 19 10" fill="none">
                    <path d="M9.5 0L0 10H19L9.5 0Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
              <div className="post__options options">
                <button className="options__btn" type="button">
                  <svg
                    className="options__icon"
                    width="5"
                    height="20"
                    viewBox="0 0 5 20"
                    fill="currentColor"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" />
                    <circle cx="2.5" cy="10" r="2.5" />
                    <circle cx="2.5" cy="17.5" r="2.5" />
                  </svg>
                </button>
              </div>
              <div className="post__controls controls">
                <ul className="controls__list list-reset">
                  <li className="controls__item">
                    <a className="controls__btn" href="#">
                      <svg
                        className="controls__icon"
                        width="16"
                        height="10"
                        viewBox="0 0 16 10"
                        fill="currentColor"
                      >
                        <path d="M11.2 0L13.032 1.90833L9.128 5.975L5.928 2.64167L0 8.825L1.128 10L5.928 5L9.128 8.33333L14.168 3.09167L16 5V0H11.2Z" />
                      </svg>
                      <span className="controls__btn-descr">
                        Статистика публикации
                      </span>
                    </a>
                  </li>
                  <li className="controls__item">
                    <button type="button" className="controls__btn">
                      <svg
                        className="controls__icon"
                        width="12"
                        height="14"
                        viewBox="0 0 12 14"
                        fill="currentColor"
                      >
                        <path d="M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z" />
                      </svg>
                      <span className="controls__btn-descr"> Поделиться </span>
                    </button>
                  </li>
                  <li className="controls__item">
                    <button type="button" className="controls__btn">
                      <svg
                        className="controls__icon"
                        width="10"
                        height="12"
                        viewBox="0 0 10 12"
                        fill="currentColor"
                      >
                        <path d="M0.714286 10.6667C0.714286 11.4 1.35714 12 2.14286 12H7.85714C8.64286 12 9.28571 11.4 9.28571 10.6667V2.66667H0.714286V10.6667ZM2.14286 4H7.85714V10.6667H2.14286V4ZM7.5 0.666667L6.78571 0H3.21429L2.5 0.666667H0V2H10V0.666667H7.5Z" />
                      </svg>
                      <span className="controls__btn-descr"> Удалить </span>
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};
