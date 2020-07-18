import { selector, selectorFamily } from 'recoil';
import PokeApi from 'poke-api';

export const getPokemonTypes = selector({
  key: 'getPokemonTypes',
  get: async () => {
    try {
      const response = await PokeApi.getTypes();
      return response.results.sort((a, b) =>
        a.name < b.name ? -1 : a.name > b.name ? 1 : 0,
      );
    } catch (err) {
      return err;
    }
  },
});

export const getPokemonType = selectorFamily({
  key: 'getPokemonType',
  get: (name) => async () => {
    try {
      const response = await PokeApi.getType({ name });
      if (response?.pokemon?.length) {
        return response.pokemon.sort((a, b) =>
          a.pokemon.name < b.pokemon.name
            ? -1
            : a.pokemon.name > b.pokemon.name
            ? 1
            : 0,
        );
      } else {
        return [];
      }
    } catch (err) {
      return err;
    }
  },
});
