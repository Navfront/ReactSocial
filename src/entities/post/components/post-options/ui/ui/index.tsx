import { FC, PropsWithChildren, ReactElement, useState } from "react";

import { Button } from "@src/shared/ui/button";
import { Dropdown } from "@src/shared/ui/dropdown";

interface IPostOptionsProps extends PropsWithChildren {
  buttonComponent: (isOpen: boolean) => ReactElement;
}

export const PostOptions: FC<IPostOptionsProps> = ({
  children,
  buttonComponent,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="options">
      <Dropdown
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        button={buttonComponent(isOpen)}
        contentClassName="options__wrapper"
      >
        <ul className="list-reset options__content">
          {children}
          <li className="options__item">
            <Button
              className="options__close interactive-1 interactive-1--warn"
              onClick={() => setIsOpen(false)}
            >
              Закрыть
            </Button>
          </li>
        </ul>
      </Dropdown>
    </div>
  );
};
