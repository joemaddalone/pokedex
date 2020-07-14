import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Modal } from 'semantic-ui-react';
import { useAddFavorite } from 'poke-store';

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
      <Modal.Header>
        Add <span className="ttc">{pokemon.name}</span> to your favourites
      </Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input onChange={onChangeMemo} label="Add a memo if you wish" />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button className="anchor-button" onClick={cancel}>
          Cancel
        </Button>
        <Button onClick={onSave} primary>
          Add to favourites
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
