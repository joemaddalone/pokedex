import React from 'react';
import { favorites, useToggleSidebar } from 'poke-store';
import { useRecoilValue } from 'recoil';
import { translate } from 'poke-i18n';

const t = translate(['favorite']);

const FavoriteTrigger = () => {
  const toggle = useToggleSidebar();
  const favs = useRecoilValue(favorites);
  return (
    <button onClick={() => toggle()}>
      {t('favorites')}: {favs.length}
    </button>
  );
};

export default FavoriteTrigger;
