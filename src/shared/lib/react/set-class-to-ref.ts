import { RefObject } from "react";

export const setClassToRef = <T extends HTMLElement>(
  ref: RefObject<T>,
  className: string,
  action: "add" | "remove" | "toggle" = "toggle"
) => {
  const { current } = ref;
  if (current) {
    switch (action) {
      case "add":
        current.classList.add(className);
        break;
      case "remove":
        current.classList.remove(className);
        break;

      default:
        current.classList.toggle(className);
    }
  }
};
