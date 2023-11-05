import { FC, PropsWithChildren, ReactElement } from "react";

import { noop } from "@src/shared/lib/js/noop";
import { Button } from "@src/shared/ui/button";

interface SavedNavBtnProps extends PropsWithChildren {
  onClick?: () => void;
  className?: string;
  iconElement?: ReactElement;
  as?: "button" | "a";
}

export const SavedNavBtn: FC<SavedNavBtnProps> = ({
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
        console.log("click on SavedNavBtn");
      }}
      href={href}
    >
      {children}
    </Button>
  );
};
