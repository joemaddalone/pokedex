import React from 'react';
import Favorite from './Favorite';
import { useRecoilValue } from 'recoil';
import { favorites, useRemoveFavorite } from 'poke-store';
import { translate } from 'poke-i18n';
import './FavoritesList.css';

const t = translate(['favorite']);

const FavoriteList = () => {
  const favs = useRecoilValue(favorites);
  const remove = useRemoveFavorite();
  const hasFavs = favs.length;

  return (
    <div data-testid="favorite-section" className="favorite-area">
      <div className={`favorites-items ${!hasFavs ? 'flex flex-center' : ''}`}>
        {!hasFavs ? (
          <h1 data-testid="empty-favorites">{t('empty')}</h1>
        ) : (
          favs.map((f) => <Favorite remove={remove} key={f.id} favorite={f} />)
        )}
      </div>
    </div>
  );
};

export default FavoriteList;
