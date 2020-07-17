import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Modal } from 'semantic-ui-react';
import { useAddFavorite } from 'poke-store';
import { translate } from 'poke-i18n';

const t = translate(['favorite', 'common']);

const AddFavorite = ({ close, pokemon }) => {
  const [memo, setMemo] = useState(null);
  const [open, setOpen] = useState(false);
  const addFavorite = useAddFavorite();

  useEffect(() => {
    // This solves an a11y issue where the modal immediately saves onEnter of the trigger.
    // Poor man's "defer"
    setTimeout(() => setOpen(pokemon !== null), 0);
  }, [pokemon]);

  const handleClose = () => {
    setOpen(false);
    close();
  };

  const onSave = () => {
    addFavorite({
      ...pokemon,
      memo,
    });
    handleClose();
  };

  const onChangeMemo = (_, data) => setMemo(data.value);

  return (
    <Modal size="tiny" open={open} onClose={handleClose}>
      <Modal.Header>{t('add', pokemon)}</Modal.Header>
      <Modal.Content>
        <Form onSubmit={onSave}>
          <Form.Input
            autoFocus
            onChange={onChangeMemo}
            label={t('memoLabel')}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button data-testid="cancel-favorite" onClick={handleClose}>
          {t('cancel')}
        </Button>
        <Button data-testid="save-favorite" onClick={onSave} primary>
          {t('add')}
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

AddFavorite.propTypes = {
  close: PropTypes.func,
  pokemon: PropTypes.object,
};

export default AddFavorite;
