import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Popup } from 'semantic-ui-react';
import KeyClick from '../common/KeyClick';
import { translate } from 'poke-i18n';
import './Favorite.css';

const t = translate(['favorite']);

const Favorite = ({ favorite, remove }) => {

  return (
    <div
      className="favorite-item flex justify-between items-center ph2 pv3"
      tabIndex={0}
      role="button">
      <div className="flex-column">
        <div className="flex">
          <p className="ttc mr2">{favorite.name}</p>
          {favorite.memo && (
            <Popup
              on={['hover', 'focus']}
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
                  <Icon name="attach" className="cur-pointer" />
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
          on={['hover', 'focus']}
          basic
          size="tiny"
          content={t('remove')}
          trigger={
            <div>
              <KeyClick handler={() => remove(favorite)}>
                <span tabIndex={0} role="button">
                  <Icon
                    className="favorite-remove cur-pointer"
                    name="delete"
                  />
                </span>
              </KeyClick>
            </div>
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
