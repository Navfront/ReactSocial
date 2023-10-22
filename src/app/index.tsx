import { FC, ReactElement } from "react";

import "@shared/styles/globals.scss";
import { ErrorBoundary } from "@shared/ui/error-boundary";
import { Router } from "@src/pages";
import cn from "classnames";

const App: FC = (): ReactElement => {
  return (
    <ErrorBoundary>
      <div className={cn("app-wrapper")}>
        <Router />
      </div>
    </ErrorBoundary>
  );
};

export { App };
