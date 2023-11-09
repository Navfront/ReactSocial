import { PipeFnType } from "@src/shared/lib/react/events-pipe";

import { REDDIT_AUTH_URL } from "../config";

export const authOnReddit: PipeFnType = (e) => {
  if (window) window.location.href = REDDIT_AUTH_URL;
  return e;
};
