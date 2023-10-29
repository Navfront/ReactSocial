import { FC } from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const IconWarn: FC<IconProps> = ({ className, size = 14 }) => (
  <svg
    className={className}
    width={Math.round(size * 1.1428)}
    height={size}
    viewBox="0 0 16 14"
    fill="currentColor"
  >
    <path d="M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z" />
  </svg>
);
