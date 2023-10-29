import { FC } from "react";

import { Button } from "@src/shared/ui/button";
import { IconSave } from "@src/shared/ui/icons";

interface SavePostBtnProps {
  postId: string;
}

export const SavePostBtn: FC<SavePostBtnProps> = ({ postId }) => {
  return (
    <Button
      className="button button--option interactive-1"
      onClick={() => {
        console.log("Save post logic", postId);
      }}
      key={4}
      icon={<IconSave />}
    >
      Сохранить
    </Button>
  );
};
