import { FC } from "react";

import { noop } from "@src/shared/lib/js/noop";
import { withSelectDropdown } from "@src/shared/ui/dropdown";
import { IComponentItem } from "@src/shared/ui/dropdown/lib/types";
import { GenericList } from "@src/shared/ui/generic-list";
import { IconUp } from "@src/shared/ui/icons";
import cn from "classnames";

import { ILinkItem } from "../types";

interface PageNavigationProps {
  selects: IComponentItem[];
  links: ILinkItem[];
  defaultChoice: string;
}

export const PageNavigation: FC<PageNavigationProps> = ({
  selects,
  links,
  defaultChoice,
}) => {
  const PageNavigationSelect = withSelectDropdown(selects, defaultChoice);

  return (
    <>
      <nav className="header__nav header-nav">
        <GenericList
          className="header-nav__list list-reset"
          items={links.map((it, idx) => ({
            render: () => (
              <li className="header-nav__item" key={idx}>
                {it.render(noop)}
              </li>
            ),
          }))}
        />
      </nav>

      <PageNavigationSelect
        className="header__select-nav post-filter"
        mainBtnClassName="post-filter__btn"
        contentWrapperClassName="options__wrapper post-filter__wrapper"
        itemClassName="post-filter__item options__item"
        listClassName="list-reset options__content"
        closeBtnClassName="options__close interactive-1 interactive-1--warn"
        directionIconElement={
          <IconUp className={cn("options__icon-direction")} />
        }
      />
    </>
  );
};
