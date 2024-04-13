export const debounce = (funn, timeout = 500) => {
  let timer; // lưu trữ giá  trị của setTimeout
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      funn(...args);
    }, timeout);
  };
};
// debounce là một hàm
