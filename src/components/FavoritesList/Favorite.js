import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Popup, Button } from 'semantic-ui-react';
import { translate } from 'poke-i18n';
import './Favorite.css';

const t = translate(['favorite']);

const Favorite = ({ favorite, remove }) => {
  return (
    <div className="favorite-item">
      <h2 className="favorite-name ttc">{favorite.name}</h2>
      <p className="favorite-id">#{favorite.id}</p>
      <p className="favorite-memo">{favorite.memo}</p>
      <Popup
        hoverable
        position="left center"
        trigger={
          <Icon
            className="favorite-remove cur-pointer pa3"
            color="red"
            name="delete"
          />
        }>
        <Popup.Content>
          <h5>{t('remove', { favorite })}</h5>
          <Button size="tiny" negative onClick={() => remove(favorite)}>
            {t('removeConfirm')}
          </Button>
        </Popup.Content>
      </Popup>
    </div>
  );
};

Favorite.propTypes = {
  favorite: PropTypes.object,
  remove: PropTypes.func,
};

export default Favorite;
