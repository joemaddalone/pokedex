import React, { useState } from 'react';
import { getPokemonType, favorites, sidebarOpen } from 'poke-store';
import { useRecoilValue } from 'recoil';
import useRouter from '../../hooks/useRouter';
import PokemonListItem from './PokemonListItem';
import AddFavorite from './AddFavorite';
import { translate } from 'poke-i18n';
import './PokemonList.css';

const t = translate(['pokemon']);

const PokemonList = () => {
  const { params } = useRouter();
  const [adding, setAdding] = useState(null);
  const items = useRecoilValue(getPokemonType(params.type));
  const open = useRecoilValue(sidebarOpen);
  const favs = useRecoilValue(favorites);
  const hasItems = items?.length;

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
              triggerAdd={() => setAdding({ id, name })}
            />
          );
        })
      )}

      {adding && (
        <AddFavorite pokemon={adding} cancel={() => setAdding(null)} />
      )}
    </div>
  );
};

export default PokemonList;
