import {
  forwardRef,
  ForwardRefRenderFunction,
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
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, IButtonProps> = (
  {
    className = "",
    children,
    iconPosition = "LEFT",
    icon,
    type = "button",
    onClick,
  },
  ref
) => {
  return (
    <button
      className={cn(className, styles.btn)}
      ref={ref}
      onClick={onClick}
      type={type}
    >
      {icon && iconPosition === "LEFT" ? icon : ""}
      {children}
      {icon && iconPosition === "RIGHT" ? icon : ""}
    </button>
  );
};

const Forwarded = forwardRef(Button);

export { Forwarded };
