import { useState } from "react";

import { LikeType } from "@src/shared/types";

export const useLikes = (
  id: string,
  myLike: LikeType,
  theLikeFeature: (id: string, myLike: LikeType) => void
) => {
  const [like, setLike] = useState(myLike);

  const likeHandler = () => {
    setLike((prev) => (prev === 0 || prev === -1 ? 1 : 0));
    theLikeFeature(id, like);
  };

  const dislikeHandler = () => {
    setLike((prev) => (prev === 0 || prev === 1 ? -1 : 0));
    theLikeFeature(id, like);
  };

  return {
    like,
    likeHandler,
    dislikeHandler,
  };
};
