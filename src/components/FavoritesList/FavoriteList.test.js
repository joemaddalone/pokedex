import React from 'react';
import FavoriteList from './FavoriteList';
import renderWith from '../../test-util/renderWith';

describe('<FavoriteList />', () => {
  let initializeStore;
  beforeEach(() => {
    initializeStore = {
      favorites: [
        {
          id: '100',
          name: 'something',
        },
        { id: '101', name: 'something-else' },
      ],
    };
  });
  it('should an empty list', () => {
    const { getByTestId } = renderWith(<FavoriteList />, {
      withStore: true,
    });
    expect(getByTestId('empty-favorites')).toBeInTheDocument();
  });

  it('should render the correct number of items', async () => {
    const { queryAllByTestId, waitFor } = renderWith(<FavoriteList />, {
      withStore: true,
      initializeStore,
    });
    await waitFor(() => {
      expect(queryAllByTestId('favorite-component')).toHaveLength(
        initializeStore.favorites.length,
      );
    });
  });
});
