import {
  forwardRef,
  ForwardRefRenderFunction,
  PropsWithChildren,
  SyntheticEvent,
} from "react";

interface IButtonProps extends PropsWithChildren {
  onClick: (event: SyntheticEvent) => void;
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, IButtonProps> = (
  { children, onClick },
  ref
) => {
  return (
    <button ref={ref} onClick={onClick} type="button">
      {children}
    </button>
  );
};

const Forwarded = forwardRef(Button);

export { Forwarded };
