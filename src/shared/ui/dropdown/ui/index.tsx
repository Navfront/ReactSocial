import { FC, PropsWithChildren, ReactElement } from "react";

import cn from "classnames";

import styles from "./style.module.scss";
import { useDropdown } from "../lib/hooks/use-dropdown";

interface IDropdown extends PropsWithChildren {
  button: ReactElement;
  className?: string;
  contentClassName?: string;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export const Dropdown: FC<IDropdown> = ({
  children,
  className,
  button,
  isOpen,
  onOpen,
  onClose,
  contentClassName,
}) => {
  const { isDropdownOpen, handleOpen } = useDropdown(isOpen, onOpen, onClose);

  return (
    <div
      className={cn(styles.dropdown, className, {
        [styles["dropdown--open"]]: isDropdownOpen,
      })}
    >
      <div onClick={() => handleOpen()}>{button}</div>
      <div className={cn(styles.dropdown__content, contentClassName)}>
        {children}
      </div>
    </div>
  );
};
