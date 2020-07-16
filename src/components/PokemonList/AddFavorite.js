import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Modal } from 'semantic-ui-react';
import EscapeKey from '../common/EscapeKey';
import { useAddFavorite } from 'poke-store';
import { translate } from 'poke-i18n';

const t = translate(['favorite', 'common']);

const AddFavorite = ({ cancel, pokemon }) => {
  const [memo, setMemo] = useState(null);
  const addFavorite = useAddFavorite();

  const onSave = () => {
    addFavorite({
      ...pokemon,
      memo,
    });
    cancel();
  };

  const onChangeMemo = (_, data) => setMemo(data.value);

  return (
    <EscapeKey onEscape={cancel}>
      <Modal size="tiny" open={pokemon !== null}>
        <Modal.Header>{t('add', pokemon)}</Modal.Header>
        <Modal.Content>
          <Form onSubmit={onSave}>
            <Form.Input
              autoFocus
              onChange={onChangeMemo}
              label={t('memo')}
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button data-testid="cancel-favorite" onClick={cancel}>
            {t('cancel')}
          </Button>
          <Button data-testid="save-favorite" onClick={onSave} primary>
            {t('add')}
          </Button>
        </Modal.Actions>
      </Modal>
    </EscapeKey>
  );
};

AddFavorite.propTypes = {
  cancel: PropTypes.func,
  pokemon: PropTypes.object,
};

export default AddFavorite;
