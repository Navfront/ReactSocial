import { createRef, FC, PropsWithChildren, ReactElement } from "react";

import cn from "classnames";

import styles from "./style.module.scss";
import { useDropdown } from "../lib/hooks/use-dropdown";

interface IDropdown extends PropsWithChildren {
  button: ReactElement;
  className?: string;
  contentClassName?: string;
  activeClassName?: string;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export const Dropdown: FC<IDropdown> = ({
  children,
  className,
  activeClassName = "",
  button,
  isOpen,
  onOpen,
  onClose,
  contentClassName,
}) => {
  const dropdownRef = createRef<HTMLDivElement>();
  const { isDropdownOpen, handleOpen } = useDropdown(
    isOpen,
    onOpen,
    onClose,
    dropdownRef
  );

  return (
    <div
      ref={dropdownRef}
      className={cn(styles.dropdown, className, {
        [styles["dropdown--open"]]: isDropdownOpen,
        [activeClassName]: isDropdownOpen,
      })}
    >
      <div
        className={styles.dropdown__inner}
        onClick={() => {
          handleOpen();
        }}
      >
        {button}
      </div>
      <div
        onClick={() => {
          handleOpen("CLOSE");
        }}
        className={cn(styles.dropdown__content, contentClassName)}
      >
        {children}
      </div>
    </div>
  );
};
