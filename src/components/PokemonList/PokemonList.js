import React, { useState } from 'react';
import { getPokemonType, favorites, useRemoveFavorite } from 'poke-store';
import { useRecoilValue } from 'recoil';
import useRouter from '../../hooks/useRouter';
import PokemonListItem from './PokemonListItem';
import AddFavorite from './AddFavorite';
import { translate } from 'poke-i18n';
import './PokemonList.css';

const t = translate(['pokemon']);

const PokemonList = () => {
  const { params } = useRouter();
  const [pokemon, setPokemon] = useState(null);
  const items = useRecoilValue(getPokemonType(params.type));
  const favs = useRecoilValue(favorites);
  const remove = useRemoveFavorite();
  const hasItems = items?.length;

  const cancel = () => setPokemon(null);

  return (
    <div
      className={`pokemon-list flex flex-wrap ${
        !hasItems ? 'flex flex-center' : ''
      }`}>
      {!hasItems ? (
        <h2>{t('noneOfType', { type: params.type })}</h2>
      ) : (
        items.map(({ pokemon: { url, name } }) => {
          const id = url.split('/').reverse()[1];
          const isFavorited = favs.some((f) => f.id === id);
          return (
            <PokemonListItem
              id={id}
              isFavorited={isFavorited}
              key={id}
              name={name}
              remove={() => remove({ id })}
              add={() => setPokemon({ id, name })}
            />
          );
        })
      )}

      {pokemon && <AddFavorite pokemon={pokemon} cancel={cancel} />}
    </div>
  );
};

export default PokemonList;
