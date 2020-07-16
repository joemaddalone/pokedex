import React from 'react';
import Favorite from './Favorite';
import { useRecoilValue } from 'recoil';
import { favorites, useRemoveFavorite, sidebarOpen } from 'poke-store';
import EmptyState from '../common/EmptyState';
import './FavoritesList.css';

const FavoriteList = () => {
  const favs = useRecoilValue(favorites);
  const open = useRecoilValue(sidebarOpen);
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

  // <div
  //   className={`favorites-list-container flex flex-column ${
  //     open ? 'open' : 'closed'
  //   }`}>

  // </div>
};

export default FavoriteList;
