import { FC } from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const IconUp: FC<IconProps> = ({ className, size = 6 }) => (
  <svg
    className={className}
    width={Math.round(size * 1.6666)}
    height={size}
    viewBox="0 0 10 6"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 6L-4.75832e-07 0.534122L0.541379 1.26775e-07L5 4.87405L9.45862 9.06345e-07L10 0.534123L5 6Z"
    />
  </svg>
);
