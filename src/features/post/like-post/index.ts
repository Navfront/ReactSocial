import { IPost } from "@entities/post/types";
import { LikeType } from "@src/shared/types";

export const LikePost = (postId: IPost["id"], isLiked: LikeType) => {
  console.log("feature", postId, isLiked);
};
