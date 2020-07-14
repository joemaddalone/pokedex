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

  return (
    <div
      className={`favorites-list-container flex flex-column ${
        open ? 'open' : 'closed'
      }`}>
      {!favs.length ? (
        <EmptyState>
          <h1>No items</h1>
        </EmptyState>
      ) : (
        favs.map((f) => <Favorite remove={remove} key={f.id} favorite={f} />)
      )}
    </div>
  );
};

export default FavoriteList;
