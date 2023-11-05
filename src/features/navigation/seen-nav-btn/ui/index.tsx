import { FC, PropsWithChildren, ReactElement } from "react";

import { noop } from "@src/shared/lib/js/noop";
import { Button } from "@src/shared/ui/button";

interface SeenNavBtnProps extends PropsWithChildren {
  onClick?: () => void;
  className?: string;
  iconElement?: ReactElement;
  as?: "button" | "a";
}

export const SeenNavBtn: FC<SeenNavBtnProps> = ({
  as = "button",
  className,
  onClick = noop,
  children,
  iconElement,
}) => {
  const href = as === "button" ? undefined : "#";
  return (
    <Button
      className={className}
      icon={iconElement}
      onClick={() => {
        onClick();
        console.log("click on SeenNavBtn");
      }}
      href={href}
    >
      {children}
    </Button>
  );
};
