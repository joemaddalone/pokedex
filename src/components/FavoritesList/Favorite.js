import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Popup, Button } from 'semantic-ui-react';
import { translate } from 'poke-i18n';
import './Favorite.css';

const t = translate(['favorite']);

const Favorite = ({ favorite, remove }) => {
  return (
    <div className="favorite-item flex justify-between">
      <div>
        <p className="fw6 ttc">{favorite.name}</p>
        <p>#{favorite.id}</p>
        {favorite.memo && (
          <Popup
            basic
            content={favorite.memo}
            trigger={
              <span tabIndex={0} role="button">
                <Icon name="sticky note"  className="cur-pointer" />
              </span>
            }
          />
        )}
      </div>
      <div>
        <Popup
          size="tiny"
          on="click"
          hoverable
          position="left center"
          trigger={
            <Icon
              className="favorite-remove cur-pointer"
              color="red"
              name="delete"
            />
          }>
          <Popup.Content>
            <h5>{t('remove', favorite)}</h5>
            <Button size="tiny" negative onClick={() => remove(favorite)}>
              {t('removeConfirm')}
            </Button>
          </Popup.Content>
        </Popup>
      </div>
    </div>
  );
};

Favorite.propTypes = {
  favorite: PropTypes.object,
  remove: PropTypes.func,
};

export default Favorite;
