import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Popup } from 'semantic-ui-react';
import KeyClick from '../common/KeyClick';
import { translate } from 'poke-i18n';
import { useRemoveFavorite } from 'poke-store';
import './RemoveFavorite.css';

const t = translate(['favorite']);

const RemoveFavorite = ({ favorite }) => {
  const remove = useRemoveFavorite();
  return (
    <Popup
      basic
      on={['hover', 'focus']}
      content={t('remove')}
      trigger={
        <div>
          <KeyClick handler={() => remove(favorite)}>
            <span tabIndex={0} role="button">
              <Icon className="remove-fav-icon cur-pointer" name="delete" />
            </span>
          </KeyClick>
        </div>
      }
    />
  );
};

RemoveFavorite.propTypes = {
  favorite: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default RemoveFavorite;
