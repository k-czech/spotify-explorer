export const debounce = <T extends (...args: Parameters<T>) => ReturnType<T> | void>(
  fn: T,
  delay: number
) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
