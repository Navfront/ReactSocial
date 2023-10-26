import { FC, ReactElement } from "react";

import { ErrorBoundary } from "@shared/ui/error-boundary";
import { Router } from "@src/pages";

const App: FC = (): ReactElement => {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
};

export { App };
