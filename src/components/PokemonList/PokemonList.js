import React, { useState } from 'react';
import { getPokemonType, favorites } from 'poke-store';
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
  const hasItems = items?.length;

  const cancel = () => setPokemon(null);

  return (
    <div
      className={`pokemon-list flex flex-wrap justify-around ${
        !hasItems ? 'flex flex-center' : ''
      }`}>
      {!hasItems ? (
        <h2 className="pa2 tc">{t('noneOfType', { type: params.type })}</h2>
      ) : (
        items.map(({ pokemon: { url, name } }) => {
          const id = url.split('/').reverse()[1];
          const isFavorited = favs.some((f) => f.id === id);
          return (
            <PokemonListItem
              pokemon={{id, name}}
              isFavorited={isFavorited}
              key={id}
              add={() => setPokemon({ id, name })}
            />
          );
        })
      )}

      {pokemon && <AddFavorite pokemon={pokemon} close={cancel} />}
    </div>
  );
};

export default PokemonList;
