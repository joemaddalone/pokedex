import React from 'react';
import { favorites, useToggleSidebar } from 'poke-store';
import { useRecoilValue } from 'recoil';

const FavoriteTrigger = () => {
  const toggle = useToggleSidebar();
  const favs = useRecoilValue(favorites);
  return <button onClick={() => toggle()}>Favourites: {favs.length}</button>;
};

export default FavoriteTrigger;
