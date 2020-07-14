import React from 'react';
import { favorites } from 'poke-store';
import { useRecoilValue } from 'recoil';

const FavoriteTrigger = () => {
  const favs = useRecoilValue(favorites);
  return <div>Favorites: {favs.length}</div>;
};

export default FavoriteTrigger;
