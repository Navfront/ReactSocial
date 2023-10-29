import { FC } from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const IconPen: FC<IconProps> = ({ className, size = 10 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 10 10"
    fill="currentColor"
  >
    <path d="M0 7.91696V10H2.08304L8.22664 3.85641L6.14359 1.77336L0 7.91696ZM9.83752 2.24552C10.0542 2.02888 10.0542 1.67893 9.83752 1.4623L8.5377 0.162477C8.32107 -0.0541591 7.97112 -0.0541591 7.75448 0.162477L6.73795 1.179L8.821 3.26205L9.83752 2.24552Z" />
  </svg>
);
