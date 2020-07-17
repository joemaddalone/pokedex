import React, { useState } from 'react';
import TypeNav from './TypeNav';
import { Modal, Button } from 'semantic-ui-react';
import { translate } from 'poke-i18n';

const t = translate(['common']);

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
      trigger={<Button primary size="tiny" content={t('types')} />}>
      <Modal.Content>
        <TypeNav isModal closeModal={handleClose} />
      </Modal.Content>
    </Modal>
  );
};

export default ModalTypeNav;
