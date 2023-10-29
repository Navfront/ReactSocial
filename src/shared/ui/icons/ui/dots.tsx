import { FC } from "react";

interface IconDotsProps {
  className?: string;
  size?: number;
}

export const IconDots: FC<IconDotsProps> = ({ className, size = 20 }) => (
  <svg
    className={className}
    width={size / 4}
    height={size}
    viewBox="0 0 5 20"
    fill="currentColor"
  >
    <circle cx="2.5" cy="2.5" r="2.5" />
    <circle cx="2.5" cy="10" r="2.5" />
    <circle cx="2.5" cy="17.5" r="2.5" />
  </svg>
);
