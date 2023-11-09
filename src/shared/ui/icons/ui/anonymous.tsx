import { FC } from "react";

interface IconAnonymousProps {
  className?: string;
  size?: number;
}

export const IconAnonymous: FC<IconAnonymousProps> = ({
  className,
  size = 50,
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="currentColor"
  >
    <path d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z" />
  </svg>
);
