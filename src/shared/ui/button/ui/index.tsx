import {
  forwardRef,
  ForwardRefRenderFunction,
  LegacyRef,
  PropsWithChildren,
  ReactNode,
  SyntheticEvent,
} from "react";

import cn from "classnames";

import styles from "./styles.module.scss";

enum IconPositions {
  "LEFT",
  "RIGHT",
}

enum BtnTypes {
  "button",
  "reset",
  "submit",
}

interface IButtonProps extends PropsWithChildren {
  className?: string;
  onClick: (event: SyntheticEvent) => void;
  icon?: ReactNode;
  iconPosition?: keyof typeof IconPositions;
  type?: keyof typeof BtnTypes;
  href?: string;
}

const Button: ForwardRefRenderFunction<
  HTMLButtonElement | HTMLAnchorElement,
  IButtonProps
> = (
  {
    className = "",
    children,
    iconPosition = "LEFT",
    icon,
    type = "button",
    onClick,
    href,
  },
  ref
) => {
  return href ? (
    <button
      className={cn(className, styles.btn)}
      ref={ref as LegacyRef<HTMLButtonElement>}
      onClick={onClick}
      type={type}
    >
      {icon && iconPosition === "LEFT" ? icon : ""}
      {children}
      {icon && iconPosition === "RIGHT" ? icon : ""}
    </button>
  ) : (
    <a
      href={href}
      className={cn(className, styles.btn)}
      ref={ref as LegacyRef<HTMLAnchorElement>}
      onClick={onClick}
    >
      {icon && iconPosition === "LEFT" ? icon : ""}
      {children}
      {icon && iconPosition === "RIGHT" ? icon : ""}
    </a>
  );
};

const Forwarded = forwardRef(Button);

export { Forwarded };
