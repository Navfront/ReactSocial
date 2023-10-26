import { FC } from "react";

import { ROUTE_CONSTANTS } from "@shared/config";
import { Route, Routes } from "react-router-dom";

import { MainPage } from "./main";
import { NotFound } from "./not-found/NotFound";
import { ProductDetailedPage } from "./product-detailed";

export const Router: FC = () => (
  <Routes>
    <Route path="*" element={<NotFound />} />
    <Route path={ROUTE_CONSTANTS.HOME} element={<MainPage />} />
    <Route path={ROUTE_CONSTANTS.PRODUCT} element={<ProductDetailedPage />} />
    <Route path={ROUTE_CONSTANTS.NOT_FOUND} element={<NotFound />} />
  </Routes>
);
