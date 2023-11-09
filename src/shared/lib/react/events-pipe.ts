import { SyntheticEvent } from "react";

export type PipeFnType = (event: SyntheticEvent) => SyntheticEvent;

export type PipeType = <Fn extends PipeFnType>(
  ...fns: Fn[]
) => (event: SyntheticEvent) => void;

export const pipe: PipeType =
  (...fns) =>
  (event: SyntheticEvent) =>
    [...fns].reduce((event, fn) => {
      return fn(event);
    }, event);

export const prevent = (event: SyntheticEvent) => {
  event.preventDefault();
  return event;
};

export const stop = (event: SyntheticEvent) => {
  event.stopPropagation();
  return event;
};
