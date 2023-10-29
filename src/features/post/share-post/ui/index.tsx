import { FC } from "react";

import { Button } from "@src/shared/ui/button";
import { IconShare } from "@src/shared/ui/icons";

interface SharePostBtnProps {
  postId: string;
}

export const SharePostBtn: FC<SharePostBtnProps> = ({ postId }) => {
  return (
    <Button
      className="button button--option interactive-1"
      onClick={() => {
        console.log("Share post logic", postId);
      }}
      key={2}
      icon={<IconShare />}
    >
      Поделиться
    </Button>
  );
};
