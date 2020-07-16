import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Popup } from 'semantic-ui-react';
import { translate } from 'poke-i18n';
import './Favorite.css';

const t = translate(['favorite']);

const Favorite = ({ favorite, remove }) => {
  return (
    <div className="favorite-item flex justify-between items-center ph2 pv3">
      <div className="flex-column">
        <div className="flex">
          <p className="ttc mr2">{favorite.name}</p>
          {favorite.memo && (
            <Popup
              hoverable
              basic
              className="overflow-wrap"
              content={
                <div
                  style={{ maxWidth: 250, maxWidth: 200, overflow: 'auto' }}
                  className="overflow-wrap">
                  {favorite.memo}
                </div>
              }
              trigger={
                <span tabIndex={0} role="button">
                  <Icon color="white" name="attach" className="cur-pointer" />
                </span>
              }
            />
          )}
        </div>
        <div>
          <p className="f6">#{favorite.id}</p>
        </div>
      </div>
      <div className="remover">
        <Popup
          basic
          size="tiny"
          content={t('remove')}
          trigger={
            <Icon
              onClick={() => remove(favorite)}
              className="favorite-remove cur-pointer"
              color="red"
              name="delete"
            />
          }
        />
      </div>
    </div>
  );
};

Favorite.propTypes = {
  favorite: PropTypes.object,
  remove: PropTypes.func,
};

export default Favorite;
