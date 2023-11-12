import { FC } from "react";

import { Route, Routes } from "react-router-dom";

import { MainPage } from "./main";

export const Router: FC = () => (
  <Routes>
    <Route path="*" element={<MainPage />} />
  </Routes>
);
