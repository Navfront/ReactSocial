import { FC, ReactElement } from "react";

import { ErrorBoundary } from "@shared/ui/error-boundary";
import { Router } from "@src/pages";
import "@shared/styles/styles.scss";
import { AppCtx } from "@src/shared/lib/context";

interface IAppProps {
  token: string;
}

const App: FC<IAppProps> = ({ token }): ReactElement => {
  return (
    <AppCtx.Provider value={token}>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </AppCtx.Provider>
  );
};

export { App };
