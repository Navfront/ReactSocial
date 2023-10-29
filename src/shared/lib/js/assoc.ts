export const assoc =
  <K extends string, V>(key: K, value: V) =>
  <O extends object>(target: O) =>
    ({ ...target, [key]: value } as K extends keyof O
      ? Omit<O, K> & Record<K, V>
      : O & Record<K, V>);
