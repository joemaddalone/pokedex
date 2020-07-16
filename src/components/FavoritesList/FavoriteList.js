import React from 'react';
import Favorite from './Favorite';
import { useRecoilValue } from 'recoil';
import { favorites, useRemoveFavorite } from 'poke-store';
import './FavoritesList.css';

const FavoriteList = () => {
  const favs = useRecoilValue(favorites);
  const remove = useRemoveFavorite();

  const hasFavs = favs.length;

  return (
    <div className={`favorites-items ${!hasFavs ? 'flex flex-center' : ''}`}>
      {!hasFavs ? (
        <h1>No items</h1>
      ) : (
        favs.map((f) => <Favorite remove={remove} key={f.id} favorite={f} />)
      )}
    </div>
  );
};

export default FavoriteList;
