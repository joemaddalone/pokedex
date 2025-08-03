/* eslint-disable no-console */
import '@testing-library/jest-dom';

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
// Ignore the dumb not wrapped in act warning.  React core team working on the issue.
const originalConsoleError = console.error;
console.error = (...args) => {
  if (/Warning.*not wrapped in act/.test(args[0])) {
    return;
  }
  originalConsoleError(...args);
};
jest.mock('react-dom', () => {
  const original = jest.requireActual('react-dom');
  return {
    ...original,
    createPortal: (node) => node,
  };
});
