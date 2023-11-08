import { FC } from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const IconLike: FC<IconProps> = ({ className, size = 10 }) => (
  <svg
    className={className}
    width={size * 1.9}
    height={size}
    viewBox="0 0 19 10"
    fill="currentColor"
  >
    <path d="M9.5 0L0 10H19L9.5 0Z" />
  </svg>
);
