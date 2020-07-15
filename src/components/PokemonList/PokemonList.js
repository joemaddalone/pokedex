import React, { useState } from 'react';
import { getPokemonType, favorites } from 'poke-store';
import { useRecoilValue } from 'recoil';
import useRouter from '../../hooks/useRouter';
import EmptyState from '../common/EmptyState';
import PokemonListItem from './PokemonListItem';
import AddFavorite from './AddFavorite';
import { translate } from 'poke-i18n';

const t = translate(['pokemon']);

const PokemonList = () => {
  const { params } = useRouter();
  const [adding, setAdding] = useState(null);
  const things = useRecoilValue(getPokemonType(params.name));
  const favs = useRecoilValue(favorites);

  if (!things.length) {
    return (
      <EmptyState>
        <h2>{t('noneOfType', { type: params.name })}</h2>
      </EmptyState>
    );
  }

  return (
    <>
      <h3 className="ml3 pt3 ttc">{params.name}</h3>
      <div className="pokemon-list flex flex-wrap">
        {things.map(({ pokemon: { url, name } }) => {
          const id = url.split('/').reverse()[1];
          const isFavorited = favs.some((f) => f.id === id);
          return (
            <PokemonListItem
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
    </>
  );
};

export default PokemonList;
