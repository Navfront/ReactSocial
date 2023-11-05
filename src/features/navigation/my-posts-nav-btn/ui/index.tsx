import { FC, PropsWithChildren, ReactElement } from "react";

import { noop } from "@src/shared/lib/js/noop";
import { Button } from "@src/shared/ui/button";

interface MyPostsNavBtnProps extends PropsWithChildren {
  onClick?: () => void;
  className?: string;
  iconElement?: ReactElement;
  as?: "button" | "a";
}

export const MyPostsNavBtn: FC<MyPostsNavBtnProps> = ({
  className,
  onClick = noop,
  children,
  iconElement,
  as = "button",
}) => {
  const href = as === "button" ? undefined : "#";
  return (
    <Button
      className={className}
      icon={iconElement}
      onClick={() => {
        onClick();
        console.log("click on MyPostsNavBtn");
      }}
      href={href}
    >
      {children}
    </Button>
  );
};
