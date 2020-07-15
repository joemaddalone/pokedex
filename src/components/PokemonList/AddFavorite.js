import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Modal } from 'semantic-ui-react';
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
    <Modal size="tiny" open closeOnEscape={false} closeOnDimmerClick={false}>
      <Modal.Header>{t('add', pokemon)}</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input onChange={onChangeMemo} label={t('memo')} />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button className="anchor-button" onClick={cancel}>
          {t('cancel')}
        </Button>
        <Button onClick={onSave} primary>
          {t('add')}
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

AddFavorite.propTypes = {
  cancel: PropTypes.func,
  pokemon: PropTypes.object,
};

export default AddFavorite;
