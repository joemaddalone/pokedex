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
import { Router } from 'react-router-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
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
    wrappers.push(React.createElement.bind(null, Router));
  }

  // Add Store provider wrapper.
  if (withStore) {
    wrappers.push(
      React.createElement.bind(null, RecoilRoot, { initializeState }),
    );
  }

  let output = null;

  // history for components wrapped in MemoryRouter.
  const history = withRouter?.route
    ? createMemoryHistory({ ...withRouter, initialEntries: [withRouter.route] })
    : createBrowserHistory();

  // Props for clone.
  const cloneProps = withRouter ? { history, ...history } : {};

  // Cloned component, with cloneProps.
  const clone = React.cloneElement(component, { ...cloneProps });

  if (!wrappers.length) {
    // No wrappers, output is just the cloned component.
    output = clone;
  }

  if (wrappers.length === 1) {
    // One wrapper, either MemoryRouter or Provider.
    output = wrappers[0](null, clone);
  }

  if (!output) {
    // Two wrappers, both MemoryRouter & Provider. And yes - this is pretty lazy.
    output = wrappers[0](null, wrappers[1](null, clone));
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
