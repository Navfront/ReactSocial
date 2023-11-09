import { FC } from "react";

import { IUser } from "@entities/auth/types";
import { PipeFnType, pipe, prevent } from "@src/shared/lib/react/events-pipe";
import { Button } from "@src/shared/ui/button";
import cn from "classnames";

interface UserBlockProps {
  user?: IUser;
  className?: string;
  href?: string;
  onClick?: PipeFnType;
}

export const UserBlock: FC<UserBlockProps> = ({
  user = { imgAva: "ava.jpg", username: "Аноним" },
  onClick = (e) => e,
  className = "",
  href = "#",
}) => {
  const { imgAva, username } = user;
  return (
    <div className={cn("user-block", className)}>
      <Button
        className="user-block__link"
        href={href}
        onClick={pipe(prevent, onClick)}
      >
        <img
          className="user-block__img"
          src={imgAva}
          alt="Аватар пользователя"
          height="30"
          width="30"
        />
        <span className="user-block__username">{username}</span>
      </Button>
    </div>
  );
};
