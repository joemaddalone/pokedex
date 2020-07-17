import React, { useState } from 'react';
import FavoriteList from './FavoriteList';
import { Modal, Button } from 'semantic-ui-react';
import { translate } from 'poke-i18n';

const t = translate(['favorite']);

const ModalTypeNav = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Modal
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      basic
      closeIcon
      className="modalized-content"
      trigger={<Button primary size="tiny" content={t('favorites')} />}>
      <Modal.Content>
        <FavoriteList isModal closeModal={handleClose} />
      </Modal.Content>
    </Modal>
  );
};

export default ModalTypeNav;
