import React from 'react';
import FavoriteList from './FavoriteList';
import Modalize from '../common/Modalize';
import { translate } from 'poke-i18n';

const t = translate(['favorite']);

const ModalTypeNav = () => {
  return (
    <Modalize triggerText={t('favorites')}>
      <FavoriteList />
    </Modalize>
  );
};

export default ModalTypeNav;
