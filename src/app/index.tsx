import { FC, ReactElement } from "react";

import { ErrorBoundary } from "@shared/ui/error-boundary";
import { Router } from "@src/pages";
import "@shared/styles/styles.scss";

const App: FC = (): ReactElement => {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
};

export { App };
