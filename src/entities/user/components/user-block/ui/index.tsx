import { FC, PropsWithChildren } from "react";

import { IUser } from "@entities/user/types";
import { PipeFnType, pipe, prevent } from "@src/shared/lib/react/events-pipe";
import { Button } from "@src/shared/ui/button";
import { IconAnonymous } from "@src/shared/ui/icons";
import cn from "classnames";

interface UserBlockProps extends PropsWithChildren {
  user?: IUser;
  className?: string;
  href?: string;
  onClick?: PipeFnType;
}

export const UserBlock: FC<UserBlockProps> = ({
  user = { imgAva: "", username: "Аноним" },
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
        {imgAva ? (
          <img
            className="user-block__img"
            src={imgAva}
            alt="Аватар пользователя"
            height="30"
            width="30"
          />
        ) : (
          <IconAnonymous className="user-block__img" size={30} />
        )}
        <span className="user-block__username">{username}</span>
      </Button>
    </div>
  );
};
