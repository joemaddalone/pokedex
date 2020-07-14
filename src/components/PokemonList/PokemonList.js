import React, { useState } from 'react';
import { pokemonType, favorites } from 'poke-store';
import { useRecoilValue } from 'recoil';
import useRouter from '../../hooks/useRouter';
import EmptyState from '../common/EmptyState';
import Pokemon from './Pokemon';
import AddFavorite from './AddFavorite';
import './PokemonList.css';

const PokemonList = () => {
  const { params } = useRouter();
  const [adding, setAdding] = useState(null);
  const things = useRecoilValue(pokemonType(params.name));
  const favs = useRecoilValue(favorites);

  if (!things.length) {
    return (
      <EmptyState>
        <h2>
          How embarrassing... There appear to be no pokemon with a type of{' '}
          <span className="ttc">{params.name}.</span>
        </h2>
      </EmptyState>
    );
  }
  return (
    <div className="pokemon-list">
      {things.map(({ pokemon: { url, name } }) => {
        const id = url.split('/').reverse()[1];
        const isFavorited = favs.some((f) => f.id === id);
        return (
          <Pokemon
            id={id}
            isFavorited={isFavorited}
            key={id}
            name={name}
            triggerAdd={() => setAdding({ id, name })}
          />
        );
      })}
      {adding && (
        <AddFavorite pokemon={adding} cancel={() => setAdding(null)} />
      )}
    </div>
  );
};

export default PokemonList;
