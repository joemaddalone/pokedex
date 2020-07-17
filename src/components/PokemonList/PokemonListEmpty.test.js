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
  useParams: () => ({ sliceName: 'slice_name' }),
  useHistory: () => ({}),
  useLocation: () => ({}),
  Link: () => <a />,
}));

describe('<PokemonList />', () => {
  it('should render an empty list', async () => {
    mockApi({ withPokemon: false });
    const { debug, getByTestId, waitFor } = renderWith(
      <React.Suspense fallback="...">
        <PokemonList />
      </React.Suspense>,
      {
        withStore: true,
      },
    );
    await waitFor(() => {
      expect(getByTestId('empty-pokemon-list')).toBeInTheDocument();
    });
  });
});
