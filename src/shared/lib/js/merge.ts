export const merge =
  <O1 extends object>(obj: O1) =>
  <O2 extends object>(obj2: O2): O1 & O2 => ({ ...obj, ...obj2 });
