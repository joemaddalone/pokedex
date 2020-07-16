import React from 'react';
import AddFavorite from './AddFavorite';
import renderWith from '../../test-util/renderWith';

describe('<AddFavorite />', () => {
  let props;
  beforeEach(() => {
    props = {
      pokemon: { id: 100, name: 'thingamjig' },
      cancel: jest.fn(),
    };
  });
  it('should render without crashing', async () => {
    const { getByTestId, wait } = renderWith(<AddFavorite {...props} />, {
      withStore: true,
    });
    await wait(() => {
      expect(getByTestId('cancel-favorite')).toBeInTheDocument();
      expect(getByTestId('save-favorite')).toBeInTheDocument();
    });
  });
});
