import React from 'react';
import PokemonList from './PokemonList';
import renderWith from '../../test-util/renderWith';
import PokeApi from 'poke-api';

jest.mock('poke-api');

const mockApi = ({ withPokemon = true }) => {
  PokeApi.getType = async () => {
    if (!withPokemon) {
      return await Promise.resolve({
        status: 200,
        results: [],
      });
    }
    return await Promise.resolve({
      status: 200,
      pokemon: [
        {
          pokemon: {
            url: 'something/100/',
            name: 'something',
          },
        },
        {
          pokemon: {
            url: 'something/101/',
            name: 'something-else',
          },
        },
      ],
    });
  };
};

jest.mock('react-router-dom', () => ({
  useParams: () => ({}),
  useHistory: () => ({}),
  useLocation: () => ({}),
}));

describe('<PokemonList />', () => {
  it('should render the correct number of items', async () => {
    mockApi({ withPokemon: true });
    const { queryAllByTestId, waitFor, fireEvent } = renderWith(
      <React.Suspense fallback="...">
        <PokemonList />
      </React.Suspense>,
      {
        withStore: true,
      },
    );
    await waitFor(() => {
      expect(queryAllByTestId('pokemon-list-item-component')).toHaveLength(2);
    });
    // TODO: this event proves there is a potential memory leak.  A non-breaking issue that should be addressed.
    fireEvent.click(queryAllByTestId('add-favorite-button')[0]);
  });
  // An empty list test fails because of the automatic caching Recoil provides.  Need to look in it more.
  // Running either test independently works fine.
  // Created PokemonListEmpty.test.js for now.
});
