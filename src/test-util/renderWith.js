import React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
  waitFor,
  cleanup,
  getNodeText,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

/**
 *
 * renderWith allows you to:
 *   - Wrap a component in a Provider, options = { withStore: true }
 *   - Wrap a component in a MemoryRouter, options = { withRouter: true }
 *   - Configure Store
 *
 * @param {object} - react component to test
 * @param {object} - options to render the component with, ie: withRouter
 * @param {object} - options to pass to react-testing-library render fn
 */

export default (component, options = {}, rendererOptions = {}) => {
  const {
    withRouter = null,
    withStore = null,
    initializeStore = null,
  } = options;

  const initializeState = initializeStore
    ? ({ set }) => {
        Object.keys(initializeStore).forEach((key) => {
          set({ key }, initializeStore[key]);
        });
      }
    : null;

  // Array of wrapper components.
  const wrappers = [];

  // Add MemoryRouter wrapper.
  if (withRouter) {
    wrappers.push(MemoryRouter);
  }

  // Add Store provider wrapper.
  if (withStore) {
    wrappers.push(RecoilRoot);
  }

  let output = null;

  // Props for clone.
  const cloneProps = withRouter ? { initialEntries: [withRouter.route] } : {};

  // Cloned component, with cloneProps.
  const clone = React.cloneElement(component, { ...cloneProps });

  if (!wrappers.length) {
    // No wrappers, output is just the cloned component.
    output = clone;
  }

  if (wrappers.length === 1) {
    // One wrapper, either MemoryRouter or Provider.
    const Wrapper = wrappers[0];
    const wrapperProps = Wrapper === RecoilRoot ? { initializeState } : cloneProps;
    output = React.createElement(Wrapper, wrapperProps, clone);
  }

  if (wrappers.length === 2) {
    // Two wrappers, both MemoryRouter and Provider.
    const [RouterWrapper, StoreWrapper] = wrappers;
    output = React.createElement(
      StoreWrapper,
      { initializeState },
      React.createElement(RouterWrapper, cloneProps, clone),
    );
  }

  // Execute the renderer.
  const r = render(output, rendererOptions);

  // react-testing-library renderer destructured.
  return {
    ...r,
    fireEvent,
    waitFor,
    waitForElement,
    history,
    cleanup,
    getNodeText,
  };
};
