import { FC, PropsWithChildren, useEffect, useState } from "react";

import { IUser } from "@entities/user/types";
import { useAppContext } from "@src/shared/lib/hooks/use-app-context";
import { PipeFnType, pipe, prevent } from "@src/shared/lib/react/events-pipe";
import { Button } from "@src/shared/ui/button";
import { IconAnonymous } from "@src/shared/ui/icons";
import axios from "axios";
import cn from "classnames";

interface UserBlockProps extends PropsWithChildren {
  className?: string;
  href?: string;
  onClick?: PipeFnType;
}

export const UserBlock: FC<UserBlockProps> = ({
  onClick = (e) => e,
  className = "",
  href = "#",
}) => {
  const { token } = useAppContext();
  const [user, setUser] = useState<IUser>({
    username: "Аноним",
    imgAva: "",
  });
  useEffect(() => {
    if (token)
      try {
        axios
          .get<{ name: string; icon_img: string }>(
            "https://oauth.reddit.com/api/v1/me",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            // eslint-disable-next-line camelcase
            const { name, icon_img } = res.data;
            // eslint-disable-next-line camelcase
            setUser({ username: name, imgAva: icon_img });
          });
      } catch (e) {}
  }, [token]);

  return (
    <div className={cn("user-block", className)}>
      <Button
        className="user-block__link"
        href={href}
        onClick={pipe(prevent, onClick)}
      >
        {user.imgAva ? (
          <img
            className="user-block__img"
            src={user.imgAva}
            alt="Аватар пользователя"
            height="30"
            width="30"
          />
        ) : (
          <IconAnonymous className="user-block__img" size={30} />
        )}
        <span className="user-block__username">{user.username}</span>
      </Button>
    </div>
  );
};
