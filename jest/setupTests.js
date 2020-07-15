/* eslint-disable no-console */
const localStorageMock = () => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => (store[key] = value.toString()),
    removeItem: (key) => delete store[key],
    clear: () => (store = {}),
  };
};

window.localStorage = localStorageMock();
window.sessionStorage = global.sessionStorage;
window.scroll = () => {};
// FIXME Remove when we upgrade to React >= 16.9
// const originalConsoleError = console.error;
// console.error = (...args) => {
//   if (/Warning.*not wrapped in act/.test(args[0])) {
//     return;
//   }
//   originalConsoleError(...args);
// };

jest.mock('react-dom', () => {
  const original = jest.requireActual('react-dom');
  return {
    ...original,
    createPortal: (node) => node,
  };
});