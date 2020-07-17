import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'semantic-ui-react';

const Modalize = ({ children, triggerText }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const clone = React.cloneElement(React.Children.only(children), {
    isModal: true,
    closeModal: handleClose,
  });

  return (
    <Modal
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      basic
      closeIcon
      className="modalized-content"
      trigger={<Button primary size="tiny" content={triggerText} />}>
      <Modal.Content>{clone}</Modal.Content>
    </Modal>
  );
};

Modalize.propTypes = {
  children: PropTypes.node,
  triggerText: PropTypes.string,
};

export default Modalize;
