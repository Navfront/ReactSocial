import { FC } from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const IconEye: FC<IconProps> = ({ className, size = 8 }) => (
  <svg
    className={className}
    width={Math.round(size * 1.5)}
    height={size}
    viewBox="0 0 12 8"
    fill="currentColor"
  >
    <path d="M6 0C3.27273 0 0.943636 1.65867 0 4C0.943636 6.34133 3.27273 8 6 8C8.72727 8 11.0564 6.34133 12 4C11.0564 1.65867 8.72727 0 6 0ZM6 6.66667C4.49455 6.66667 3.27273 5.472 3.27273 4C3.27273 2.528 4.49455 1.33333 6 1.33333C7.50545 1.33333 8.72727 2.528 8.72727 4C8.72727 5.472 7.50545 6.66667 6 6.66667ZM6 2.4C5.09455 2.4 4.36364 3.11467 4.36364 4C4.36364 4.88533 5.09455 5.6 6 5.6C6.90545 5.6 7.63636 4.88533 7.63636 4C7.63636 3.11467 6.90545 2.4 6 2.4Z" />
  </svg>
);
