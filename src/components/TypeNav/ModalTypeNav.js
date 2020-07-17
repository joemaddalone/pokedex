import React from 'react';
import TypeNav from './TypeNav';
import Modalize from '../common/Modalize';
import { translate } from 'poke-i18n';

const t = translate(['common']);

const ModalTypeNav = () => {
  return (
    <Modalize data-testid="modal-type-nav" triggerText={t('types')}>
      <TypeNav />
    </Modalize>
  );
};

export default ModalTypeNav;
