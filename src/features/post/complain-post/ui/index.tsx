import { FC } from "react";

import { Button } from "@src/shared/ui/button";
import { IconWarn } from "@src/shared/ui/icons";

interface ComplainBtnProps {
  postId: string;
}

export const ComplainBtn: FC<ComplainBtnProps> = ({ postId }) => {
  return (
    <Button
      className="button button--option interactive-1"
      onClick={() => console.log("Complain post logic", postId)}
      key={5}
      icon={<IconWarn />}
    >
      Пожаловаться
    </Button>
  );
};
