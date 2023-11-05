import { RefObject, useEffect, useState } from "react";

const noop = () => {};

enum DropdownState {
  OPEN = "OPEN",
  CLOSE = "CLOSE",
}

export const useDropdown = (
  isOpenProp = false,
  onOpenCb = noop,
  oncloseCb = noop,
  dropdownRef: RefObject<HTMLElement>
) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpenProp);

  const otherClickHandler = () => {
    if (!dropdownRef.current) {
      setIsDropdownOpen(false);
      oncloseCb();
      window.removeEventListener("click", otherClickHandler);
    }
  };

  const escKeyHandler = (event: KeyboardEvent) => {
    if (event.key.includes("Esc")) {
      setIsDropdownOpen(false);
      oncloseCb();
      window.removeEventListener("keydown", escKeyHandler);
    }
  };

  useEffect(() => {
    setIsDropdownOpen(isOpenProp);
  }, [isOpenProp]);

  useEffect(() => {
    if (isDropdownOpen) {
      window.addEventListener("click", otherClickHandler);
      window.addEventListener("keydown", escKeyHandler);
      onOpenCb();
    } else {
      window.removeEventListener("click", otherClickHandler);
      window.removeEventListener("keydown", escKeyHandler);
      oncloseCb();
    }
  }, [isDropdownOpen]);

  const handleOpen = (state?: keyof typeof DropdownState) => {
    switch (state) {
      case DropdownState.OPEN:
        setIsDropdownOpen(true);
        break;
      case DropdownState.CLOSE:
        setIsDropdownOpen(false);
        break;
      default:
        setIsDropdownOpen((prev) => !prev);
    }
  };

  return {
    handleOpen,
    isDropdownOpen,
    setIsDropdownOpen,
  };
};
