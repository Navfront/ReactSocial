import { useEffect, useState } from "react";

const noop = () => {};

enum DropdownState {
  OPEN = "OPEN",
  CLOSE = "CLOSE",
}

export const useDropdown = (
  isOpenProp = false,
  onOpenCb = noop,
  oncloseCb = noop
) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpenProp);

  useEffect(() => {
    setIsDropdownOpen(isOpenProp);
  }, [isOpenProp]);

  useEffect(() => {
    if (isDropdownOpen) {
      onOpenCb();
    } else {
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
