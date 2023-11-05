import { FC } from "react";

import { Header } from "@src/widgets/page-header";
import { Posts } from "@src/widgets/posts";

export const MainPage: FC = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main">
        <Posts sectionTitle="Лучшие посты" posts={[]} />
      </main>
    </div>
  );
};
