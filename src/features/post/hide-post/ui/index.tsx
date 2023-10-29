import { FC } from "react";

import { Button } from "@src/shared/ui/button";
import { IconStop } from "@src/shared/ui/icons";

interface HidePostBtnProps {
  postId: string;
}

export const HidePostBtn: FC<HidePostBtnProps> = ({ postId }) => {
  return (
    <Button
      className="button button--option interactive-1"
      onClick={() => console.log("hide-post-logic", postId)}
      key={3}
      icon={<IconStop />}
    >
      Скрыть
    </Button>
  );
};
