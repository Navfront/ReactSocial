import { useEffect, useState } from "react";

import { LikeType } from "@src/shared/types";

export const useLikes = (
  id: string,
  myLike: LikeType,
  theLikeFeature: (id: string, myLike: LikeType) => void
) => {
  const [like, setLike] = useState(myLike);
  const [mounted, setMounted] = useState(false);

  const likeHandler = () => {
    setLike((prev) => (prev === 0 || prev === -1 ? 1 : 0));
  };

  const dislikeHandler = () => {
    setLike((prev) => (prev === 0 || prev === 1 ? -1 : 0));
  };

  useEffect(() => {
    if (mounted) theLikeFeature(id, like);
  }, [like]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    like,
    likeHandler,
    dislikeHandler,
  };
};
