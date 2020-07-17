import React from 'react';
import ModalFavoriteList from './ModalFavoriteList';
import renderWith from '../../test-util/renderWith';

describe('<ModalFavoriteList />', () => {
  it('renders the correct trigger button', () => {
    const { getByTestId, waitFor } = renderWith(<ModalFavoriteList />, {
      withStore: true,
    });
    expect(getByTestId('modal-favorite-list')).toBeInTheDocument();
  });

  it('renders the modal when trigger button is clicked', () => {
    const { fireEvent, getByTestId, waitFor } = renderWith(
      <ModalFavoriteList />,
      {
        withStore: true,
      },
    );
    fireEvent.click(getByTestId('modal-favorite-list'));
    expect(getByTestId('favorite-section')).toBeInTheDocument();
  });
});
