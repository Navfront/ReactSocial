import { FC } from "react";

import { IPost } from "@entities/post/types";
import { useLikes } from "@src/shared/lib/hooks/use-likes";
import { Button } from "@src/shared/ui/button";
import { IconLike } from "@src/shared/ui/icons/ui/like";
import cn from "classnames";

interface IPostLikesProps {
  postId: IPost["id"];
  likesCount: IPost["likesCount"];
  myLike: IPost["myLike"];
  theLikeFeature: (postId: string, isLiked: IPost["myLike"]) => void;
}

export const PostLikes: FC<IPostLikesProps> = ({
  postId,
  likesCount,
  theLikeFeature,
  myLike,
}) => {
  const { like, likeHandler, dislikeHandler } = useLikes(
    postId,
    myLike,
    theLikeFeature
  );
  return (
    <div className="likes" data-testid="likes">
      <Button
        className={cn("likes__btn", { "likes__btn--active": like === 1 })}
        icon={<IconLike className="likes__icon" />}
        onClick={likeHandler}
        dataTestid="likes-btn-up"
      >
        <span className="visually-hidden">Лайкнуть</span>
      </Button>
      <span className="likes__count" data-testid="likes-counter">
        {likesCount + like}
      </span>
      <Button
        className={cn("likes__btn likes__btn--down", {
          "likes__btn--active": like === -1,
        })}
        icon={<IconLike className="likes__icon" />}
        onClick={dislikeHandler}
        dataTestid="likes-btn-down"
      >
        <span className="visually-hidden">Дизлайкнуть</span>
      </Button>
    </div>
  );
};
